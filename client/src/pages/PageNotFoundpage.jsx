import CustomHelmet from '../components/Custom/CustomHelmet'
import { Link } from "react-router-dom";

export default function PageNotFoundpage() {
  return (
    <>
      <CustomHelmet title="Manga Swipe - Page Not Found" href="/404" />
      <section className="text-black flex dark:text-white h-screen">
        <div className="mx-auto w-[90%] m-auto text-center space-y-8 px-4 h-[50%]">
          <h1 className="text-7xl">
            Oops!! <br />
            <br />
            404 - PAGE NOT FOUND
          </h1>
          <p className="lg:text-2xl">
            The Page you are looking for might have been removed or its temporarily unavailable.
          </p>
          <Link to="/">
            <button className="rounded-full font-bold bg-manga-yellow w-[200px] h-[2rem]">GOT TO HOME PAGE</button>
          </Link>
        </div>
      </section>
    </>
  );
}
