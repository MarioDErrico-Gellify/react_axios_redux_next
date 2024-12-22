export const constants = {
  DEFAULT_CACHE_TTL: 60 * 60 * 24 * 3, // in seconds, 3 days
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
  EMAIL_REGEX: /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+)+[.][A-Za-z]{2,}$/,
  DEFAULT_COUNTRY_CODE: "IT",
  DEFAULT_LANGUAGE: "it",
  SUPPORTEDLANGUAGES: ["it", "en"] as const,
};
