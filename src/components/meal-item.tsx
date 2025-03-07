import Link from "next/link"
import Image from "next/image"
import classes from "./meal-item.module.css"

export default function MealItem({ title, slug, image, summary }: prop): MealItem {
  console.log(image)
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <a href="#"></a>
      <div className="relative">
        <a href="#" className="">
          <Image className={`w-full ${classes.imageFood}`} src={image} alt={title} width={500} height={500} />
          <div
            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </a>
        {/* <a href="#!">
          <div
            className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            Photos
          </div>
        </a> */}

        {/* <a href="!#">
          <div
            className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <span className="font-bold">27</span>
            <small>March</small>
          </div>
        </a> */}
      </div>
      <div className="px-6 py-4">
        <Link href={`/meals/${slug}`} className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
          {title}
        </Link>

        <p className="text-gray-500 text-sm">
          {summary}
        </p>
      </div>

      {/* <div className="px-6 py-4 flex flex-row items-center">
        <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
          <span className="ml-1">6 mins ago</span></span>
      </div> */}
    </div>
  )
}