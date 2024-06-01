import { Link } from "react-router-dom";
import CustomSideHeader from "../Custom/CustomSideHeader";

const categories = [
  {
    id: 1,
    name: "New Ongoing Release",
    href: "/on-going",
  },
  {
    id: 2,
    name: "Coming Soon",
    href: "/coming-soon",
  },
  {
    id: 3,
    name: "Recently Update",
    href: "/recent-update",
  },
  {
    id: 4,
    name: "Popular This Week",
    href: "/popular-mangas",
  },
  {
    id: 5,
    name: "Most Read Manga",
    href: "/most-read",
  },
  {
    id: 6,
    name: "Most Recommnended",
    href: "/most-recommended",
  },
];

export default function MangaCategory() {
  return (
    <section className="text-black dark:text-white mt-4 mb-8 xl:mt-8 xl:w-[100%]">
      <CustomSideHeader title={"Popular"} />
      <div className="text-black text-center mx-auto w-[90%]">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold cursor-pointer ml-4">
          {categories?.map((category) => (
            <Link key={category.id} to={category.href} className="bg-manga-yellow p-2">
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
