'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { WhiteLogo } from '@/components/svg/logo';
import { GlassCard } from '@/components/common/cards';
import { MotionContainer, MotionItem } from '@/components/animations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { getItem, setItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useAuthStore } from '@/store/auth.store';
import { sendEmailOtpForOnboardingAPI, verifyEmailOtpForOnboardingAPI } from '@/services/auth.api';
import { EmailOtpVerificationModal, EmailVerifiedSuccessModal } from '@/components/common/email-verification/email-verification-modals';
import { INDIAN_STATES_LIST } from '@/constants/indian-states';
import { CheckCircle2, Loader2, ChevronDown } from 'lucide-react';

// Zod Validation Schema for Personal Details Form (Address & Email optional, if email typed must be valid)
const personalDetailsSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  address: z.string().optional(),
  state: z.string().optional(),
  email: z
    .string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true; // Optional: empty email allowed
      return z.string().email().safeParse(val).success; // If typed, must be valid email
    }, { message: 'Please enter a valid email address' }),
  agreed: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the Terms & Conditions and Privacy Policy'),
});

type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>;

export const PersonalDetailsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get('redirect');
  const [apiError, setApiError] = useState<string | null>(null);

  // Email verification state
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      email: '',
      agreed: false,
    },
  });

  const emailValue = watch('email')?.trim() || '';

  // Trigger Email Verification OTP (only if user provided an email)
  const handleInitiateEmailVerify = async () => {
    setApiError(null);
    if (!emailValue || !emailValue.includes('@')) {
      setError('email', { type: 'manual', message: 'Please enter a valid email address to verify' });
      return;
    }

    const onboardingToken = getItem(STORAGE_KEYS.ONBOARDING_TOKEN);
    if (!onboardingToken) {
      setApiError('Session expired. Please start login again.');
      setTimeout(() => router.push('/login'), 1500);
      return;
    }

    try {
      setSendingOtp(true);
      await sendEmailOtpForOnboardingAPI({
        onboardingToken,
        email: emailValue,
      });
      setShowOtpModal(true);
    } catch (err: any) {
      console.error('Send onboarding email OTP error:', err);
      const msg = err?.response?.data?.message || 'Failed to send OTP code. Please try again.';
      setApiError(msg);
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify Email OTP Submission
  const handleVerifyEmailOtp = async (code: string) => {
    const onboardingToken = getItem(STORAGE_KEYS.ONBOARDING_TOKEN);
    if (!onboardingToken) {
      throw new Error('Session expired. Please start login again.');
    }

    const res = await verifyEmailOtpForOnboardingAPI({
      onboardingToken,
      email: emailValue,
      code,
    });

    // Extract new updated onboarding token from API response
    const updatedToken =
      res?.data?.onboardingToken ||
      res?.onboardingToken ||
      res?.data?.token ||
      onboardingToken;

    if (updatedToken) {
      setItem(STORAGE_KEYS.ONBOARDING_TOKEN, updatedToken);
    }

    setIsEmailVerified(true);
    setVerifiedEmail(emailValue);
    setShowOtpModal(false);
    setShowSuccessModal(true);
  };

  // Resend Email OTP
  const handleResendOtp = async () => {
    const onboardingToken = getItem(STORAGE_KEYS.ONBOARDING_TOKEN);
    if (!onboardingToken || !emailValue) return;
    await sendEmailOtpForOnboardingAPI({
      onboardingToken,
      email: emailValue,
    });
  };

  const onSubmit = async (data: PersonalDetailsFormData) => {
    setApiError(null);

    // If user provided an email address, ensure it is verified before submitting
    const userEnteredEmail = data.email?.trim() || '';
    if (userEnteredEmail !== '') {
      if (!isEmailVerified || verifiedEmail !== userEnteredEmail) {
        setApiError('Please verify your email address before creating your account.');
        await handleInitiateEmailVerify();
        return;
      }
    }

    const onboardingToken = getItem(STORAGE_KEYS.ONBOARDING_TOKEN);
    if (!onboardingToken) {
      setApiError('Session expired. Please start login again.');
      setTimeout(() => router.push('/login'), 1500);
      return;
    }

    try {
      await useAuthStore.getState().register({
        onboardingToken,
        firstName: data.firstName,
        lastName: data.lastName,
        fullAddress: data.address || '',
        state: data.state || '',
        email: userEnteredEmail || undefined,
        consentGiven: data.agreed,
      });

      router.push(redirectParam || '/');
    } catch (error: any) {
      console.error('Registration Error:', error);
      const msg =
        error.response?.data?.message ||
        (Array.isArray(error.response?.data?.message)
          ? error.response.data.message[0]
          : 'Failed to create account. Please try again.');
      setApiError(msg);
    }
  };

  return (
    <MotionContainer staggerDelay={0.15} delay={0.1} className="w-full max-w-md mx-auto">
      <MotionItem direction="scaleDown" scale={1.05} duration={0.6}>
        <GlassCard
          variant="frosted"
          rounded="3xl"
          padding="none"
          className="border border-white/90 shadow-2xl p-6 sm:p-9 rounded-[32px] sm:rounded-[36px] text-center space-y-5 w-full"
        >
          {/* Top Brand Logo */}
          <div className="flex justify-center pt-1">
            <WhiteLogo color="#1E3160" width={180} height={75} />
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-[32px] font-normal text-slate-900 tracking-tight">
              Personal Details
            </h1>
            <p className="text-xs sm:text-[14px] text-slate-600 font-normal leading-relaxed max-w-xs mx-auto">
              Let&apos;s get you all set up so you can access your personal account.
            </p>
          </div>

          {/* Form with React Hook Form & Zod Validation */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left pt-1" noValidate>
            {/* First Name Input */}
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-xs sm:text-sm font-medium text-slate-700 block">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter Your Name"
                aria-invalid={!!errors.firstName}
                className="bg-white/90 border-slate-200 rounded-2xl h-11 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)] shadow-2xs"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name Input */}
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-xs sm:text-sm font-medium text-slate-700 block">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter Your Name"
                aria-invalid={!!errors.lastName}
                className="bg-white/90 border-slate-200 rounded-2xl h-11 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)] shadow-2xs"
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Address & State 2-Column Row */}
            <div className="grid grid-cols-2 gap-3">
              {/* Address Input (Optional) */}
              <div className="space-y-1">
                <label htmlFor="address" className="text-xs sm:text-sm font-medium text-slate-700 block truncate">
                  Address
                </label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter Your Address"
                  className="bg-white/90 border-slate-200 rounded-2xl h-11 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)] shadow-2xs"
                  {...register('address')}
                />
              </div>

              {/* State Dropdown (IndianState Enum, Optional) */}
              <div className="space-y-1">
                <label htmlFor="state" className="text-xs sm:text-sm font-medium text-slate-700 block truncate">
                  State
                </label>
                <div className="relative">
                  <select
                    id="state"
                    className="w-full appearance-none bg-white/90 border border-slate-200 rounded-2xl h-11 px-3.5 pr-8 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)] shadow-2xs outline-none cursor-pointer"
                    {...register('state')}
                  >
                    <option value="" className="text-slate-400">Enter Your State</option>
                    {INDIAN_STATES_LIST.map((st) => (
                      <option key={st} value={st} className="text-slate-900">
                        {st}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Email Input with Inline Verification Pill (Optional) */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-700 block">
                Email
              </label>
              <div className="relative flex items-center">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  aria-invalid={!!errors.email}
                  className="bg-white/90 border-slate-200 rounded-2xl h-11 pr-24 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)] shadow-2xs"
                  {...register('email', {
                    onChange: () => {
                      if (isEmailVerified) setIsEmailVerified(false);
                    },
                  })}
                />

                {/* Right Inline Verify Tag / Button (Active when user types an email) */}
                {emailValue && (
                  <div className="absolute right-2.5 flex items-center">
                    {isEmailVerified && verifiedEmail === emailValue ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center gap-1 shadow-2xs">
                        <span>Verified</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleInitiateEmailVerify}
                        disabled={sendingOtp}
                        className="px-3 py-1 rounded-full text-[11px] font-medium bg-rose-50 text-rose-500 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1 shadow-2xs"
                      >
                        {sendingOtp ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Verify</span>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {errors.email && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Terms & Privacy Checkbox */}
            <div className="flex items-center gap-2.5 pt-1">
              <Controller
                name="agreed"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="termsCheckbox"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(!!checked)}
                    aria-invalid={!!errors.agreed}
                    className={cn(
                      'w-4 h-4 rounded border-slate-300 cursor-pointer transition-all',
                      errors.agreed && 'border-rose-500 ring-2 ring-rose-500/30'
                    )}
                  />
                )}
              />
              <label htmlFor="termsCheckbox" className="text-xs text-slate-500 font-normal select-none cursor-pointer">
                I agree to the{' '}
                <a href="/terms" className="text-slate-800 font-medium underline hover:text-[var(--blue-normal)]">
                  Terms &amp; Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-slate-800 font-medium underline hover:text-[var(--blue-normal)]">
                  Privacy Policy
                </a>
              </label>
            </div>

            {apiError && (
              <p className="text-xs text-rose-500 font-medium text-center pt-1">
                {apiError}
              </p>
            )}

            {/* Action Button: Create account */}
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="w-full h-auto py-3.5 rounded-full border border-[var(--blue-normal)] text-[var(--blue-normal)] font-medium bg-white hover:bg-sky-50 shadow-sm transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50 mt-2"
            >
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          {/* Disclaimer Text */}
          <p className="text-[11px] text-slate-400 font-normal pt-1">
            Investments are subject to market risk
          </p>
        </GlassCard>
      </MotionItem>

      {/* Bottom Link outside card */}
      <MotionItem direction="up" distance={15} duration={0.5} className="mt-5 text-center">
        <p className="text-xs sm:text-sm text-slate-700 font-normal">
          Already have an account?{' '}
          <a href="/login" className="text-slate-900 font-medium underline hover:text-[var(--blue-normal)]">
            Login
          </a>
        </p>
      </MotionItem>

      {/* Modals for OTP & Success */}
      <EmailOtpVerificationModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        email={emailValue}
        onVerify={handleVerifyEmailOtp}
        onResend={handleResendOtp}
        onEditEmail={() => setShowOtpModal(false)}
      />

      <EmailVerifiedSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        email={verifiedEmail}
        ctaText="Done"
      />
    </MotionContainer>
  );
};

export default PersonalDetailsPage;
