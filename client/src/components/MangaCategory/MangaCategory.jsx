import { Link } from "react-router-dom";
import CustomSideHeader from "../Custom/CustomSideHeader";
import { MangaCategories } from "../../utils/data";

export default function MangaCategory() {
  return (
    <CustomSideHeader title={"Popular"}>
      <div className="text-black text-center mx-auto w-[90%]">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold cursor-pointer ml-4">
          {MangaCategories?.map((category) => (
            <Link key={category.id} to={category.href} className="bg-manga-yellow p-2">
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
    </CustomSideHeader>
  );
}
