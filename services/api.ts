import axios from "axios";
import { useAuthStore } from "@/store/auth.store";
import { getItem, setItem } from "@/utils/storage";
import { STORAGE_KEYS } from "@/constants/storageKeys";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://feastful-floy-semistiff.ngrok-free.dev";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});

// ---------------------------------------------------------------------------
// REQUEST INTERCEPTOR: Attaches the token to every outgoing request
// ---------------------------------------------------------------------------
api.interceptors.request.use(
  (config) => {
    const token =
      useAuthStore.getState().token || getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ---------------------------------------------------------------------------
// RESPONSE INTERCEPTOR: Catches 401s and refreshes the token
// ---------------------------------------------------------------------------
api.interceptors.response.use(
  (response) => {
    // If the request succeeds, just return the response
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // 1. Define routes that SHOULD NOT trigger the refresh token flow
    const isAuthRoute =
      originalRequest.url?.includes("/auth/get-otp-for-onboarding") ||
      originalRequest.url?.includes("auth/verify-otp-for-onboarding") ||
      originalRequest.url?.includes("/auth/login-user-using-onboarding") ||
      originalRequest.url?.includes("/auth/register-user-using-onboarding") ||
      originalRequest.url?.includes("/auth/refresh-token");

    // 2. Add the !isAuthRoute check to your condition
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      originalRequest._retry = true;

      try {
        const currentRefreshToken = getItem(STORAGE_KEYS.REFRESH_TOKEN);

        if (!currentRefreshToken) {
          console.log("No refresh token available.");
          return Promise.reject(error);
        }

        // Direct raw axios request to prevent circular import & interceptor loop
        const refreshResponse = await axios.post(
          `${BASE_URL}/auth/refresh-token`,
          { refreshToken: currentRefreshToken }
        );

        const responsePayload = refreshResponse.data;
        const access_token =
          responsePayload?.data?.access_token || responsePayload?.access_token;

        if (!access_token) {
          throw new Error("No access token returned from refresh endpoint.");
        }

        setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
        useAuthStore.setState({ token: access_token });

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Session expired. Logging out...", refreshError);
        useAuthStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }

    // If it's an auth route failing (like a bad OTP), or any other error, pass it down to the UI!
    return Promise.reject(error);
  }
);
