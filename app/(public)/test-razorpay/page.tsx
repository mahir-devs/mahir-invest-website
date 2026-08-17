"use client";
import React, { useEffect, useState } from "react";
import { message, Spin } from "antd";
import { onBoardingAPI, verifyOtpAPI } from "@/services/auth.api";
import { useAuthStore } from "@/store/auth.store";
import { createUserSubscription } from "@/services/subscription.api";

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_TEST_PHONE = "9084945150";
const DEFAULT_TEST_OTP = "9876";
const API_BASE = "https://api.mahiradvisers.com";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  id?: string | number;
  name: string;
}

interface Pricing {
  discountPrice: number;
  price: number;
  discountPercentage: number;
}

interface Description {
  description?: string;
  title?: string;
}

interface PlanMaster {
  planDuration: string;
  durationDays?: number;
}

interface PlanVariant {
  variantId: string | number;
  planMaster: PlanMaster;
  descriptions: Description[];
  pricing: Pricing;
  features: Feature[];
  incentive?: string;
}

interface PlanPackage {
  name: string;
  plans: PlanVariant[];
}

// ─── Razorpay global ──────────────────────────────────────────────────────────

declare global {
  interface Window {
    Razorpay: any;
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function fetchAllPlanVariants(token: string): Promise<PlanPackage[]> {
  const res = await fetch(`${API_BASE}/subscription-plan-variants`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (Array.isArray(json)) return json as PlanPackage[];
  if (Array.isArray(json?.data)) return json.data as PlanPackage[];
  return [];
}

function formatDuration(dur: string) {
  return dur
    ? dur.charAt(0).toUpperCase() + dur.slice(1).toLowerCase()
    : "Plan";
}

// ─── Step Indicator ───────────────────────────────────────────────────────────

const Step: React.FC<{
  num: number;
  label: string;
  active: boolean;
  done: boolean;
}> = ({ num, label, active, done }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      opacity: active || done ? 1 : 0.4,
      transition: "opacity 0.3s",
    }}
  >
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: done ? "#22c55e" : active ? "#1e3160" : "#e5e7eb",
        color: done || active ? "#fff" : "#9ca3af",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 14,
        flexShrink: 0,
        transition: "background 0.3s",
      }}
    >
      {done ? "✓" : num}
    </div>
    <span
      style={{
        fontSize: 13,
        fontWeight: active ? 700 : 500,
        color: done ? "#22c55e" : active ? "#1e3160" : "#6b7280",
      }}
    >
      {label}
    </span>
  </div>
);

// ─── Plan Card ────────────────────────────────────────────────────────────────

