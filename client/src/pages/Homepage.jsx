import { lazy, Suspense } from "react";
import HomepageSekeleton from "../components/Skeletons/HomepageSekeleton";


const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon"));
const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));
const OnGoingRelease = lazy(() => import("../components/OnGoingRelease/OnGoingRelease"));
const RecentUpdates = lazy(() => import("../components/RecentUpdates/RecentUpdate"));
const PopularManga = lazy(() => import("../components/PopularManga/PopularManga"));
const MostReadManga = lazy(() => import("../components/MostReadManga/MostReadManga"));
const MostRecommendedManga = lazy(() => import("../components/MostRecommendedManga/MostRecommendedManga"));

export default function Homepage() {
  return (
    <>
      <Suspense fallback={<HomepageSekeleton />}>
        <HeroSection />
        <RecentUpdates />
        <ComingSoon />
        <PopularManga />
        <MostReadManga />
        <MostRecommendedManga />
        <OnGoingRelease />
      </Suspense>
    </>
  );
}
