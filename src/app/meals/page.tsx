import Link from "next/link";
import Container from "@/components/container";
import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <Container>
      <div className="relative pt-36">
        <MealsGrid meals={meals} />
      </div>
    </Container>
  );
}