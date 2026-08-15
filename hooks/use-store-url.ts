'use client';

import { useState, useEffect } from 'react';
import { PLAY_STORE_URL, APP_STORE_URL } from '@/lib/assets';

export interface UseStoreUrlReturn {
  storeUrl: string;
  isIOS: boolean;
  isApple: boolean;
  storeName: string;
}

export function detectStoreUrl(): { storeUrl: string; isIOS: boolean; isApple: boolean } {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { storeUrl: PLAY_STORE_URL, isIOS: false, isApple: false };
  }
  const ua = (navigator.userAgent || navigator.vendor || '').toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();

  const isApple =
    /iphone|ipad|ipod|macintosh|mac os x|macintel/i.test(ua) ||
    platform.startsWith('mac') ||
    platform.startsWith('ip');

  const isIOS =
    /iphone|ipad|ipod/i.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  return {
    storeUrl: isApple ? APP_STORE_URL : PLAY_STORE_URL,
    isIOS: isApple,
    isApple,
  };
}

/**
 * Generic custom hook to detect device platform (iOS, macOS, Android, Windows) and return the appropriate App Store or Play Store URL
 */
export function useStoreUrl(): UseStoreUrlReturn {
  const [storeInfo, setStoreInfo] = useState<{ storeUrl: string; isIOS: boolean; isApple: boolean }>({
    storeUrl: PLAY_STORE_URL,
    isIOS: false,
    isApple: false,
  });

  useEffect(() => {
    setStoreInfo(detectStoreUrl());
  }, []);

  return {
    storeUrl: storeInfo.storeUrl,
    isIOS: storeInfo.isIOS,
    isApple: storeInfo.isApple,
    storeName: storeInfo.isApple ? 'App Store' : 'Google Play',
  };
}

export default useStoreUrl;
