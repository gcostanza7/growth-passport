// Event Passport — connection settings.
// The publishable key is safe to expose in the browser: all data access is
// locked down by row-level security and the database functions.
window.PASSPORT_CONFIG = {
  SUPABASE_URL: "https://gqmiernpykoeuzoowerl.supabase.co",
  SUPABASE_KEY: "sb_publishable_ur32fTjNooqxMAoRHD5RFA_dy5_7FqM",
  // Default look before an event's own colours load (SimplicityCarCare)
  DEFAULT_BRAND: "#293041",
  DEFAULT_ACCENT: "#fd761e",
  ORG_NAME: "SimplicityCarCare",
  // SimplicityCarCare logo shown across the app (attendee header, admin, big screen, printouts).
  // Put the file at this path in the repo. Full-colour logo for white backgrounds (admin, printouts, QR cards).
  ORG_LOGO: "assets/simplicitycarcare-logo.png",
  // White version of the logo, used on dark / coloured backgrounds (attendee header, big screen).
  ORG_LOGO_LIGHT: "assets/simplicitycarcare-logo-white.png",
};
