export default {
  ROOT: "/",
  MEALS: "/meals",
  MEALS_DETALIS: (mealSlug: string) => `/meals/${mealSlug}` as const,
  MEALS_SHARE: "/meals/share",
  COMMUNITY: "/community",
} as const;
