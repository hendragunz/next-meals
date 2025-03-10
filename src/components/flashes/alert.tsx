export default function FlashAlert({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-red-600 rounded-md">
      {children}
    </div>
  )
}