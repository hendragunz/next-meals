import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";

export default function Home() {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Container>
        <div className="relative pt-36">
          <p className="text-gray-900 text-balance dark:text-white font-bold">Hello from Hendra G</p>
        </div>
      </Container>
    </div>
  );
}
