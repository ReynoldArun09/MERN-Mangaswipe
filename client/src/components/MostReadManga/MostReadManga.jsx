import CustomWrapper from "../Custom/CustomWrapper";
import { useQuery } from "@tanstack/react-query";
import { GetMostReadManga } from "../../services/mangaApi";
import SideFrame from "../Common/SideFrame";
import SideGrid from "../Common/SideGrid";
import SkeletonGrid from '../Skeletons/SkeletonGrid'

export default function MostReadManga() {
  const { data: mostreadData, isLoading } = useQuery({
    queryKey: ["most-read"],
    queryFn: GetMostReadManga,
  });

  if(isLoading) {
    return <SkeletonGrid />
  }

  return (
    <CustomWrapper title={"Most Read Manga"} link={"most-read"}>
      <div className="bg-manga-yellow rounded-lg text-black dark:text-white lg:flex">
        <SideFrame data={mostreadData} />
        <SideGrid data={mostreadData} />
      </div>
    </CustomWrapper>
  );
}
