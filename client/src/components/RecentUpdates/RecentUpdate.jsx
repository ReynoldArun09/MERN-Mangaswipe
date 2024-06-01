import CustomTitle from "../Custom/CustomTitle";
import { useQuery } from "@tanstack/react-query";
import { GetMostRecentManga } from "../../services/mangaApi";
import SideFrame from "./SideFrame";
import MostUpdateGrid from './RecentUpdateGrid'

export default function RecentUpdates() {
  const { data: mostrecentData } = useQuery({
    queryKey: ["most-recent"],
    queryFn: GetMostRecentManga,
  });

  return (
    <section>
      <CustomTitle title={"Recent Updates"} link={"recent-update"}/>
      <div className="pt-1 lg:pt-0 text-black dark:text-white mt-8 md:flex md:w-[90%] mx-auto rounded-lg lg:w-[85%] xl:w-[100%] bg-manga-yellow">
        <SideFrame data={mostrecentData} />
        <MostUpdateGrid data={mostrecentData} />
      </div>
    </section>
  );
}
