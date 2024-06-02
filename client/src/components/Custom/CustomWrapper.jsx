import { Link } from "react-router-dom";

const CustomTitle = ({ title, link }) => {
  return (
    <div className="flex justify-between">
      <h1 className="cursor-pointer my-4 border-l-4 border-manga-yellow indent-[4px] font-bold w-fit transition duration-1000 ease-out hover:ease-in hover:bg-manga-yellow hover:w-fit dark:text-white">
        {title} <span>&#187;</span>
      </h1>
      <Link to={`/${link}`}>
        <span className="underline dark:text-white decoration-manga-yellow decoration-2 underline-offset-8 cursor-pointer">
          View All
        </span>
      </Link>
    </div>
  );
};

const CustomWrapper = ({ children, title, link }) => {
  return (
    <section className="py-10">
      <CustomTitle title={title} link={link} />
      {children}
    </section>
  );
};

export default CustomWrapper;
