import MealItem from "./meal-item"

export default function MealsGrid({ meals }): MealsGrid {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
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