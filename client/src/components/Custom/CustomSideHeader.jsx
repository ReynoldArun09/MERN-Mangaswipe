export default function CustomSideHeader({title}) {
  return (
    <h1 className="mx-auto cursor-pointer mb-8 border-l-4 border-manga-yellow indent-[4px] font-bold transition duration-1000 ease-out hover:ease-in hover:bg-manga-yellow text-3xl w-[80%]">
      {title} &rarr;
    </h1>
  );
}
