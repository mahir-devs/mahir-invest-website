import { api } from "./api";

export interface BookDemoPayload {
  fullName: string;
  workEmail: string;
  phone: string;
  company?: string;
  countryCode?: string;
  preferredDateTime: string;
}

export const submitBookDemo = async (payload: BookDemoPayload) => {
  const res = await api.post("/book-demo", payload);
  return res.data;
};
