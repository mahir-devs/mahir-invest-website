'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { WhiteLogo } from '@/components/svg/logo';
import { GlassCard } from '@/components/common/cards';
import { MotionContainer, MotionItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { SquarePen } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { verifyOtpAPI, onBoardingAPI } from '@/services/auth.api';
import { setItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useAuthStore } from '@/store/auth.store';

export const VerifyOtpPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const redirectParam = searchParams.get('redirect');

  const [otpValue, setOtpValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setSuccessMessage(null);

    if (otpValue.length < 4) {
      setApiError('Please enter all 4 digits of the OTP code.');
      return;
    }

    if (!phone || isNaN(Number(phone))) {
      setApiError('Invalid or missing mobile number. Please go back to login.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await verifyOtpAPI({
        phone: Number(phone),
        code: Number(otpValue),
      });

      const token = data?.data?.onboardingToken;

      if (!token) {
        throw new Error('Onboarding token not returned from server');
      }

      setItem(STORAGE_KEYS.ONBOARDING_TOKEN, token);

      if (data.data?.doesUserAlreadyExists) {
        await useAuthStore.getState().login({ onboardingToken: token });
        router.push(redirectParam || '/');
      } else {
        const detailsTarget = redirectParam
          ? `/personal-details?redirect=${encodeURIComponent(redirectParam)}`
          : '/personal-details';
        router.push(detailsTarget);
      }
    } catch (error: any) {
      console.error('OTP Verification Error:', error);
      const msg =
        error.response?.data?.message ||
        (Array.isArray(error.response?.data?.message)
          ? error.response.data.message[0]
          : 'OTP verification failed. Please try again.');
      setApiError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setApiError(null);
    setSuccessMessage(null);

    if (!phone || isNaN(Number(phone))) {
      setApiError('Invalid or missing mobile number. Please go back to login.');
      return;
    }

    setIsResending(true);

    try {
      const data = await onBoardingAPI({ phone: Number(phone) });
      if (data.message === 'Success' || data) {
        setSuccessMessage('A new OTP code has been sent successfully!');
      }
    } catch (error: any) {
      console.error('Resend OTP Error:', error);
      setApiError(
        error.response?.data?.message || 'Failed to resend OTP. Please try again.'
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <MotionContainer staggerDelay={0.15} delay={0.1} className="w-full max-w-md mx-auto">
      <MotionItem direction="scaleDown" scale={1.05} duration={0.6}>
        <GlassCard
          variant="frosted"
          rounded="3xl"
          padding="none"
          className="border border-white/90 shadow-2xl p-8 sm:p-10 rounded-[32px] sm:rounded-[36px] text-center space-y-6 w-full"
        >
          {/* Top Brand Logo */}
          <div className="flex justify-center pt-2">
            <WhiteLogo color="#1E3160" width={190} height={85} />
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-[34px] font-normal text-slate-900 tracking-tight">
              Verify code
            </h1>
            <p className="text-xs sm:text-[15.01px] text-slate-700 font-[400] leading-relaxed max-w-xs mx-auto">
              An OTP has been sent to your Mobile no.
            </p>
            <div className="flex items-center justify-center gap-1.5 text-slate-900 text-sm font-normal pt-0.5">
              <span>{phone ? `+91 ${phone}` : '+91 0000000000'}</span>
              <a
                href="/login"
                className="inline-flex items-center text-slate-600 hover:text-[var(--blue-normal)] transition-colors p-0.5"
                title="Edit Mobile Number"
              >
                <SquarePen className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* OTP Verification Form */}
          <form onSubmit={handleVerify} className="space-y-6 text-center pt-2">
            {/* 4-Digit Input OTP */}
            <div className="flex justify-center">
              <InputOTP
                maxLength={4}
                value={otpValue}
                onChange={(value) => setOtpValue(value)}
              >
                <InputOTPGroup className="gap-2 sm:gap-2.5">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Error or Success Messages */}
            {apiError && (
              <p className="text-xs text-rose-500 font-medium text-center">
                {apiError}
              </p>
            )}
            {successMessage && (
              <p className="text-xs text-emerald-600 font-medium text-center">
                {successMessage}
              </p>
            )}

            {/* Action Button: Verify & Continue */}
            <Button
              type="submit"
              disabled={isSubmitting || otpValue.length < 4}
              variant="outline"
              className="w-full h-auto py-3.5 rounded-full border border-[var(--blue-normal)] text-[var(--blue-normal)] font-medium bg-white hover:bg-sky-50 text-black shadow-sm transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Verifying...' : 'Verify & Continue'}
            </Button>

            {/* Resend Prompt */}
            <p className="text-xs text-slate-500 font-normal">
              Didn&apos;t receive a code?{' '}
              <button
                type="button"
                onClick={handleResend}
                disabled={isResending}
                className="text-slate-800 font-medium underline hover:text-[var(--blue-normal)] cursor-pointer bg-transparent border-none p-0 inline disabled:opacity-50"
              >
                {isResending ? 'Resending...' : 'Resend'}
              </button>
            </p>
          </form>
        </GlassCard>
      </MotionItem>

      {/* Bottom Link outside card */}
      <MotionItem direction="up" distance={15} duration={0.5} className="mt-6 text-center">
        <a
          href="/login"
          className="text-xs sm:text-sm text-slate-900 font-normal underline hover:text-[var(--blue-normal)] transition-colors"
        >
          Back to login
        </a>
      </MotionItem>
    </MotionContainer>
  );
};

export default VerifyOtpPage;
