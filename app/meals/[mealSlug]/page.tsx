type Props = {
  params: { mealSlug: string };
};

export default function MealDetailsPage({ params }: Props) {
  return <div>Meal Detail Page {params.mealSlug}</div>;
}
