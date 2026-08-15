export interface Feature {
  id: string;
  name: string;
  count: number;
}

export interface Description {
  id: string;
  title: string;
  description: string;
}

export interface PlanMaster {
  id: string;
  planDuration: string;
  durationMonths: number;
  durationDays: number;
}

export interface Pricing {
  price: number;
  discountPercentage: number;
  discountPrice: number;
}

export interface Plan {
  variantId: string;
  planMaster: PlanMaster;
  pricing: Pricing;
  description: string | null;
  incentive: string | null;
  features: Feature[];
  descriptions: Description[];
}

export interface PackageData {
  name: string;
  totalPlans: number;
  plans: Plan[];
}
