export default function MealsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p> Here is Meals layout </p>
      {children}
    </>
  )
}