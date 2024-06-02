import { lazy, Suspense } from "react";
import HomepageSekeleton from "../components/Skeletons/HomepageSekeleton";
import {Helmet} from 'react-helmet-async'

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
    <Helmet>
        <title>Manga Swipe | Best Maga/Manhwa Website</title>
        <link rel="canonical" href="/" />
        <meta name="description" content="Manga Swipe is the best manga/manhwa website in the world." />
      </Helmet>
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
