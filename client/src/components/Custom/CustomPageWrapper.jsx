

export default function CustomPageWrapper({children, title}) {
  return (
    <section className="lg:w-[80%] text-center">
      <h1 className="text-5xl my-[25px] text-black dark:text-white">{title}</h1>
      {children}
    </section>
  )
}
