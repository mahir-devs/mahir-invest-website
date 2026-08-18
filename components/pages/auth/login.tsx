'use client';

import React from 'react';
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

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { onBoardingAPI } from '@/services/auth.api';

// Zod Validation Schema for Login Form
const loginSchema = z.object({
  mobileNumber: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  agreed: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the Terms & Conditions and Privacy Policy'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get('redirect');
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      mobileNumber: '',
      agreed: false,
    },
  });

  const mobileValue = watch('mobileNumber');

  const onSubmit = async (data: LoginFormData) => {
    setApiError(null);
    try {
      const res = await onBoardingAPI({ phone: Number(data.mobileNumber) });
      if (res.message === 'Success' || res) {
        const otpTarget = redirectParam
          ? `/verify-otp?phone=${data.mobileNumber}&redirect=${encodeURIComponent(redirectParam)}`
          : `/verify-otp?phone=${data.mobileNumber}`;
        router.push(otpTarget);
      }
    } catch (error: any) {
      console.error('Failed to send OTP:', error);
      setApiError(
        error.response?.data?.message ||
        (Array.isArray(error.response?.data?.message)
          ? error.response.data.message[0]
          : 'Failed to send OTP. Please try again.')
      );
    }
  };

  return (
    <MotionContainer staggerDelay={0.15} delay={0.1} className="w-full max-w-md mx-auto">
      <MotionItem direction="scaleDown" scale={1.05} duration={0.6}>
        <GlassCard
          variant="frosted"
          rounded="3xl"
          padding="none"
          className=" border border-white/90 shadow-2xl p-8 sm:p-10 rounded-[32px] sm:rounded-[36px] text-center space-y-6 w-full"
        >
          {/* Top Brand Logo */}
          <div className="flex justify-center pt-2">
            <WhiteLogo color="#1E3160" width={190} height={85} />
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-[34px] font-normal text-slate-900 tracking-tight">
              Welcome to <span className='font-syne'>MAHIR</span>
            </h1>
            <p className="text-xs sm:text-[15.01px] text-slate-700 font-[400] leading-relaxed max-w-xs mx-auto">
              Login to access your account to manage your dashboard.
            </p>
          </div>

          {/* Login Form with React Hook Form & Zod Validation */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left pt-2" noValidate>
            {/* Mobile No Input */}
            <div className="space-y-1.5">
              <label htmlFor="mobileNumber" className="text-[17.01px] font-normal text-slate-700 block">
                Mobile No.
              </label>
              <Input
                id="mobileNumber"
                type="tel"
                maxLength={10}
                placeholder="Enter 10-digit mobile number"
                aria-invalid={!!errors.mobileNumber}
                value={mobileValue}
                {...register('mobileNumber', {
                  onChange: (e) => {
                    const cleaned = e.target.value.replace(/\D/g, '');
                    setValue('mobileNumber', cleaned, { shouldValidate: true });
                  },
                })}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-500 font-medium pt-0.5">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* Terms & Privacy Shadcn Checkbox */}
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

            {/* Action Button: Send OTP */}
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="w-full h-auto py-3.5 rounded-full border border-[var(--blue-normal)] text-[var(--blue-normal)] font-medium bg-white hover:bg-sky-50 shadow-sm transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50 mt-2"
            >
              {isSubmitting ? 'Sending...' : 'Send OTP'}
            </Button>
          </form>

          {/* Disclaimer Text */}
          <p className="text-[11px] text-slate-400 font-normal pt-2">
            Investments are subject to market risk
          </p>
        </GlassCard>
      </MotionItem>


    </MotionContainer>
  );
};

export default LoginPage;
