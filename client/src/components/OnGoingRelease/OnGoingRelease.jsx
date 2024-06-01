import { Link } from "react-router-dom";
import CustomTitle from "../Custom/CustomTitle";
import { GetOnGoingManga } from "../../services/mangaApi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


export default function OngoingRelease() {
  const [pages, setPages] = useState(5);
  const { data: OnGoingData} = useQuery({
    queryKey: ["on-going"],
    queryFn: GetOnGoingManga,
  });




  return (
    <section>
      <CustomTitle title={"New OnGoing Release"} link={"on-going"}/>
      {OnGoingData &&
        OnGoingData.slice(0, pages)?.map((data) => {
          return (
            <Link to={`/manga/${data._id}/chapter`} key={data._id}>
              <>
                <div className="flex space-x-4 text-black dark:text-white">
                  <div className="my-auto">
                    <img
                      src={data.mangaImageUrl}
                      alt={data.mangaTitle}
                      className="size-24 hover:scale-x-105 hover:scale-y-105"
                    />
                  </div>
                  <div className="md:flex justify-between w-full text-sm xl:text-lg space-y-2 my-auto">
                    <div className="w-[90%] text-left">
                      <h2>Title</h2>
                      <h3 className="line-clamp-2">{data.mangaTitle}</h3>
                    </div>
                    <div className="xl:ml-10 w-[90%] text-left">
                      <h2>Status</h2>
                      <h3>{data.status}</h3>
                    </div>
                    <div className="hidden lg:block w-[90%] text-center">
                      <h2>Type</h2>
                      <h3>{data.type}</h3>
                    </div>
                    <div className="w-[90%] lg:text-right">
                      <h2>Release</h2>
                      <h3>{data.modifiedManga.slice(0, 10)}</h3>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </>
            </Link>
          );
        })}
      <div className="mt-8 text-right space-x-4 font-bold">
        <button className="rounded-full bg-manga-yellow w-32 h-8" onClick={() => setPages(pages + pages)}>
          Load More
        </button>
        <button className="rounded-full bg-manga-yellow w-32 h-8" onClick={() => setPages(5)}>
          Load Less
        </button>
      </div>
    </section>
  );
}
