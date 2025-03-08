'use client'
import Container from "@/components/container"

export default function Error() {
  return (
    <Container>
      <div className="relative pt-36">
        <div className='text-center bg-white h-screen pt-36'>
          <h1 className="text-3xl font-bold text-red-700">An error occured!</h1>
          <p className='text-lg'>Failed to fetch meal data. Please try again later</p>
        </div>
      </div>
    </Container>
  )
}