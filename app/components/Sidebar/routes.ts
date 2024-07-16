export const SidebarRoutes = {
  home: "/",
  about: "/about",
  blog: "/blog",
  contact: "/contact",
  guarantees: "/guarantees",
  // companyProfile: "/companyProfile",
  faq: "/faq",
  privacy: "/privacy-policy",
  terms: "/terms-conditions",
} as const;

export type SidebarRoutes = (typeof SidebarRoutes)[keyof typeof SidebarRoutes];
