'use client'

import { useFormStatus } from "react-dom"

export default function MealsFormSubmit() {
  const { pending  } = useFormStatus()

  return (
    <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  )
}