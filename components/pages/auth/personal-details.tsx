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
import { getItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { useAuthStore } from '@/store/auth.store';

// Zod Validation Schema for Personal Details Form
const personalDetailsSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      agreed: false,
    },
  });

  const onSubmit = async (data: PersonalDetailsFormData) => {
    setApiError(null);
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
          className="border border-white/90 shadow-2xl p-8 sm:p-10 rounded-[32px] sm:rounded-[36px] text-center space-y-6 w-full"
        >
          {/* Top Brand Logo */}
          <div className="flex justify-center pt-2">
            <WhiteLogo color="#1E3160" width={190} height={85} />
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-[34px] font-normal text-slate-900 tracking-tight">
              Personal Details
            </h1>
            <p className="text-xs sm:text-[15.01px] text-slate-700 font-[400] leading-relaxed max-w-xs mx-auto">
              Let&apos;s get you all set up so you can access your personal account.
            </p>
          </div>

          {/* Form with React Hook Form & Zod Validation */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left pt-2" noValidate>
            {/* First Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="firstName" className="text-[17.01px] font-normal text-slate-700 block">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter Your Name"
                aria-invalid={!!errors.firstName}
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="lastName" className="text-[17.01px] font-normal text-slate-700 block">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter Your Name"
                aria-invalid={!!errors.lastName}
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.lastName.message}
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
          <p className="text-[11px] text-slate-400 font-normal pt-2">
            Investments are subject to market risk
          </p>
        </GlassCard>
      </MotionItem>

      {/* Bottom Link outside card */}
      <MotionItem direction="up" distance={15} duration={0.5} className="mt-6 text-center">
        <p className="text-xs sm:text-sm text-slate-700 font-normal">
          Already have an account?{' '}
          <a href="/login" className="text-slate-900 font-medium underline hover:text-[var(--blue-normal)]">
            Login
          </a>
        </p>
      </MotionItem>
    </MotionContainer>
  );
};

export default PersonalDetailsPage;
