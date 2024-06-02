import CustomWrapper from "../Custom/CustomWrapper";
import { useQuery } from "@tanstack/react-query";
import { GetMostRecentManga } from "../../services/mangaApi";
import SideFrame from "../Common/SideFrame";
import SideGrid from "../Common/SideGrid";

export default function RecentUpdates() {
  const { data: mostrecentData } = useQuery({
    queryKey: ["most-recent"],
    queryFn: GetMostRecentManga,
  });

  return (
    <CustomWrapper title={"Recent Updates"} link={"recent-update"}>
      <div className="bg-manga-yellow rounded-lg text-black dark:text-white lg:flex">
        <SideFrame data={mostrecentData} />
        <SideGrid data={mostrecentData} />
      </div>
    </CustomWrapper>
  );
}
