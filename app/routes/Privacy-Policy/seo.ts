export const privacyPolicySchema = (content: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "Privacy Policy",
    description: "Our Privacy Policy outlines how we handle and protect your personal information.",
    text: content,
  };
};
