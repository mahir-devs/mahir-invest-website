'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle2, Pencil, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// 1. Email OTP Verification Modal
// ============================================================================
export interface EmailOtpVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
  onEditEmail?: () => void;
  title?: string;
  subtitle?: string;
  codeLength?: number; // Default 4 digits
}

export const EmailOtpVerificationModal: React.FC<EmailOtpVerificationModalProps> = ({
  isOpen,
  onClose,
  email,
  onVerify,
  onResend,
  onEditEmail,
  title = 'Enter the OTP',
  subtitle,
  codeLength = 4,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(codeLength).fill(''));
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Keep a persistent copy of the email address so it never disappears during input focus
  const [activeEmail, setActiveEmail] = useState(email);

  useEffect(() => {
    if (email && email.trim() !== '') {
      setActiveEmail(email);
    }
  }, [email]);

  const displayEmail = email || activeEmail;

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp(Array(codeLength).fill(''));
      setError(null);
      setTimeLeft(45);
      if (email && email.trim() !== '') {
        setActiveEmail(email);
      }
      // Auto-focus first input after animation
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen, codeLength, email]);

  // 45s Countdown Timer
  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  const handleChange = (index: number, value: string) => {
    // Only accept numeric characters
    const cleanVal = value.replace(/\D/g, '');
    if (!cleanVal) {
      const updated = [...otp];
      updated[index] = '';
      setOtp(updated);
      return;
    }

    // Handle single digit entry
    const updated = [...otp];
    updated[index] = cleanVal[cleanVal.length - 1];
    setOtp(updated);
    setError(null);

    // Auto-focus next input
    if (index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, codeLength);
    if (!pastedData) return;

    const newOtp = Array(codeLength).fill('');
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    setError(null);

    const nextFocusIndex = Math.min(pastedData.length, codeLength - 1);
    inputRefs.current[nextFocusIndex]?.focus();
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const code = otp.join('');
    if (code.length < codeLength) {
      setError(`Please enter the complete ${codeLength}-digit OTP.`);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await onVerify(code);
    } catch (err: any) {
      console.error('OTP verification failed:', err);
      const msg =
        err?.response?.data?.message ||
        (Array.isArray(err?.response?.data?.message)
          ? err.response.data.message[0]
          : 'Invalid or expired OTP. Please try again.');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResendClick = async () => {
    if (timeLeft > 0 || resending) return;
    try {
      setResending(true);
      setError(null);
      await onResend();
      setTimeLeft(45);
      setOtp(Array(codeLength).fill(''));
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Failed to resend OTP. Please try again.';
      setError(msg);
    } finally {
      setResending(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[92vw] sm:max-w-[430px] bg-white border border-slate-100 shadow-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 text-slate-900 select-none overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
        <DialogTitle className="text-xl sm:text-2xl font-semibold text-slate-900 text-center tracking-tight">
          {title}
        </DialogTitle>

        <div className="text-xs sm:text-sm text-slate-500 text-center space-y-1 mt-1.5">
          <p className="leading-normal text-slate-500 font-normal">
            {subtitle || `We have sent ${codeLength} digit verification code to`}
          </p>
          {displayEmail ? (
            <div className="flex items-center justify-center gap-1.5 pt-0.5 text-slate-800 font-semibold">
              <span className="truncate max-w-[260px] text-slate-900 font-semibold">{displayEmail}</span>
              {onEditEmail && (
                <button
                  type="button"
                  onClick={onEditEmail}
                  title="Edit email address"
                  className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-700 transition-colors cursor-pointer inline-flex items-center"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : onEditEmail ? (
            <div className="flex items-center justify-center pt-0.5">
              <button
                type="button"
                onClick={onEditEmail}
                title="Edit email address"
                className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-700 transition-colors cursor-pointer inline-flex items-center"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className=" space-y-6 ">
          {/* Centered Square OTP Input Boxes */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 my-2 mb-6">
            {otp.map((digit, idx) => (
              <Input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                disabled={loading}
                className={cn(
                  'w-12 h-12 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-bold rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xs transition-all p-0 outline-none focus:outline-none focus-visible:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20',
                  digit ? 'border-sky-500 bg-sky-50/20 text-slate-900' : 'hover:border-slate-300'
                )}
              />
            ))}
          </div>

          {error && (
            <div className="flex items-center justify-center gap-1.5 text-rose-500 text-xs font-medium text-center bg-rose-50 p-2.5 rounded-xl border border-rose-100">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Action Button */}
          <Button
            type="submit"
            disabled={loading || otp.join('').length < codeLength}
            className={cn(
              'w-full py-3.5 rounded-full font-medium text-sm sm:text-base transition-all shadow-sm cursor-pointer border flex items-center justify-center gap-2',
              otp.join('').length === codeLength
                ? 'bg-[var(--blue-normal)] hover:bg-sky-600 text-white border-[var(--blue-normal)] shadow-sky-900/10'
                : 'bg-white border-sky-300 text-sky-400 hover:bg-sky-50/50'
            )}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-current" />
                <span>Verifying...</span>
              </>
            ) : (
              'Verify & Continue'
            )}
          </Button>

          {/* Resend OTP Section */}
          <div className="text-center pt-1">
            {timeLeft > 0 ? (
              <p className="text-xs text-slate-400 font-normal">
                Didn&apos;t receive a code?{' '}
                <span className="text-slate-500 font-medium">Resend in {timeLeft}s</span>
              </p>
            ) : (
              <p className="text-xs text-slate-500 font-normal">
                Didn&apos;t receive a code?{' '}
                <button
                  type="button"
                  onClick={handleResendClick}
                  disabled={resending}
                  className="text-slate-900 hover:text-[var(--blue-normal)] font-medium underline cursor-pointer disabled:opacity-50"
                >
                  {resending ? 'Sending...' : 'Resend'}
                </button>
              </p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// ============================================================================
// 2. Email Verified Success Modal
// ============================================================================
export interface EmailVerifiedSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const EmailVerifiedSuccessModal: React.FC<EmailVerifiedSuccessModalProps> = ({
  isOpen,
  onClose,
  email,
  title = 'Email verified successfully',
  subtitle = 'Your email has been verified successfully.',
  ctaText = 'Done',
  onCtaClick,
}) => {
  const handleDone = () => {
    onClose();
    if (onCtaClick) onCtaClick();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleDone()}>
      <DialogContent className="max-w-[92vw] sm:max-w-[430px] bg-white border border-slate-100 shadow-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 text-slate-900 select-none overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150 text-center">
        {/* Animated Green Checkmark Icon with Sparkles */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
          {/* Outer Pulse Glow */}
          <div className="absolute inset-0 rounded-full bg-emerald-100/70 animate-ping opacity-25" />

          {/* Main Green Icon Badge */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
          </div>

          {/* Sparkles Decorative Accents */}
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-amber-400 animate-pulse" />
          <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-emerald-400 animate-pulse delay-150" />
        </div>

        {/* Title & Subtitle */}
        <DialogTitle className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
          {title}
        </DialogTitle>

        <DialogDescription className="text-xs sm:text-sm text-slate-500 font-normal mt-1.5">
          {subtitle}
        </DialogDescription>

        {/* Green Info Container with Email & Verified Badge */}
        <div className="mt-6 mb-6 p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs sm:text-sm font-medium truncate text-emerald-950">{email}</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200/80 shrink-0">
            <span>Verified</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
        </div>

        {/* CTA Button */}
        <Button
          type="button"
          onClick={handleDone}
          className="w-full h-auto py-3.5 rounded-full border border-[var(--blue-normal)] text-[var(--blue-normal)] font-medium bg-white hover:bg-sky-50 shadow-sm transition-colors text-sm sm:text-base cursor-pointer"
        >
          {ctaText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// ============================================================================
// 3. Email Input Modal
// ============================================================================
export interface EmailInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  onSubmitEmail: (email: string) => Promise<void>;
  title?: string;
  subtitle?: string;
}

export const EmailInputModal: React.FC<EmailInputModalProps> = ({
  isOpen,
  onClose,
  initialEmail = '',
  onSubmitEmail,
  title = 'Enter Email Address',
  subtitle = 'Enter your email address to receive a verification OTP code.',
}) => {
  const [emailVal, setEmailVal] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setEmailVal(initialEmail);
      setError(null);
    }
  }, [isOpen, initialEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailVal || !emailVal.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await onSubmitEmail(emailVal);
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Failed to send OTP code. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[92vw] sm:max-w-[420px] bg-white border border-slate-100 shadow-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 text-slate-900 select-none overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
        <DialogTitle className="text-xl sm:text-2xl font-semibold text-slate-900 text-center tracking-tight">
          {title}
        </DialogTitle>

        <DialogDescription className="text-xs sm:text-sm text-slate-500 text-center mt-1">
          {subtitle}
        </DialogDescription>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 block">
              Email Address
            </label>
            <div className="relative">
              <Input
                type="email"
                value={emailVal}
                onChange={(e) => {
                  setEmailVal(e.target.value);
                  setError(null);
                }}
                placeholder="Enter Your Email"
                disabled={loading}
                className="bg-slate-50/50 border-slate-200 rounded-xl h-11 text-slate-900 font-medium text-xs sm:text-sm focus:ring-2 focus:ring-[var(--blue-normal)]"
              />
            </div>
          </div>

          {error && (
            <p className="text-xs text-rose-500 font-medium text-center pt-0.5">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || !emailVal}
            className="w-full h-auto py-3.5 rounded-full border border-[var(--blue-normal)] text-[var(--blue-normal)] font-medium bg-white hover:bg-sky-50 shadow-sm transition-colors text-sm sm:text-base cursor-pointer disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[var(--blue-normal)]" />
                <span>Sending Code...</span>
              </>
            ) : (
              'Verify Email'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
