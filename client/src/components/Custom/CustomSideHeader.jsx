export default function CustomSideHeader({ children, title }) {
  return (
    <section className="text-black dark:text-white mt-4 mb-8 xl:mt-8 xl:w-[100%]">
      <h1 className="mx-auto cursor-pointer mb-8 border-l-4 border-manga-yellow indent-[4px] font-bold transition duration-1000 ease-out hover:ease-in hover:bg-manga-yellow text-3xl w-[80%]">
        {title} &rarr;
      </h1>
      {children}
    </section>
  );
}
