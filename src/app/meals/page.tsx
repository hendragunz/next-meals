import Link from "next/link"
import { Suspense } from "react"
import Container from "@/components/container"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"

async function Meals() {
  const meals = await getMeals()
  return (
    <MealsGrid meals={meals} />
  )
}

export default function MealsPage() {
  return (
    <Container>
      <div className="relative pt-36">
        <div className="flex items-center">
          <div className="text-left">
            <h2
              className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
              Delicious meals, created &nbsp;
              <span className="font-bold text-blue-500">by you</span>
            </h2>

            <p className="max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>

            <div className="mt-5 sm:flex md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/meals/share"
                  className="flex items-center justify-center w-full px-6 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-2 md:text-lg md:px-8"
                >
                  Share your favorite recipe
                </Link>
              </div>

              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href=""
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                  Contribute
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <Suspense fallback={<div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
        </div>}>
          <Meals />
        </Suspense>

      </div>
    </Container>
  )
}