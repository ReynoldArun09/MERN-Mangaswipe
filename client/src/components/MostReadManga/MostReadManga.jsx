import CustomTitle from "../Custom/CustomTitle";
import MostReadGrid from "./MostReadGrid";
import { useQuery } from "@tanstack/react-query";
import { GetMostReadManga } from "../../services/mangaApi";
import SideFrame from "./SideFrame";

export default function MostReadManga() {
  const { data: mostreadData } = useQuery({
    queryKey: ["most-read"],
    queryFn: GetMostReadManga,
  });

  return (
    <section>
      <CustomTitle title={"Most Read Manga"} link={"most-read"}/>
      <div className="pt-1 lg:pt-0 text-black dark:text-white mt-8 md:flex md:w-[90%] mx-auto rounded-lg lg:w-[85%] xl:w-[100%] bg-manga-yellow">
        <SideFrame data={mostreadData} />
        <MostReadGrid complete={mostreadData} />
      </div>
    </section>
  );
}