interface PlanCardProps {
  pkg: PlanPackage;
  variant: PlanVariant;
  onPay: (pkg: PlanPackage, variant: PlanVariant) => void;
  isPayLoading: boolean;
  isPopular: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  pkg,
  variant,
  onPay,
  isPayLoading,
  isPopular,
}) => {
  const duration = formatDuration(variant.planMaster.planDuration);
  const desc =
    variant.descriptions[0]?.description ||
    variant.descriptions[0]?.title ||
    "Ideal for investors";
  const { discountPrice, price, discountPercentage } = variant.pricing;

  return (
    <div
      style={{
        background: isPopular
          ? "linear-gradient(145deg, #1e3160 0%, #203468 55%, #2a4a8a 100%)"
          : "#ffffff",
        border: isPopular ? "none" : "1.5px solid #e5e9f2",
        borderRadius: 20,
        padding: "32px 28px 28px",
        minWidth: 270,
        maxWidth: 340,
        flex: "1 1 270px",
        display: "flex",
        flexDirection: "column",
        boxShadow: isPopular
          ? "0 20px 60px rgba(30,49,96,0.35)"
          : "0 4px 24px rgba(30,49,96,0.08)",
        position: "relative",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = isPopular
          ? "0 28px 70px rgba(30,49,96,0.42)"
          : "0 10px 40px rgba(30,49,96,0.14)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = isPopular
          ? "0 20px 60px rgba(30,49,96,0.35)"
          : "0 4px 24px rgba(30,49,96,0.08)";
      }}
    >
      {isPopular && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "#f2e3c4",
            color: "#1e3160",
            borderRadius: 999,
            padding: "3px 12px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          Most Popular
        </div>
      )}
      <p
        style={{
          color: isPopular ? "rgba(255,255,255,0.55)" : "#9ca3af",
          fontSize: 11,
          fontWeight: 600,
          margin: "0 0 4px",
          textTransform: "uppercase",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        {pkg.name}
      </p>
      <h3
        style={{
          color: isPopular ? "#ffffff" : "#1e3160",
          fontSize: 26,
          fontWeight: 800,
          margin: "0 0 6px",
          textAlign: "center",
        }}
      >
        {duration}
      </h3>
      <p
        style={{
          color: isPopular ? "rgba(255,255,255,0.65)" : "#6b7280",
          fontSize: 13,
          margin: "0 0 20px",
          textAlign: "center",
        }}
      >
        {desc}
      </p>
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        {discountPercentage > 0 && (
          <p
            style={{
              color: isPopular ? "rgba(255,255,255,0.4)" : "#9ca3af",
              textDecoration: "line-through",
              fontSize: 14,
              margin: "0 0 2px",
            }}
          >
            ₹{price}
          </p>
        )}
        <p
          style={{
            color: isPopular ? "#ffffff" : "#1e3160",
            fontSize: 40,
            fontWeight: 900,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          ₹{discountPrice}
        </p>
        {discountPercentage > 0 && (
          <span
            style={{
              display: "inline-block",
              marginTop: 8,
              background: isPopular ? "rgba(255,255,255,0.15)" : "#e8f5e9",
              color: isPopular ? "#a8d5b5" : "#2e7d32",
              borderRadius: 999,
              padding: "2px 10px",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {discountPercentage}% off
          </span>
        )}
      </div>
      {variant.incentive && (
        <p
          style={{
            color: isPopular ? "rgba(255,255,255,0.55)" : "#6b7280",
            fontSize: 12,
            textAlign: "center",
            margin: "6px 0 0",
          }}
        >
          {variant.incentive}
        </p>
      )}
      <div
        style={{
          borderTop: `1.5px dashed ${isPopular ? "rgba(255,255,255,0.18)" : "#e5e7eb"}`,
          margin: "18px 0",
        }}
      />
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexGrow: 1,
        }}
      >
        {variant.features.map((f, i) => (
          <li
            key={f.id ?? i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 13,
              color: isPopular ? "rgba(255,255,255,0.85)" : "#374151",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                minWidth: 18,
                borderRadius: "50%",
                background: isPopular ? "rgba(255,255,255,0.2)" : "#e8f0fd",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 1,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke={isPopular ? "#ffffff" : "#1e3160"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {f.name}
          </li>
        ))}
      </ul>
      <div
        style={{
          background: isPopular ? "rgba(255,255,255,0.07)" : "#f3f4f6",
          borderRadius: 8,
          padding: "6px 10px",
          marginBottom: 16,
          fontSize: 11,
          color: isPopular ? "rgba(255,255,255,0.4)" : "#9ca3af",
          fontFamily: "monospace",
          wordBreak: "break-all",
        }}
      >
        variantId: {variant.variantId}
      </div>
      <button
        id={`pay-btn-${variant.variantId}`}
        onClick={() => onPay(pkg, variant)}
        disabled={isPayLoading}
        style={{
          width: "100%",
          padding: "14px 0",
          borderRadius: 12,
          border: "none",
          cursor: isPayLoading ? "not-allowed" : "pointer",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: 0.3,
          transition: "opacity 0.2s, transform 0.15s",
          background: isPopular
            ? isPayLoading
              ? "rgba(255,255,255,0.3)"
              : "#f2e3c4"
            : isPayLoading
              ? "#d1d5db"
              : "#1e3160",
          color: isPopular
            ? isPayLoading
              ? "rgba(255,255,255,0.5)"
              : "#1e3160"
            : "#ffffff",
          opacity: isPayLoading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isPayLoading)
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
        }}
      >
        {isPayLoading ? "Processing…" : "Pay with Razorpay"}
      </button>
    </div>
  );
};

// ─── Login Panel ──────────────────────────────────────────────────────────────

type AuthStep = "phone" | "otp" | "done";

interface LoginPanelProps {
  onLoginSuccess: (token: string, userId: string) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onLoginSuccess }) => {
  const { login } = useAuthStore();
  const [step, setStep] = useState<AuthStep>("phone");
  const [phone, setPhone] = useState(DEFAULT_TEST_PHONE);
  const [otp, setOtp] = useState(DEFAULT_TEST_OTP);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      message.warning("Enter a valid 10-digit phone number");
      return;
    }
    setLoading(true);
    try {
      const data = await onBoardingAPI({ phone: Number(phone) });
      if (data.message === "Success") {
        message.success("OTP sent!");
        setStep("otp");
      } else message.error(data.message || "Failed to send OTP");
    } catch (err: any) {
      message.error(
        err?.response?.data?.message || "Failed to send OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!/^[0-9]{4}$/.test(otp)) {
      message.warning("Enter a valid 4-digit OTP");
      return;
    }
    setLoading(true);
    try {
      const data = await verifyOtpAPI({
        phone: Number(phone),
        code: Number(otp),
      });
      const onboardingToken = data?.data?.onboardingToken;
      if (!onboardingToken) throw new Error("No onboarding token received");

      await login({ onboardingToken });

      const state = useAuthStore.getState();
      const token = state.token;
      const userId = (state.user as any)?.id || (state.user as any)?.userId;

      if (!token || !userId)
        throw new Error("Login succeeded but missing token/userId");

      message.success("✅ Logged in! Loading plans…");
      setStep("done");
      onLoginSuccess(token, userId);
    } catch (err: any) {
      message.error(
        err?.response?.data?.message || err?.message || "Verification failed",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: "1.5px solid #e5e9f2",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    background: "#fafbff",
    color: "#1e3160",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const btnDisabled = (cond: boolean) => cond || loading;
  const btnStyle = (disabled: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "14px 0",
    borderRadius: 12,
    border: "none",
    cursor: btnDisabled(disabled) ? "not-allowed" : "pointer",
    fontWeight: 700,
    fontSize: 15,
    background: btnDisabled(disabled) ? "#d1d5db" : "#1e3160",
    color: btnDisabled(disabled) ? "#9ca3af" : "#f2e3c4",
    transition: "opacity 0.2s",
    opacity: loading ? 0.7 : 1,
    letterSpacing: 0.3,
  });

  return (
    <div
      style={{
        maxWidth: 440,
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: 24,
        boxShadow: "0 8px 48px rgba(30,49,96,0.13)",
        border: "1.5px solid #e5e9f2",
        padding: "40px 36px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <Step
          num={1}
          label="Enter phone number"
          active={step === "phone"}
          done={step === "otp" || step === "done"}
        />
        <Step
          num={2}
          label="Verify OTP"
          active={step === "otp"}
          done={step === "done"}
        />
        <Step
          num={3}
          label="View plans & pay"
          active={false}
          done={step === "done"}
        />
      </div>

      {step === "phone" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                display: "block",
                marginBottom: 6,
              }}
            >
              Mobile Number
            </label>
            <input
              id="test-phone-input"
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              style={inputStyle}
              placeholder="10-digit mobile number"
              onFocus={(e) => (e.target.style.borderColor = "#1e3160")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e9f2")}
            />
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 6 }}>
              Default test number pre-filled: {DEFAULT_TEST_PHONE}
            </p>
          </div>
          <button
            id="send-otp-btn"
            onClick={handleSendOtp}
            disabled={btnDisabled(!/^[0-9]{10}$/.test(phone))}
            style={btnStyle(!/^[0-9]{10}$/.test(phone))}
          >
            {loading ? "Sending OTP…" : "Send OTP"}
          </button>
        </div>
      )}

      {step === "otp" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                display: "block",
                marginBottom: 6,
              }}
            >
              OTP sent to +91 {phone}
            </label>
            <input
              id="test-otp-input"
              type="tel"
              maxLength={4}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              style={inputStyle}
              placeholder="4-digit OTP"
              onFocus={(e) => (e.target.style.borderColor = "#1e3160")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e9f2")}
            />
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 6 }}>
              Default test OTP pre-filled: {DEFAULT_TEST_OTP}
            </p>
          </div>
          <button
            id="verify-otp-btn"
            onClick={handleVerifyOtp}
            disabled={btnDisabled(!/^[0-9]{4}$/.test(otp))}
            style={btnStyle(!/^[0-9]{4}$/.test(otp))}
          >
            {loading ? "Verifying…" : "Verify & Login"}
          </button>
          <button
            onClick={() => setStep("phone")}
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              fontSize: 13,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            ← Change phone number
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TestRazorpayPage() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authUserId, setAuthUserId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [packages, setPackages] = useState<PlanPackage[]>([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [payingVariantId, setPayingVariantId] = useState<
    string | number | null
  >(null);

  useEffect(() => {
    if (document.getElementById("razorpay-sdk")) return;
    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Auto-detect if already logged in
  useEffect(() => {
    const state = useAuthStore.getState();
    if (state.token && state.user) {
      const userId = (state.user as any)?.id || (state.user as any)?.userId;
      if (userId) {
        setAuthToken(state.token);
        setAuthUserId(userId);
        setIsLoggedIn(true);
        loadPlans(state.token);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPlans = (token: string) => {
    setFetchLoading(true);
    setFetchError(null);
    fetchAllPlanVariants(token)
      .then(setPackages)
      .catch((e) => setFetchError(e.message))
      .finally(() => setFetchLoading(false));
  };

  const handleLoginSuccess = (token: string, userId: string) => {
    setAuthToken(token);
    setAuthUserId(userId);
    setIsLoggedIn(true);
    loadPlans(token);
  };

  const handlePay = async (pkg: PlanPackage, variant: PlanVariant) => {
    if (!authUserId || !authToken) {
      message.error("Not logged in. Please login first.");
      return;
    }
    setPayingVariantId(variant.variantId);
    try {
      const response: any = await createUserSubscription({
        userId: authUserId,
        variantId: String(variant.variantId),
        acceptedMarketRiskTerms: true,
      });

      const resData =
        response.data?.success !== undefined ? response.data : response;

      if (resData?.success && resData?.data?.subscriptionId) {
        const options = {
          key: resData.data.key,
          subscription_id: resData.data.subscriptionId,
          name: resData.data.name || pkg.name,
          description:
            resData.data.description ||
            `${pkg.name} – ${formatDuration(variant.planMaster.planDuration)}`,
          handler: async function (paymentResponse: any) {
            message.success(
              `✅ Payment successful! payment_id: ${paymentResponse.razorpay_payment_id}`,
            );
            console.log("Payment Response:", paymentResponse);
          },
          modal: {
            ondismiss: function () {
              message.info("Checkout closed without completing payment.");
            },
          },
          theme: { color: "#1e3160" },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        message.warning(resData?.message || "Unable to create subscription.");
      }
    } catch (err: any) {
      console.error("Payment Error:", err);
      message.error(
        err?.response?.data?.message ||
          err?.message ||
          "Payment Service Unavailable",
      );
    } finally {
      setPayingVariantId(null);
    }
  };

  const totalVariants = packages.reduce(
    (acc, p) => acc + (p.plans?.length || 0),
    0,
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #eef2ff 0%, #faf7f0 100%)",
        fontFamily: "'Inter', 'Outfit', sans-serif",
        padding: "60px 24px 80px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#fff3cd",
            border: "1px solid #ffc107",
            borderRadius: 999,
            padding: "4px 16px",
            fontSize: 12,
            fontWeight: 600,
            color: "#856404",
            marginBottom: 20,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          🧪 Test Environment — Do Not Share
        </div>
        <h1
          style={{
            fontSize: "clamp(30px, 5vw, 46px)",
            fontWeight: 900,
            color: "#1e3160",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Razorpay Integration Test
        </h1>
        <p
          style={{
            color: "#6b7280",
            fontSize: 16,
            marginTop: 12,
            maxWidth: 520,
            margin: "12px auto 0",
            lineHeight: 1.6,
          }}
        >
          Login with your test credentials to load plan variants, then click{" "}
          <strong>Pay with Razorpay</strong> to trigger the subscription flow.
        </p>
      </div>

      {/* Auth status badge */}
      {isLoggedIn && authUserId && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#f0fdf4",
              border: "1.5px solid #86efac",
              borderRadius: 12,
              padding: "10px 20px",
              fontSize: 13,
              color: "#15803d",
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 16 }}>✅</span>
            Logged in
            <span
              style={{
                fontFamily: "monospace",
                background: "#dcfce7",
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: 11,
                color: "#166534",
              }}
            >
              userId: {authUserId}
            </span>
            <button
              onClick={() => {
                useAuthStore.getState().logout();
                setIsLoggedIn(false);
                setAuthToken(null);
                setAuthUserId(null);
                setPackages([]);
              }}
              style={{
                marginLeft: 8,
                background: "none",
                border: "none",
                color: "#15803d",
                cursor: "pointer",
                fontSize: 12,
                textDecoration: "underline",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Login panel */}
      {!isLoggedIn && (
        <div style={{ marginBottom: 48 }}>
          <LoginPanel onLoginSuccess={handleLoginSuccess} />
        </div>
      )}

      {/* Plans section */}
      {isLoggedIn && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 44,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#1e293b",
                borderRadius: 10,
                padding: "10px 20px",
                fontSize: 12,
                color: "#94a3b8",
                fontFamily: "monospace",
              }}
            >
              <span
                style={{
                  background: "#3b82f6",
                  color: "#fff",
                  borderRadius: 4,
                  padding: "1px 6px",
                  fontWeight: 700,
                  fontSize: 11,
                }}
              >
                GET
              </span>
              <span style={{ color: "#86efac" }}>
                api.mahiradvisers.com/subscription-plan-variants
              </span>
            </div>
          </div>

          {fetchLoading && (
            <div style={{ textAlign: "center", padding: 80 }}>
              <Spin size="large" tip="Fetching plan variants…" />
            </div>
          )}

          {fetchError && (
            <div
              style={{
                maxWidth: 480,
                margin: "0 auto",
                background: "#fef2f2",
                border: "1px solid #fca5a5",
                borderRadius: 14,
                padding: "28px 32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  margin: 0,
                  color: "#b91c1c",
                  fontSize: 16,
                }}
              >
                Failed to fetch plans
              </p>
              <p style={{ fontSize: 13, margin: "8px 0 0", color: "#ef4444" }}>
                {fetchError}
              </p>
            </div>
          )}

          {!fetchLoading && !fetchError && totalVariants === 0 && (
            <p style={{ textAlign: "center", color: "#6b7280" }}>
              No plan variants returned by the API.
            </p>
          )}

          {!fetchLoading && !fetchError && totalVariants > 0 && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 24,
                  marginBottom: 44,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Packages", value: packages.length },
                  { label: "Total Variants", value: totalVariants },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      background: "#ffffff",
                      borderRadius: 14,
                      padding: "14px 28px",
                      textAlign: "center",
                      boxShadow: "0 2px 12px rgba(30,49,96,0.08)",
                      border: "1px solid #e5e9f2",
                      minWidth: 120,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 30,
                        fontWeight: 900,
                        color: "#1e3160",
                        margin: 0,
                      }}
                    >
                      {value}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9ca3af",
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              {packages.map((pkg) => (
                <div key={pkg.name} style={{ marginBottom: 64 }}>
                  <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#1e3160",
                        margin: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: 36,
                          height: 2,
                          background: "#1e3160",
                          borderRadius: 2,
                          opacity: 0.25,
                        }}
                      />
                      {pkg.name}
                      <span
                        style={{
                          display: "inline-block",
                          width: 36,
                          height: 2,
                          background: "#1e3160",
                          borderRadius: 2,
                          opacity: 0.25,
                        }}
                      />
                    </h2>
                    <p
                      style={{
                        color: "#9ca3af",
                        fontSize: 13,
                        margin: "6px 0 0",
                        fontWeight: 500,
                      }}
                    >
                      {(pkg.plans || []).length} variant
                      {(pkg.plans || []).length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 24,
                      justifyContent: "center",
                      maxWidth: 1200,
                      margin: "0 auto",
                    }}
                  >
                    {(pkg.plans || []).map((variant) => {
                      const isPopular =
                        variant.planMaster.planDuration === "QUARTERLY";
                      return (
                        <PlanCard
                          key={variant.variantId}
                          pkg={pkg}
                          variant={variant}
                          isPopular={isPopular}
                          isPayLoading={payingVariantId === variant.variantId}
                          onPay={handlePay}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}

      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          fontSize: 12,
          marginTop: 60,
        }}
      >
        ⚠️ Internal testing page only. Uses real OTP login flow with default
        test credentials (phone: {DEFAULT_TEST_PHONE}, OTP: {DEFAULT_TEST_OTP}).
      </p>
    </div>
  );
}
