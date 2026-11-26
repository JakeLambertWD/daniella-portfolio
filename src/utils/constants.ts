// Design tokens from the redesign style guide
export const colors = {
  ivory: "#FAF6F3", // page background
  shell: "#F3E9E6", // alternate section background
  blush: "#D8B6B6", // accents, decorative shapes
  rosewood: "#8A5A5A", // eyebrow labels, highlighted words
  taupe: "#5E504C", // body copy
  muted: "#6B5E5A", // secondary text
  espresso: "#2E2220", // headings, buttons
  line: "#EADFDA", // hairline dividers
  border: "#CDBAB5", // input and outline borders
};

// Section ids double as in-page anchors (#aboutId, ...)
export const navigationLinks = [
  { id: "aboutId", label: "About" },
  { id: "servicesId", label: "Services" },
  { id: "portfolioId", label: "Portfolio" },
  { id: "reviewsId", label: "Reviews" },
];

export const contactSectionId = "contactMeId";

// TODO: Add Daniella's profile URLs. Links and buttons that use these stay
// hidden until they are set.
export const socialLinks: { instagram: string | null; facebook: string | null } = {
  instagram: null,
  facebook: null,
};
