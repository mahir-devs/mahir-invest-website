export interface SubscriptionPayload {
  userId: string;
  variantId: string;
  acceptedMarketRiskTerms: boolean;
}

export interface Feature {
  id?: string | number;
  name: string;
}

export interface Pricing {
  discountPrice: number;
  price: number;
  discountPercentage: number;
}

export interface Description {
  description?: string;
  title?: string;
}

export interface PlanMaster {
  planDuration: string;
}

export interface PlanVariant {
  variantId: string | number;
  planMaster: PlanMaster;
  descriptions: Description[];
  pricing: Pricing;
  features: Feature[];
  incentive?: string;
}

export interface PlanProps {
  plan: PlanVariant;
}
