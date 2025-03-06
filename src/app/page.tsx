import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <Container>
      <div className="relative pt-36">
        <div className="flex gap-x-4">
          <div className="basis-2/3">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <Image
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <Image
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <Image
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <Image
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <Image
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </Carousel>
            </div>
          </div>


          <div className="basis-1/3 p-5">
            <h1 className="text-gray-900 text-balance dark:text-white font-bold">
              Next Level Food for
              <br />
              For next level foodies
            </h1>

            <div className="flex items-center flex-row gap-x-4 my-5">
              <Link href="/community">Community</Link>
              <Link href="/meals" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Meals</Link>
            </div>
          </div>

        </div>

      </div>
    </Container>
  );
}
