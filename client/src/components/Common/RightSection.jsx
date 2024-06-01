import MostLikedManga from "../MostLikedManga/MostLikedManga";
import MangaCategory from "../MangaCategory/MangaCategory";
export default function RightSection() {
  return (
    <div className="xl:w-[30%] h-max">
      <MostLikedManga />
      <MangaCategory />
    </div>
  );
}
