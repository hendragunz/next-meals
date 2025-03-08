'use client'
import Container from "@/components/container"

export default function NotFound() {
  return (
    <Container>
      <div className="relative pt-36">
        <div className='text-center bg-white h-screen pt-36'>
          <h1 className="text-3xl font-bold text-red-700">Not Found</h1>
          <p className='text-lg'>Unfortunately, we could not find the requested page or resource</p>
        </div>
      </div>
    </Container>
  )
}