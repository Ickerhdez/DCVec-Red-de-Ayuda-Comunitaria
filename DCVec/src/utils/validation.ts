export const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const isValidPhone = (phone: string) => /^[0-9+()\s-]{8,}$/.test(phone.trim());

export const required = (value: string, label: string) =>
  value.trim() ? "" : `${label} es obligatorio.`;
