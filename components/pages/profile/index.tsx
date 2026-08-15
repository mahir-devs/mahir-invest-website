'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { GlassCard } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LogOut, Camera, Loader2, CheckCircle2, AlertCircle, Pencil, X, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { useAuthStore } from '@/store/auth.store';
import { getProfileAPI, updateProfileAPI } from '@/services/auth.api';
import { verifyUserSubscription } from '@/services/subscription.api';
import { getItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { toast } from '@/components/ui/toast';

export const ProfilePage = () => {
  const router = useRouter();
  const storeUser = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const getProfile = useAuthStore((state) => state.getProfile);
  const logout = useAuthStore((state) => state.logout);

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>('');

  // Load real profile data & enforce route protection
  const loadProfileData = async () => {
    const hasToken = token || getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (!hasToken) {
      router.replace('/login');
      return;
    }

    try {
      setLoading(true);
      const res = await getProfileAPI();
      const userData = res?.data?.data || res?.data?.user || res?.data || res?.user || res || storeUser;

      if (userData) {
        setFirstName(userData.firstName || userData.name?.split(' ')[0] || '');
        setLastName(userData.lastName || userData.name?.split(' ').slice(1).join(' ') || '');
        setEmail(userData.email || '');
        setMobile(userData.phone || userData.mobile || '');

        const currentUserId = userData.id || userData._id || userData.userId || storeUser?.id || storeUser?._id;

        // Check subscription status
        let activeMember =
          userData.subscriptionStatus === 'active' ||
          userData.isSubscribed === true ||
          userData.subscription?.status === 'active' ||
          userData.role === 'member';

        if (currentUserId) {
          try {
            const subRes: any = await verifyUserSubscription(String(currentUserId));
            const body = subRes?.data;

            const list = Array.isArray(body?.data?.data)
              ? body.data.data
              : Array.isArray(body?.data)
                ? body.data
                : Array.isArray(body?.subscriptions)
                  ? body.subscriptions
                  : Array.isArray(body)
                    ? body
                    : body?.data
                      ? [body.data]
                      : body
                        ? [body]
                        : [];

            if (list.length > 0) {
              const hasActiveSub = list.some((sub: any) => {
                if (!sub) return false;
                const statusStr = String(
                  sub?.status || sub?.razorpayStatus || sub?.paymentStatus || sub?.subscriptionStatus || ''
                ).toLowerCase();
                return (
                  statusStr === 'active' ||
                  statusStr === 'authenticated' ||
                  statusStr === 'captured' ||
                  statusStr === 'completed' ||
                  sub?.isActive === true ||
                  sub?.isSubscribed === true
                );
              });

              if (hasActiveSub) {
                activeMember = true;
              }
            }
          } catch (e) {
            console.error('Error verifying user subscription:', e);
          }
        }

        setIsMember(activeMember);
      } else {
        router.replace('/login');
      }
    } catch (error) {
      await logout();
      router.replace('/login');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfileData();

    const handleFocus = () => {
      loadProfileData();
    };

    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
      toast.add({
        title: 'Image Selected',
        description: 'New profile photo selected. Click "Save Changes" to apply.',
        type: 'info',
      });
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setUpdating(true);

    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);

      if (avatarFile) {
        formData.append('avatar', avatarFile);
      }

      await updateProfileAPI(formData);
      await getProfile();
      await loadProfileData();

      toast.add({
        title: 'Profile Updated',
        description: 'Your profile details have been saved successfully.',
        type: 'success',
      });

      setFeedback({ type: 'success', message: 'Profile updated successfully!' });
      setIsEditing(false);
      setAvatarFile(null);
    } catch (err: any) {
      const errMsg = err?.response?.data?.message || err?.message || 'Failed to update profile. Please try again.';
      toast.add({
        title: 'Update Failed',
        description: errMsg,
        type: 'error',
      });
      setFeedback({
        type: 'error',
        message: errMsg,
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setAvatarFile(null);
    setAvatarPreview('');
    setFeedback(null);
    if (storeUser) {
      setFirstName(storeUser.firstName || storeUser.name?.split(' ')[0] || '');
      setLastName(storeUser.lastName || storeUser.name?.split(' ').slice(1).join(' ') || '');
      setEmail(storeUser.email || '');
      setMobile(storeUser.phone || storeUser.mobile || '');
    }
    // toast.add({
    //   title: 'Edits Reset',
    //   description: 'Profile changes were cancelled.',
    //   type: 'info',
    // });
  };

  const handleSignOutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmSignOut = async () => {
    setIsLogoutModalOpen(false);
    await logout();
    toast.add({
      title: 'Signed Out',
      description: 'You have been logged out successfully.',
      type: 'info',
    });
    router.push('/');
  };

  const currentAvatarUrl =
    avatarPreview ||
    storeUser?.presignedAvatarUrl ||
    storeUser?.avatar ||
    storeUser?.image ||
    storeUser?.profileImage ||
    '/images/claude/commonbgfinal.png';

  const userInitials =
    `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase() ||
    storeUser?.name?.[0]?.toUpperCase() ||
    'U';

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Single Top Sky Blue Gradient Background Container */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-20 sm:pt-32 pb-16 sm:pb-28 px-3 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={90} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-4xl mx-auto text-center z-10 space-y-6 sm:space-y-12">
          {/* Header Title & Subtitle */}
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl mx-auto">
            <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
              <h1 className="text-3xl sm:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                My Profile
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-xs sm:text-base text-white/90 font-normal leading-relaxed px-2">
                Check your profile information and update your personal details
              </p>
            </MotionItem>
          </div>

          {/* Feedback Message */}
          {feedback && (
            <div
              className={`max-w-2xl mx-auto p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-medium border shadow-md animate-in fade-in duration-200 ${feedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 shrink-0" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          {/* Main Outer Glass Card Container */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full">
            <GlassCard
              variant="dark"
              rounded="3xl"
              padding="none"
              className="border border-white/90 shadow-2xl p-4 sm:p-10 rounded-[28px] sm:rounded-[40px] text-left space-y-5 sm:space-y-8 w-full overflow-hidden"
            >
              {/* Inner Card 1: User Avatar & Header Bar */}
              <div className="relative bg-sky-200/40 border border-sky-300/40 rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
                {/* Clean Top-Right Edit Button inside Inner Card 1 */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20">
                  {!isEditing ? (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      title="Edit Profile"
                      className="p-2 sm:px-3.5 sm:py-2 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[var(--blue-normal)] active:scale-95 shadow-md border border-white/80 transition-all flex items-center gap-1.5 cursor-pointer group"
                    >
                      <Pencil className="w-4 h-4 text-slate-700 group-hover:text-[var(--blue-normal)] transition-colors" />
                      <span className="text-xs font-semibold hidden sm:inline-block">Edit Profile</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      title="Cancel Editing"
                      className="p-2 sm:px-3.5 sm:py-2 rounded-full bg-slate-200/90 hover:bg-slate-300 text-slate-700 active:scale-95 shadow-md border border-slate-300 transition-all flex items-center gap-1.5 cursor-pointer group"
                    >
                      <X className="w-4 h-4 text-slate-700" />
                      <span className="text-xs font-semibold hidden sm:inline-block">Cancel</span>
                    </button>
                  )}
                </div>

                {/* Round Avatar Image */}
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl">
                  {currentAvatarUrl ? (
                    <Image
                      src={currentAvatarUrl}
                      alt="User Avatar"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <span>{userInitials}</span>
                  )}

                  {isEditing && (
                    <label className="absolute inset-0 bg-black/50 hover:bg-black/60 flex items-center justify-center cursor-pointer transition-colors group">
                      <Camera className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* User Info */}
                <div className="space-y-1.5 w-full pr-0 sm:pr-24">
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
                    {loading ? (
                      <span className="inline-block w-36 h-7 bg-slate-300/60 animate-pulse rounded-md" />
                    ) : (
                      `${firstName} ${lastName}`.trim() || storeUser?.name || 'User Profile'
                    )}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal truncate max-w-full">
                    {loading ? (
                      <span className="inline-block w-48 h-4 bg-slate-300/40 animate-pulse rounded-md" />
                    ) : (
                      email || storeUser?.email || 'No email provided'
                    )}
                  </p>
                  <div className="pt-1">
                    {isMember ? (
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                        MAHIR Member
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/80 shadow-2xs">
                        Non Member
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Inner Card 2: Personal Information Form */}
              <div className="bg-sky-200/30 border border-sky-300/40 rounded-[22px] sm:rounded-[28px] p-4 sm:p-8 space-y-5 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                    Personal Information
                  </h3>
                  {isEditing && (
                    <span className="text-[11px] font-medium text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200">
                      Editing Mode
                    </span>
                  )}
                </div>

                <form onSubmit={handleSave} className="space-y-5 sm:space-y-6">
                  {/* 2-Column Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* First Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        First Name
                      </label>
                      <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Write Your First Name"
                        disabled={!isEditing || updating}
                        className="bg-white/90 border-slate-200 rounded-xl sm:rounded-2xl h-10 sm:h-11 text-slate-900 font-medium text-xs sm:text-sm disabled:opacity-80 focus:ring-2 focus:ring-[var(--blue-normal)]"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Write Your Last Name"
                        disabled={!isEditing || updating}
                        className="bg-white/90 border-slate-200 rounded-xl sm:rounded-2xl h-10 sm:h-11 text-slate-900 font-medium text-xs sm:text-sm disabled:opacity-80 focus:ring-2 focus:ring-[var(--blue-normal)]"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Write Your Email Address"
                        disabled={!isEditing || updating}
                        className="bg-white/90 border-slate-200 rounded-xl sm:rounded-2xl h-10 sm:h-11 text-slate-900 font-medium text-xs sm:text-sm disabled:opacity-80 focus:ring-2 focus:ring-[var(--blue-normal)]"
                      />
                    </div>

                    {/* Mobile Number Group */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">
                        Mobile Number
                      </label>
                      <div className="flex items-center gap-2">
                        {/* Country Code */}
                        <div className="bg-white/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3 h-10 sm:h-11 flex items-center gap-1.5 text-xs font-semibold text-slate-700 shrink-0 select-none shadow-2xs">
                          <span>🇮🇳</span>
                          <span>+91</span>
                        </div>
                        {/* Mobile Input */}
                        <Input
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                          placeholder="Mobile number"
                          maxLength={10}
                          disabled={true}
                          className="bg-white/90 border-slate-200 rounded-xl sm:rounded-2xl h-10 sm:h-11 text-slate-900 font-medium text-xs sm:text-sm flex-1 disabled:opacity-75"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Action Buttons */}
                  {isEditing && (
                    <div className="flex flex-col-reverse xs:flex-row justify-end items-stretch xs:items-center gap-2.5 pt-2">
                      <Button
                        type="button"
                        onClick={handleCancelEdit}
                        disabled={updating}
                        className="bg-slate-200/80 hover:bg-slate-300 text-slate-700 rounded-xl px-4 py-2 text-xs sm:text-sm font-medium border-none shadow-none cursor-pointer h-10 sm:h-auto"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={updating}
                        className="bg-[var(--blue-normal)] hover:bg-[var(--blue-normal-hover)] text-white rounded-xl px-5 py-2 text-xs sm:text-sm font-medium shadow-md cursor-pointer border-none h-10 sm:h-auto flex items-center justify-center gap-2"
                      >
                        {updating ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Check className="w-4 h-4" />
                        )}
                        <span>{updating ? 'Saving...' : 'Save Changes'}</span>
                      </Button>
                    </div>
                  )}
                </form>
              </div>

              {/* Bottom Sign Out Action inside main card */}
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleSignOutClick}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-rose-600 font-medium text-xs sm:text-sm transition-colors cursor-pointer p-1"
                >
                  <LogOut className="w-4 h-4 stroke-[1.75]" />
                  <span>Sign Out</span>
                </button>
              </div>
            </GlassCard>
          </MotionItem>
        </MotionContainer>
      </section>

      {/* Sign Out Confirmation Dialog */}
      <Dialog open={isLogoutModalOpen} onOpenChange={setIsLogoutModalOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-md bg-white border border-slate-200/90 shadow-2xl rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 text-slate-900 select-none">
          <div className="text-center space-y-4 sm:space-y-5">
            {/* Red LogOut Icon Badge */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
              <LogOut className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
            </div>

            {/* Text Header */}
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                Sign Out Confirmation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                Are you sure you want to sign out of your account? You will need to log back in to access your profile and investment tools.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <Button
                type="button"
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 py-2.5 sm:py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-none h-auto"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConfirmSignOut}
                className="flex-1 py-2.5 sm:py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs sm:text-sm shadow-md transition-colors cursor-pointer border-none h-auto"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
