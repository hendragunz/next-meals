import MealItem from "./meal-item"

export default function MealsGrid({ meals }): MealsGrid {
  return (
    <div className="max-w-screen-xl mx-auto py-5 sm:py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {
          meals.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))
        }
      </div>
    </div>
  )
}