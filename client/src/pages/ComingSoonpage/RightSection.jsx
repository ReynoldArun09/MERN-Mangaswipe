import MostLikedManga from "../../components/MostLikedManga/MostLikedManga";
import MangaCategory from "../../components/MangaCategory/MangaCategory";
export default function RightSection() {
  return (
    <div className="xl:w-[30%] h-max">
      <MostLikedManga />
      <MangaCategory />
    </div>
  );
}
