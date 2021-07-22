export const __prod__ = process.env.NODE_ENV === "production";
export const baseURL = process.env.BASE_URI;
export const emailRegEx =
  /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
