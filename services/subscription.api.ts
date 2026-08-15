import { api } from "./api";
import { SubscriptionPayload } from "@/types/subscription.types";

export const getSubscriptionPlans = async () => {
  const res = await api.get("/subscription-plan-variants/full-details");
  return res.data;
};

export const createUserSubscription = async (payload: SubscriptionPayload) => {
  return await api.post("/user-subscriptions", payload);
};

export const verifyUserSubscription = async (userId: string) => {
  return await api.get(`/user-subscriptions/user/${userId}`);
};

export const deleteUserSubscription = async (userId: string) => {
  return await api.delete(`/user-subscriptions/${userId}`);
};
