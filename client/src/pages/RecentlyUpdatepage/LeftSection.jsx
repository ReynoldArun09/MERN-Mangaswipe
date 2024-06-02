import CustomCard from "../../components/Custom/CustomCard";
import { useQuery } from "@tanstack/react-query";
import { GetMostRecentMangaList } from "../../services/mangaApi";
import { useState } from "react";
import CustomSeparator from "../../components/Custom/CustomSeparator";

export default function LeftSection() {
 
  const [page, setPage] = useState(1);
  const { data: MostRecentData } = useQuery({
    queryKey: ["most-recent-all"],
    queryFn: () => GetMostRecentMangaList(page),
  });

  return (
    <section className="lg:w-[80%] text-center">
      <h1 className="text-5xl my-[25px]">Most Recently Updated</h1>
      <CustomSeparator />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[25px] min-h-[70vh]">
        {MostRecentData?.map((data) => (
          <CustomCard data={data} key={data._id} />
        ))}
      </div>
      <CustomSeparator />
      <div className="space-x-10 my-10 font-bold">
          <button
            className="rounded-full bg-manga-yellow w-[8rem] h-[2rem]"
            onClick={() => setPage((page) => page - 1)}
            disabled={page === 0}
          >
            <i className="fa-solid fa-circle-arrow-left"></i> Back
          </button>
          <button
            className="rounded-full bg-manga-yellow w-[8rem] h-[2rem]"
            onClick={() => setPage((page) => page + 1)}
          >
            Next <i className="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
    </section>
  );
}
