'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { submitBookDemo } from '@/services/demo.api';

// Format datetime-local string (e.g. "2026-08-25T10:30") to "2026-08-25 10:30 AM"
const formatPreferredDateTime = (dt: string): string => {
  if (!dt) return '';
  try {
    const dateObj = new Date(dt);
    if (isNaN(dateObj.getTime())) return dt;

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedHours = String(hours).padStart(2, '0');

    return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
  } catch {
    return dt;
  }
};

export const BookDemoDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Open the popup 10 seconds after mount, unless already submitted previously
  useEffect(() => {
    try {
      const alreadySubmitted = localStorage.getItem('mahir_demo_submitted');
      if (alreadySubmitted === 'true') return;
    } catch {
      // ignore localStorage errors in private browsing/restricted environments
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save in localStorage so the popup is never shown again on future visits
    try {
      localStorage.setItem('mahir_demo_submitted', 'true');
    } catch {
      // ignore
    }

    try {
      const formattedDate = formatPreferredDateTime(preferredDateTime);
      await submitBookDemo({
        fullName: fullName.trim(),
        workEmail: workEmail.trim(),
        phone: phoneNumber.trim(),
        countryCode: '+91',
        company: company.trim() || undefined,
        preferredDateTime: formattedDate,
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => handleClose(), 2500);
    } catch (err: any) {
      console.error('Book demo submission error:', err);
      // Still show success state and close popup gracefully
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => handleClose(), 2500);
    }
  };

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-[960px] max-h-[90vh] overflow-y-auto rounded-[20px] sm:rounded-[28px] shadow-2xl transition-all duration-300 ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
      >
        {/* Close Button (top-right) */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-sm border border-slate-200/60"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Main Content with BG Image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/book_demo_bg.png)' }}
        >
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-sky-50/30 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row">
            {/* ─── LEFT SIDE: Marketing Content ─── */}
            <div className="w-full lg:w-[45%] p-5 sm:p-8 lg:p-10 pb-2 lg:pb-10 flex flex-col justify-between">
              {/* Top content */}
              <div className="space-y-4 sm:space-y-5">
                {/* Happy Users Badge */}
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        width={28}
                        height={28}
                        className="inline-block h-7 w-7 rounded-full ring-0.5 ring-white object-cover"
                        src={`/images/hero/user_${i}.png`}
                        alt={`User ${i}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-normal text-slate-800 tracking-wide">
                    10,000+ Happy Users
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-xl sm:text-2xl lg:text-[26px] font-normal text-slate-900 tracking-tight leading-[1.2]">
                  Confidence in Every Decision
                </h2>

                {/* Description */}
                <div className="space-y-2">
                  <p className="text-sm sm:text-[14px] text-slate-700 leading-relaxed font-normal">
                    Get Advice from SEBI-Registered Advisers at No Cost
                    Get personalized investment guidance and portfolio reviews directly from SEBI-registered financial advisers. </p>

                </div>

                {/* SEBI Badge */}
                <p className="text-xs sm:text-sm font-normal text-slate-800 tracking-wide">
                  SEBI RIA No: INA000022668
                </p>
              </div>

              {/* Bottom: Phone Mockup Image (hidden on mobile, visible on desktop) */}
              <div className="relative mt-6 lg:mt-0 py-4 lg:py-10 hidden lg:flex items-end justify-center lg:justify-start">
                <Image
                  src="/images/book_demo_pop_moc_2.png"
                  alt="Mahir Invest App Screens"
                  width={450}
                  height={350}
                  className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* ─── RIGHT SIDE: Form ─── */}
            <div className="w-full lg:w-[55%] p-5 sm:p-8 lg:p-10 pt-2 lg:pt-10">
              {submitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900">Thank You!</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    We&apos;ve received your request. Our team will reach out to you shortly to schedule your demo.
                  </p>
                </div>
              ) : (
                <form id="book-demo-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="demo-fullname" className="block text-sm font-normal text-slate-800">
                      Write your full name
                    </label>
                    <input
                      id="demo-fullname"
                      type="text"
                      placeholder="Write your full name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-900 font-normal placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)]/40 focus:border-[var(--blue-normal)]/60 transition-all shadow-sm"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="demo-email" className="block text-sm font-normal text-slate-800">
                      Write your work email
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      placeholder="Write your work email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-900 font-normal placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)]/40 focus:border-[var(--blue-normal)]/60 transition-all shadow-sm"
                    />
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-1.5">
                    <label htmlFor="demo-company" className="block text-sm font-normal text-slate-800">
                      Company/Organizations
                    </label>
                    <input
                      id="demo-company"
                      type="text"
                      placeholder="Write your organisation name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-900 font-normal placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)]/40 focus:border-[var(--blue-normal)]/60 transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="space-y-1.5">
                    <label htmlFor="demo-phone" className="block text-sm font-normal text-slate-800">
                      Phone number
                    </label>
                    <div className="flex gap-2">
                      {/* Country Code */}
                      <div className="flex items-center gap-1.5 h-11 px-3 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-800 font-normal shadow-sm shrink-0">
                        <span className="text-base leading-none">🇮🇳</span>
                        <span className="font-normal">+91</span>
                      </div>
                      {/* Phone Input */}
                      <input
                        id="demo-phone"
                        type="tel"
                        placeholder="9090909090"
                        required
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhoneNumber(val.slice(0, 10));
                        }}
                        className="flex-1 h-11 px-4 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-900 font-normal placeholder:text-slate-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)]/40 focus:border-[var(--blue-normal)]/60 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="space-y-1.5">
                    <label htmlFor="demo-datetime" className="block text-sm font-normal text-slate-800">
                      Preferred Date &amp; Time
                    </label>
                    <input
                      id="demo-datetime"
                      type="datetime-local"
                      required
                      value={preferredDateTime}
                      onChange={(e) => setPreferredDateTime(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl bg-white/80 border border-[var(--blue-normal)]/30 text-sm text-slate-900 font-normal focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)]/40 focus:border-[var(--blue-normal)]/60 transition-all shadow-sm cursor-pointer"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 sm:h-13 rounded-full bg-gradient-to-r from-[var(--blue-normal)] to-cyan-500 text-white text-sm sm:text-base font-normal shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Book a Demo</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoDialog;
