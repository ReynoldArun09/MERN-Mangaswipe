import CustomWrapper from "../Custom/CustomWrapper";
import { useQuery } from "@tanstack/react-query";
import { GetMostReadManga } from "../../services/mangaApi";
import SideFrame from "../Common/SideFrame";
import SideGrid from "../Common/SideGrid";

export default function MostReadManga() {
  const { data: mostreadData } = useQuery({
    queryKey: ["most-read"],
    queryFn: GetMostReadManga,
  });

  return (
    <CustomWrapper title={"Most Read Manga"} link={"most-read"}>
      <div className="bg-manga-yellow rounded-lg text-black dark:text-white lg:flex">
        <SideFrame data={mostreadData} />
        <SideGrid data={mostreadData} />
      </div>
    </CustomWrapper>
  );
}
