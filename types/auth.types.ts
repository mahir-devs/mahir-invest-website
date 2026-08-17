export interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: any;
}

export interface onBoardingPayload {
  phone: number;
}

export interface VerificationPayload {
  phone: number;
  code: number;
}

export interface LoginPayload {
  onboardingToken: string;
}

export interface RegisterPayload {
  onboardingToken: string;
  firstName: string;
  lastName: string;
  consentGiven: boolean;
  fullAddress?: string;
  state?: string;
  email?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthStore {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (data: LoginPayload) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  getProfile: () => Promise<void>;
}
