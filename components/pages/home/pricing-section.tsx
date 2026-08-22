'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { GlassCard } from '@/components/ui/glass-card';
import { GlassButton } from '@/components/ui/glass-button';
import { TradeUpIcons, GoldenStarIcons, BlueLineIcons } from '@/components/svg/icons';
import { MotionContainer, MotionItem } from '@/components/animations';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { OnlyLogo } from '@/components/svg/logo';
import { Loader2 } from 'lucide-react';
import { useSubscriptionStore } from '@/store/subscription.store';
import { useAuthStore } from '@/store/auth.store';
import { createUserSubscription } from '@/services/subscription.api';
import { getEmailVerificationStatusAPI, sendOtpAPI, verifyEmailOtpAPI } from '@/services/auth.api';
import { EmailOtpVerificationModal, EmailVerifiedSuccessModal, EmailInputModal } from '@/components/common/email-verification/email-verification-modals';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';
import { SuspenseFallback } from '@/components/common/loading/suspense-fallback';
import { SectionHeader } from '@/components/common/section-header';



export interface PricingPlan {
  id: string;
  variantId: string | number;
  title: string;
  price: string;
  billingPeriod: string;
  billingText: string;
  showStars?: boolean;
  starCount?: number;
  buttonText: string;
  basePrice: number;
  planPriceBeforeGst: number;
  gstAmount: number;
  features: string[];
  rawVariant?: any;
}

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    variantId: 'monthly',
    title: 'Monthly',
    price: '₹140',
    billingPeriod: '/day',
    billingText: 'Billed Monthly',
    showStars: false,
    starCount: 0,
    buttonText: 'Get started',
    basePrice: 4200,
    planPriceBeforeGst: 3559,
    gstAmount: 641,
    features: [
      'Comprehensive Financial Blueprint tailored to your goals',
      'Asset Allocation & Portfolio Structuring Advice',
      'Quarterly Portfolio Review & Rebalancing',
      'Direct Support via Email & In-App Chat',
      '100% Conflict-Free Advice — Zero Commissions',
    ],
  },
  {
    id: 'quarterly',
    variantId: 'quarterly',
    title: 'Quarterly',
    price: '₹120',
    billingPeriod: '/day',
    billingText: 'Billed Quarterly',
    showStars: false,
    starCount: 0,
    buttonText: 'Get started',
    basePrice: 10800,
    planPriceBeforeGst: 9153,
    gstAmount: 1647,
    features: [
      'Everything in Monthly Plan',
      'Priority Support & Dedicated Advisory Contact',
      'Bi-Monthly Portfolio Review & Goal Tracking',
      'Tax-Efficient Investment & Capital Gains Planning',
      'Exclusive Educational Webinars & Market Insights',
    ],
  },
  {
    id: 'annual',
    variantId: 'annual',
    title: 'Annual',
    price: '₹99',
    billingPeriod: '/day',
    billingText: 'Billed Annually',
    showStars: true,
    starCount: 3,
    buttonText: 'Get started',
    basePrice: 36135,
    planPriceBeforeGst: 30623,
    gstAmount: 5512,
    features: [
      'Everything in Quarterly Plan',
      'Dedicated Principal Officer Consultation Support',
      'Monthly Portfolio Health Checks & Rebalancing Alerts',
      'Full Family Financial Planning (up to 4 accounts)',
      'VIP Access to Market Analysis & Sector Reports',
    ],
  },
];

export const PRICING_PLANS = DEFAULT_PRICING_PLANS;

const FeaturePill: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/90 bg-sky-50/70 px-3 py-1.5">
    <span className="inline-flex shrink-0 items-center justify-center">
      <OnlyLogo size={14} />
    </span>
    <span className="text-[11px] sm:text-xs font-normal text-slate-700 leading-snug">
      {label}
    </span>
  </div>
);

const SectionHeading: React.FC<{ title: string, isShowLine?: boolean }> = ({ title, isShowLine = true }) => (
  <div>
    <h3 className="text-lg sm:text-xl font-normal text-slate-900 tracking-tight">{title}</h3>
    {isShowLine && (
      <div className="pt-0.5">
        <BlueLineIcons />
      </div>
    )}
  </div>
);

