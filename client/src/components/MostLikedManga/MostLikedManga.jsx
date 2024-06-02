import { Link } from "react-router-dom";
import { GetMostLikedManga } from "../../services/mangaApi";
import { useQuery } from "@tanstack/react-query";
import CustomSeparator from "../Custom/CustomSeparator";
import CustomSideHeader from "../Custom/CustomSideHeader";
export default function MostLikedManga() {
  const { data: LikedMangaData } = useQuery({
    queryKey: ["most-liked"],
    queryFn: GetMostLikedManga,
  });

  return (
    <CustomSideHeader title={"Hottest Manga"}>
      {LikedMangaData?.map((list, index) => {
        const { _id, mangaImageUrl, mangaTitle, likes } = list;
        const newLikes = likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
          <Link to={`/manga/${_id}/chapter`} key={_id}>
            <div className="flex w-[90%] mx-auto h-[80px]">
              <h2 className="my-auto underline underline-offset-8 decoration-manga-yellow decoration-4 mx-8 font-bold text-4xl">
                {index + 1}
              </h2>
              <img src={mangaImageUrl} alt={mangaTitle} className="w-11 h-16 my-auto" />
              <div className="my-auto mx-4">
                <h2 className="line-clamp-2">{mangaTitle}</h2>
                <h3>
                  <i className="fa-solid fa-thumbs-up"></i> {newLikes}
                </h3>
              </div>
            </div>
            <CustomSeparator />
          </Link>
        );
      })}
    </CustomSideHeader>
  );
}
