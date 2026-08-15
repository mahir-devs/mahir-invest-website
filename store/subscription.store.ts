import { getSubscriptionPlans } from "@/services/subscription.api";
import { create } from "zustand";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  [key: string]: any;
}

interface SubscriptionState {
  plans: SubscriptionPlan[];
  loading: boolean;
  error: string | null;

  fetchPlans: () => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  plans: [],
  loading: false,
  error: null,

  fetchPlans: async () => {
    try {
      set((state) => {
        if (state.plans.length > 0) return state; // skip refetch
        return { loading: true, error: null };
      });

      const data = await getSubscriptionPlans();

      set({
        plans: data?.data || data,
        loading: false,
      });
    } catch (err: any) {
      set({
        error: err?.message || "Failed to fetch plans",
        loading: false,
      });
    }
  },
}));