// Calculate exact price per day
const getPricePerDay = (discountPrice: number, durationStr: string): number => {
  const dLower = durationStr.toLowerCase();
  let days = 30; // default monthly
  if (dLower.includes('annual') || dLower.includes('year')) {
    days = 365;
  } else if (dLower.includes('quarter')) {
    days = 90;
  } else if (dLower.includes('half') || dLower.includes('6')) {
    days = 180;
  } else if (dLower.includes('month')) {
    days = 30;
  }
  return Math.round(discountPrice / days);
};

// Dynamically load Razorpay SDK script
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export interface PricingSectionProps {
  hideBackground?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  autoOpenPlanId?: string;
  isHeadingDark?: boolean;
  eyebrow?: React.ReactNode;
  eyebrowText?: string;
  hideEyebrow?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  hideSubtitle?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  headerClassName?: string;
}

const PricingSectionInner: React.FC<PricingSectionProps> = ({
  hideBackground = false,
  isOpen,
  onOpenChange,
  autoOpenPlanId,
  isHeadingDark = false,
  eyebrow,
  eyebrowText,
  hideEyebrow = false,
  title,
  subtitle,
  hideSubtitle = false,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  headerClassName,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { plans: storePlans, loading: plansLoading, fetchPlans } = useSubscriptionStore();
  const user = useAuthStore((state) => state.user);

  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeRisk, setAgreeRisk] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  // Email Verification Pre-check States
  const [showInputModal, setShowInputModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [targetEmail, setTargetEmail] = useState('');

  const handlePaymentSubmitEmail = async (emailVal: string) => {
    setTargetEmail(emailVal);
    await sendOtpAPI(emailVal);
    setShowInputModal(false);
    setShowOtpModal(true);
  };

  const handlePaymentVerifyOtp = async (code: string) => {
    await verifyEmailOtpAPI({ email: targetEmail, code });
    await useAuthStore.getState().getProfile();
    setShowOtpModal(false);
    setShowSuccessModal(true);
  };

  const handlePaymentResendOtp = async () => {
    if (!targetEmail) return;
    await sendOtpAPI(targetEmail);
  };

  const handlePaymentSuccessDone = () => {
    setShowSuccessModal(false);
    setShowOtpModal(false);
    setShowInputModal(false);
    // Auto-resume payment checkout after email verification success with terms preserved
    setTimeout(() => {
      handleBuyPlan();
    }, 100);
  };

  const queryOpenSubscription = searchParams?.get('openSubscription');
  const queryOpenPlan =
    searchParams?.get('openPlan') ||
    searchParams?.get('variantId') ||
    searchParams?.get('planId') ||
    autoOpenPlanId;

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  // Extract raw variants from API store response
  const rawVariants: any[] = React.useMemo(() => {
    if (!storePlans || storePlans.length === 0) return [];
    const pkg = storePlans[0];
    if (pkg?.plans && Array.isArray(pkg.plans)) {
      return pkg.plans;
    }
    if (Array.isArray(storePlans) && storePlans[0]?.variantId) {
      return storePlans;
    }
    return [];
  }, [storePlans]);

  // Map API variants to PricingPlan display objects matching exact math
  const displayPlans: PricingPlan[] = React.useMemo(() => {
    if (rawVariants.length === 0) return DEFAULT_PRICING_PLANS;

    return rawVariants.map((variant: any) => {
      const durationStr = variant.planMaster?.planDuration || 'Monthly';
      const formattedTitle =
        durationStr.charAt(0).toUpperCase() + durationStr.slice(1).toLowerCase();

      const discountPrice = Number(variant.pricing?.discountPrice || variant.pricing?.price || 0);
      const pricePerDay = getPricePerDay(discountPrice, durationStr);
      const gstAmount = Math.round(discountPrice - discountPrice / 1.18);
      const planPriceBeforeGst = discountPrice - gstAmount;

      const featuresList = Array.isArray(variant.features)
        ? variant.features.map((f: any) => (typeof f === 'string' ? f : f.name))
        : [];

      return {
        id: String(variant.variantId || variant.id || formattedTitle.toLowerCase()),
        variantId: variant.variantId || variant.id,
        title: formattedTitle,
        price: `₹${pricePerDay > 0 ? pricePerDay : discountPrice}`,
        billingPeriod: '/day',
        billingText: `Billed ${formattedTitle}`,
        showStars:
          formattedTitle.toLowerCase().includes('year') ||
          formattedTitle.toLowerCase().includes('annual'),
        starCount: 3,
        buttonText: 'Get started',
        basePrice: discountPrice,
        planPriceBeforeGst: planPriceBeforeGst,
        gstAmount: gstAmount,
        features: featuresList,
        rawVariant: variant,
      };
    });
  }, [rawVariants]);

  // Auto-open pop-up modal if query param or autoOpen prop requests it
  const autoOpenedRef = useRef(false);

  useEffect(() => {
    if (autoOpenedRef.current) return;
    if (!displayPlans || displayPlans.length === 0) return;

    const shouldOpenModal =
      queryOpenSubscription === 'true' ||
      Boolean(queryOpenPlan) ||
      isOpen === true;

    if (shouldOpenModal) {
      let matchedPlan = displayPlans[0];
      if (queryOpenPlan) {
        const paramLower = String(queryOpenPlan).toLowerCase();
        const found = displayPlans.find(
          (p) =>
            String(p.id).toLowerCase() === paramLower ||
            String(p.variantId).toLowerCase() === paramLower ||
            p.title.toLowerCase().includes(paramLower) ||
            paramLower.includes(p.title.toLowerCase())
        );
        if (found) matchedPlan = found;
      }
      setSelectedPlan(matchedPlan);
      autoOpenedRef.current = true;
      if (onOpenChange) onOpenChange(true);
    }
  }, [displayPlans, queryOpenSubscription, queryOpenPlan, isOpen, onOpenChange]);

  // Controlled prop open state sync
  useEffect(() => {
    if (isOpen !== undefined) {
      if (isOpen && displayPlans.length > 0 && !selectedPlan) {
        const targetPlanId = autoOpenPlanId || queryOpenPlan;
        let matchedPlan = displayPlans[0];
        if (targetPlanId) {
          const paramLower = String(targetPlanId).toLowerCase();
          const found = displayPlans.find(
            (p) =>
              String(p.id).toLowerCase() === paramLower ||
              String(p.variantId).toLowerCase() === paramLower ||
              p.title.toLowerCase().includes(paramLower)
          );
          if (found) matchedPlan = found;
        }
        setSelectedPlan(matchedPlan);
      } else if (!isOpen && selectedPlan) {
        setSelectedPlan(null);
      }
    }
  }, [isOpen, autoOpenPlanId, displayPlans, queryOpenPlan, selectedPlan]);

  const handlePlanSelect = (plan: PricingPlan) => {
    if (selectedPlan?.id !== plan.id) {
      setAgreeTerms(false);
      setAgreeRisk(false);
    }
    setSelectedPlan(plan);
    if (onOpenChange) onOpenChange(true);
  };

  const canPurchase = agreeTerms && agreeRisk;

  const handleBuyPlan = async () => {
    const actualUserId = user?.id || user?._id;
    if (!actualUserId) {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/pricing';
      const planParam = selectedPlan
        ? selectedPlan.variantId || selectedPlan.id || selectedPlan.title.toLowerCase()
        : '';
      const returnUrl = `${currentPath}?openPlan=${encodeURIComponent(planParam)}&openSubscription=true`;

      toast.add({
        title: 'Authentication Required',
        description: 'Please log in to purchase a subscription.',
        type: 'warning',
      });
      router.push(`/login?redirect=${encodeURIComponent(returnUrl)}`);
      return;
    }

    if (!canPurchase) {
      toast.add({
        title: 'Accept Terms Required',
        description: 'Please accept both Terms & Privacy Policy and Market Risk notices to proceed.',
        type: 'warning',
      });
      return;
    }

    if (!selectedPlan) return;

    try {
      setPurchasing(true);

      // Mandatory Pre-check: Verify Email Status BEFORE calling payment API
      let isVerified = false;
      let currentEmail = '';

      try {
        const statusRes: any = await getEmailVerificationStatusAPI();
        const dataObj = statusRes?.data || statusRes;
        isVerified = Boolean(
          dataObj?.isVerified ??
          dataObj?.isEmailVerified ??
          statusRes?.isVerified ??
          statusRes?.isEmailVerified ??
          user?.isEmailVerified ??
          false
        );
        currentEmail = dataObj?.email || statusRes?.email || user?.email || '';
      } catch (e) {
        console.warn('Email verification status check warning:', e);
        isVerified = Boolean(user?.isEmailVerified || user?.isVerified);
        currentEmail = user?.email || '';
      }

      if (!isVerified) {
        setTargetEmail(currentEmail);
        setPurchasing(false);
        // Whether email exists or not, always open EmailInputModal first
        setShowInputModal(true);
        return; // STOP! Do NOT execute payment API until email is verified!
      }

      const targetVariantId = selectedPlan.variantId || selectedPlan.id;

      const response: any = await createUserSubscription({
        userId: String(actualUserId),
        variantId: String(targetVariantId),
        acceptedMarketRiskTerms: true,
      });

      const resData = response?.data?.success !== undefined ? response.data : response;

      if (resData?.success && resData?.data?.subscriptionId) {
        await loadRazorpayScript();

        const options = {
          key: resData.data.key,
          subscription_id: resData.data.subscriptionId,
          name: resData.data.name || 'MAHIR Invest',
          description: `${resData.data.description || selectedPlan.title} `,
          handler: async function () {
            toast.add({
              title: 'Payment Successful',
              description: 'Your subscription has been activated successfully!',
              type: 'success',
            });
            setSelectedPlan(null);
            if (onOpenChange) onOpenChange(false);
            window.location.href = '/subscription-success';
          },
          modal: {
            ondismiss: function () {
              toast.add({
                title: 'Checkout Closed',
                description: 'Payment checkout process was closed.',
                type: 'info',
              });
            },
          },
          theme: {
            color: '#203468',
          },
        };

        if (typeof window !== 'undefined' && (window as any).Razorpay) {
          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        } else {
          toast.add({
            title: 'Subscription Created',
            description: 'Redirecting to confirmation...',
            type: 'success',
          });
          setSelectedPlan(null);
          if (onOpenChange) onOpenChange(false);
          window.location.href = '/subscription-success';
        }
      } else {
        toast.add({
          title: 'Subscription Error',
          description: resData?.message || 'Unable to create subscription.',
          type: 'warning',
        });
      }
    } catch (err: any) {
      console.error('Payment Error:', err);
      const errMsg =
        err?.response?.data?.message || err?.message || 'Payment Service Unavailable';
      toast.add({
        title: 'Payment Error',
        description: errMsg,
        type: 'error',
      });
    } finally {
      setPurchasing(false);
    }
  };

  return (
    <section className={cn("relative w-full px-4 sm:px-6 lg:px-8 select-none", hideBackground ? "pt-0 pb-12 sm:pb-16" : "py-16 sm:py-24")}>
      {!hideBackground && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/claude/commonbgfinal.png"
            alt="Pricing Section Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-60"
            priority={false}
          />
        </div>
      )}

      <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-7xl mx-auto z-10 space-y-12">
        {/* Header Title & Subtitle */}
        <SectionHeader
          eyebrow={eyebrow}
          eyebrowText={eyebrowText}
          hideEyebrow={hideEyebrow}
          title={title}
          subtitle={subtitle}
          hideSubtitle={hideSubtitle}
          isHeadingDark={isHeadingDark}
          eyebrowClassName={eyebrowClassName}
          titleClassName={titleClassName}
          subtitleClassName={subtitleClassName}
          className={headerClassName}
        />

        {/* Pricing Card Outer Box */}
        <MotionItem direction="up" distance={30} duration={0.65} className="w-full max-w-xs sm:max-w-md md:max-w-5xl mx-auto">
          <GlassCard
            variant="frosted"
            rounded="2xl"
            padding="none"
            className="shadow-none border-1 !border-[var(--yellow-normal)] rounded-[32px] sm:rounded-[36px] px-6 py-8 sm:p-10"
          >
            {plansLoading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3">
                <Loader2 className="w-8 h-8 text-[var(--blue-normal)] animate-spin" />
                <p className="text-sm text-slate-600 font-medium">Fetching subscription plans...</p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-2">
                {displayPlans.map((plan, index) => (
                  <React.Fragment key={plan.id}>
                    {/* Pricing Column Card */}
                    <div className="flex-1 flex flex-col items-center justify-between space-y-3 sm:space-y-4 px-2 py-1 text-center w-full">
                      {/* Stars Badge or Equal-Height Spacer */}
                      {plan.showStars ? (
                        <div className="flex items-center justify-center mb-1">
                          <GoldenStarIcons />
                        </div>
                      ) : (
                        <div className="hidden md:block h-7" />
                      )}

                      <h3 className="text-2xl sm:text-[24px] font-normal text-slate-900">
                        {plan.title}
                      </h3>

                      <div className="space-y-1 text-center">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl sm:text-[40px] font-extrabold text-[var(--yellow-normal)]">
                            {plan.price}
                          </span>
                          <span className="text-[10px] font-semibold text-[var(--yellow-dark-hover)] ml-1">
                            {plan.billingPeriod}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[var(--yellow-dark-hover)] font-medium">
                          {plan.billingText}
                        </p>
                      </div>

                      <GlassButton
                        variant="light"
                        size="md"
                        label={plan.buttonText}
                        icon={<TradeUpIcons size={10} color="white" />}
                        iconBgColor="bg-[var(--green-normal)]"
                        isGlowIcon
                        iconBgSize="sm"
                        onClick={() => handlePlanSelect(plan)}
                        className="bg-white/90 border px-4 py-2 sm:py-3 border-1 border-[var(--yellow-normal)] hover:border-[var(--yellow-normal)] text-slate-900 shadow-md hover:bg-white cursor-pointer"
                      />
                    </div>

                    {/* Vertical Divider between columns on Desktop */}
                    {index < displayPlans.length - 1 && (
                      <div className="hidden md:block w-px h-36 bg-[var(--yellow-normal)] shrink-0" />
                    )}

                    {/* Horizontal Divider between rows on Mobile */}
                    {index < displayPlans.length - 1 && (
                      <div className="block md:hidden w-48 sm:w-64 h-px bg-[var(--yellow-normal)]/70 my-5 sm:my-6 mx-auto shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </GlassCard>
        </MotionItem>
      </MotionContainer>

      {/* Plan Details & Checkout Dialog */}
      <Dialog
        open={Boolean(selectedPlan) && !showInputModal && !showOtpModal && !showSuccessModal}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPlan(null);
            setAgreeTerms(false);
            setAgreeRisk(false);
            if (onOpenChange) onOpenChange(false);
          }
        }}
      >
        <DialogContent className="max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200/90 shadow-2xl rounded-[32px] sm:rounded-[36px] p-6 sm:p-10 text-slate-900 select-none">
          {selectedPlan && (
            <div className="space-y-6 sm:space-y-7 text-left">
              {/* Header Title */}
              <div className="text-center space-y-1">
                <h2 className="text-3xl sm:text-[60px] font-normal text-slate-900 tracking-tight">
                  Aarambh
                </h2>
                <p className="text-sm sm:text-[32px] font-medium text-slate-500">
                  {selectedPlan.title}
                </p>
              </div>

              {/* Section 1: Additional Benefits */}
              <div className="space-y-3">
                <SectionHeading title="Additional Benefits" />

                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedPlan.features.map((feature, i) => (
                    <FeaturePill key={i} label={feature} />
                  ))}
                </div>
              </div>

              {/* Section 2: Plan Details */}
              <div className="space-y-3 pt-1">
                <SectionHeading title="Plan Details" />

                <div className="flex flex-wrap gap-2 pt-1">
                  <FeaturePill label={`${selectedPlan.title} plan`} />
                  <FeaturePill label="Flexible cancellation" />
                  <FeaturePill label="Beginner-friendly investment guidance" />
                </div>
              </div>

              {/* Section 3: Price Breakdown */}
              <div className="space-y-2 pt-1">
                <SectionHeading isShowLine={false} title="Price Breakdown" />

                <div className="space-y-2 text-xs sm:text-sm pt-1">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Plan Price ({selectedPlan.title})</span>
                    <span className="font-medium text-slate-900">₹{selectedPlan.planPriceBeforeGst}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>GST (18%)</span>
                    <span className="font-medium text-slate-900">₹{selectedPlan.gstAmount}</span>
                  </div>
                  <div className="w-full h-px bg-slate-200 my-1" />
                  <div className="flex justify-between items-center text-sm sm:text-base font-bold text-slate-900">
                    <span>Total Payable</span>
                    <span className="text-[var(--blue-normal)]">₹{selectedPlan.basePrice}</span>
                  </div>
                </div>
              </div>

              {/* Checkbox 1: Terms & Privacy Policy */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="modalAgreeTerms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(!!checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 transition-all cursor-pointer"
                />
                <label htmlFor="modalAgreeTerms" className="text-xs text-slate-600 font-normal leading-relaxed cursor-pointer select-none">
                  I agree to the{' '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] font-medium underline">
                    Terms &amp; Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-normal)] font-medium underline">
                    Privacy Policy
                  </a>.
                </label>
              </div>

              {/* Checkbox 2: Market Risk Acknowledgment */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="modalAgreeRisk"
                  checked={agreeRisk}
                  onCheckedChange={(checked) => setAgreeRisk(!!checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 transition-all cursor-pointer"
                />
                <label htmlFor="modalAgreeRisk" className="text-xs text-slate-600 font-normal leading-relaxed cursor-pointer select-none">
                  I understand that investments in securities markets are subject to market risks. I have read all scheme-related documents carefully.
                </label>
              </div>

              {/* Legal Notice */}
              <p className="text-[11px] text-slate-400 font-normal leading-tight text-center pt-1">
                By clicking proceed, you will be redirected to complete your payment securely via Razorpay.
              </p>

              {/* Action Button */}
              <button
                type="button"
                disabled={!canPurchase || purchasing}
                onClick={handleBuyPlan}
                className={cn(
                  'w-full py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md transition-all cursor-pointer text-center border-none mt-2 flex items-center justify-center gap-2 outline-none',
                  canPurchase && !purchasing
                    ? 'bg-[#0D8FCD] hover:bg-[#0084c2] text-white'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                )}
              >
                {purchasing && <Loader2 className="w-5 h-5 animate-spin" />}
                <span>{purchasing ? 'Processing...' : 'Buy this plan'}</span>
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Email Verification Modals for Subscription Payment Pre-check */}
      <EmailInputModal
        isOpen={showInputModal}
        onClose={() => setShowInputModal(false)}
        initialEmail={targetEmail}
        onSubmitEmail={handlePaymentSubmitEmail}
      />

      <EmailOtpVerificationModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        email={targetEmail}
        onVerify={handlePaymentVerifyOtp}
        onResend={handlePaymentResendOtp}
        onEditEmail={() => {
          setShowOtpModal(false);
          setShowInputModal(true);
        }}
      />

      <EmailVerifiedSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        email={targetEmail}
        title="Email verified successfully"
        subtitle="Your email has been verified. You can now proceed to payment."
        ctaText="Proceed to Payment"
        onCtaClick={handlePaymentSuccessDone}
      />
    </section>
  );
};

export const PricingSection: React.FC<PricingSectionProps> = (props) => {
  return (
    <Suspense fallback={<SuspenseFallback variant="pricing" />}>
      <div className=''>
        <PricingSectionInner {...props} />
      </div>
    </Suspense>
  );
};

export default PricingSection;
