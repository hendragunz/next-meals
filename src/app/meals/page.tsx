import Link from "next/link";
import Container from "@/components/container";

export default function MealsPage() {
  return (
    <Container>
      <div className="relative pt-36">
        <h1>This is meals page</h1>
        <p><Link href="/meals/share">Share Meal</Link></p>
        <p><Link href="/meals/meal-1">Meal1</Link></p>
        <p><Link href="/meals/meal-2">Meal2</Link></p>
      </div>
    </Container>
  );
}