// ---------- SET ----------
export const setItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// ---------- GET ----------
export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch {
      return item;
    }
  }
  return null;
};

// ---------- REMOVE ----------
export const removeItem = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// ---------- CLEAR ----------
export const clearStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
