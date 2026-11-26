// Shared by the Sanity schema, the API route and the feedback modal
export const feedbackTypes = ["Bug", "Improvement"] as const;
export const feedbackStatuses = ["To do", "In progress", "Done"] as const;

export type FeedbackType = (typeof feedbackTypes)[number];
