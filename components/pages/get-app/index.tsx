"use client";

import { useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { PlayStoreIcon, AppStoreIcon } from "@/components/svg/icons";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/assets";
import { detectStoreUrl } from "@/hooks/use-store-url";

export default function GetAppPage() {
  useEffect(() => {
    const { storeUrl } = detectStoreUrl();

    try {
      window.location.href = storeUrl;
    } catch {
      window.location.replace(storeUrl);
    }

    const timer = setTimeout(() => {
      window.location.href = storeUrl;
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var ua = (navigator.userAgent || navigator.vendor || "").toLowerCase();
                var platform = (navigator.platform || "").toLowerCase();
                var isApple = /iphone|ipad|ipod|macintosh|mac os x|macintel/i.test(ua) || platform.indexOf("mac") === 0 || platform.indexOf("ip") === 0;
                var target = isApple ? "${APP_STORE_URL}" : "${PLAY_STORE_URL}";
                window.location.href = target;
              } catch(e) {}
            })();
          `,
        }}
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans py-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-darker mb-2">
          Redirecting to App Store...
        </h1>
        <p className="text-gray-600 text-sm max-w-md mb-2">
          If your device does not open the store automatically, tap your store below:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            <GlassCard
              variant="light"
              rounded="full"
              padding="none"
              blur="xl"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/40 shadow-md shadow-sky-900/5 hover:bg-white transition-all cursor-pointer px-6 py-2.5 flex items-center justify-center gap-3 min-w-[190px]"
            >
              <PlayStoreIcon size={24} color="#111111" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-500 font-medium">Get it on</p>
                <p className="text-sm font-semibold text-slate-900">Google Play</p>
              </div>
            </GlassCard>
          </a>

          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <GlassCard
              variant="light"
              rounded="full"
              padding="none"
              blur="xl"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/40 shadow-md shadow-sky-900/5 hover:bg-white transition-all cursor-pointer px-6 py-2.5 flex items-center justify-center gap-3 min-w-[190px]"
            >
              <AppStoreIcon size={26} color="#111111" />
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-500 font-medium">Download on the</p>
                <p className="text-sm font-semibold text-slate-900">App Store</p>
              </div>
            </GlassCard>
          </a>
        </div>
      </div>
    </>
  );
}
