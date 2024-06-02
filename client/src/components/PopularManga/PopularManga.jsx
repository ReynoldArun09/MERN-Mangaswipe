import CustomWrapper from "../Custom/CustomWrapper";
import { GetMostPopularManga } from "../../services/mangaApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function PopularManga() {
  const { data: popularData } = useQuery({
    queryKey: ["most-pop"],
    queryFn: GetMostPopularManga,
  });

  return (
    <section className="py-10">
      <CustomWrapper title={"Popular This Week"} link={"popular-mangas"}>
        <div className="flex justify-between items-center flex-wrap">
          {popularData?.map((manga) => {
            const { mangaImageUrl, mangaTitle, _id, likes } = manga;
            const newLikes = likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
              <div key={_id} className="w-[150px] md:w-[200px] text-center">
                <Link to={`/manga/${_id}/chapter`}>
                  <img
                    src={mangaImageUrl}
                    alt={mangaTitle}
                    className="w-44 h-64 rounded-md hover:scale-x-105 hover:scale-y-105"
                  />
                  <div className="text-sm font-bold text-black dark:text-white">
                    <h1 className="w-[180px] mt-2">{mangaTitle}</h1>
                    <p>
                      <i className="fa-solid fa-thumbs-up mr-1"></i> {newLikes}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </CustomWrapper>
    </section>
  );
}
