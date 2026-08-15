import { api } from "./api";
import axios from "axios";
import {
  LoginPayload,
  RegisterPayload,
  onBoardingPayload,
  VerificationPayload,
} from "@/types/auth.types";

export const onBoardingAPI = async (data: onBoardingPayload) => {
  const res = await api.post("/auth/get-otp-for-onboarding", data);
  return res.data;
};

export const verifyOtpAPI = async (data: VerificationPayload) => {
  const res = await api.post("auth/verify-otp-for-onboarding", data);
  return res.data;
};

export const registerAPI = async (data: RegisterPayload) => {
  const res = await api.post("/auth/register-user-using-onboarding", data);
  return res.data;
};

export const loginAPI = async (data: LoginPayload) => {
  const res = await api.post("/auth/login-user-using-onboarding", data);
  return res.data;
};

export const refreshTokenAPI = async (data: { refreshToken: string }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
    data
  );
  return res.data;
};

export const getProfileAPI = async () => {
  const res = await api.get("/auth/me");
  if (!res) {
    throw new Error("Profile fetch Failed");
  }
  return res.data;
};

export const updateProfileAPI = async (data: any) => {
  const res = await api.patch("/users/update-user-profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const sendOtpAPI = async (email: string) => {
  const res = await api.post("/auth/send-email-otp-for-update-profile", {
    email: email,
  });
  return res.data;
};

export const verifyEmailOtpAPI = async (payload: {
  email: string;
  code: number;
}) => {
  const res = await api.post(
    "auth/verify-email-otp-for-update-profile",
    payload
  );
  return res.data;
};
