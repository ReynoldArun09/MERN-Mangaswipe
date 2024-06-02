import { Link } from "react-router-dom";
import CustomTitle from "../Custom/CustomTitle";
import { useQuery } from "@tanstack/react-query";
import { GetComingSoonManga } from "../../services/mangaApi";

export default function ComingSoon() {
  const { data: ComingSoonData } = useQuery({
    queryKey: ["coming-soon"],
    queryFn: GetComingSoonManga,
  });

  return (
    <section className="py-10">
      <CustomTitle title={"Coming Soon"} link={"coming-soon"} />
      <div className="bg-white dark:bg-black drop-shadow-lg rounded-lg">
        {ComingSoonData?.map((data) => (
          <Link to={`/manga/${data._id}/chapter`} key={data._id}>
            <div className="rounded-lg flex mx-4 py-4 h-[8.125rem] relative z-[-1]">
              <img src={data.mangaImageUrl} alt={data.mangaTitle} className="size-24" />
              <div className="ml-4">
                <h2 className="line-clamp-1 font-fred text-black dark:text-white">{data.mangaTitle}</h2>
                <p className="line-clamp-3 text-gray-400">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
