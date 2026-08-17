'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { OnlyLogo } from '@/components/svg/logo';

const SUPPORT_EMAIL = 'support@mahir.in';

export interface ContactSupportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactSupportDialog: React.FC<ContactSupportDialogProps> = ({
  open,
  onOpenChange,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md rounded-[28px] sm:rounded-[32px] border border-slate-200/90 bg-white p-0 shadow-2xl overflow-hidden gap-0">
      <div className="relative px-6 sm:px-8 pt-8 sm:pt-10 pb-6 text-center">
        <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl bg-sky-50 border border-sky-100 p-3">
          <OnlyLogo size={22} />
        </div>

        <DialogTitle className="text-2xl sm:text-[28px] font-normal text-slate-900 tracking-tight">
          Contact Support
        </DialogTitle>

        <DialogDescription className="mt-2 text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed max-w-sm mx-auto">
          Our support team is here to help you resolve any issues quickly.
        </DialogDescription>
      </div>

      <div className="px-6 sm:px-8 pb-8 sm:pb-10">
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-4 py-4 transition-all hover:border-sky-200 hover:bg-sky-50 group"
        >
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--blue-normal)] text-white shadow-sm">
            <Mail className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-sm font-semibold text-slate-900">Email</span>
            <span className="block text-sm font-medium text-[var(--blue-normal)] group-hover:underline">
              {SUPPORT_EMAIL}
            </span>
          </span>
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

export default ContactSupportDialog;
