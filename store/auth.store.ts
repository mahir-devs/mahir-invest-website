import { create } from "zustand";
import { getProfileAPI, loginAPI, registerAPI } from "@/services/auth.api";
import { AuthStore, LoginPayload, RegisterPayload } from "@/types/auth.types";
import { setItem, getItem, removeItem } from "@/utils/storage";
import { STORAGE_KEYS } from "@/constants/storageKeys";

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Initialize from storage so refreshes don't log the user out
  user: getItem(STORAGE_KEYS.USER) || null,
  token: getItem(STORAGE_KEYS.ACCESS_TOKEN) || null,
  loading: false,

  login: async (data: LoginPayload) => {
    set({ loading: true });

    try {
      const responsePayload = await loginAPI(data);
      const { access_token, refresh_token, user } = responsePayload.data;

      // 1. Save permanent credentials
      setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
      setItem(STORAGE_KEYS.REFRESH_TOKEN, refresh_token);
      setItem(STORAGE_KEYS.USER, user);

      // 2. CLEANUP: Delete temporary onboarding token
      removeItem(STORAGE_KEYS.ONBOARDING_TOKEN);

      // 3. Update Zustand memory state
      set({
        user: user,
        token: access_token,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  register: async (data: RegisterPayload) => {
    set({ loading: true });

    try {
      const responsePayload = await registerAPI(data);
      const { access_token, refresh_token, user } = responsePayload.data;

      // 1. Save permanent credentials
      setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
      setItem(STORAGE_KEYS.REFRESH_TOKEN, refresh_token);
      setItem(STORAGE_KEYS.USER, user);

      // 2. CLEANUP: Delete temporary onboarding token
      removeItem(STORAGE_KEYS.ONBOARDING_TOKEN);

      // 3. Update Zustand memory state
      set({
        user: user,
        token: access_token,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  // Purely client-side logout
  logout: async () => {
    // Clear local storage
    removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    removeItem(STORAGE_KEYS.USER);

    // Reset Zustand state
    set({
      user: null,
      token: null,
      loading: false,
    });
  },

  getProfile: async () => {
    set({ loading: true });

    try {
      const res = await getProfileAPI();
      const userData = res?.data?.data || res?.data?.user || res?.data || res?.user || res;

      if (userData && typeof userData === 'object') {
        setItem(STORAGE_KEYS.USER, userData); // Sync updated profile data
        set({
          user: userData,
          loading: false,
        });
      } else {
        set({ loading: false });
      }
    } catch (error) {
      set({ loading: false });

      // If the profile fetch fails (e.g., token expired), automatically log out locally
      get().logout();
    }
  },
}));
