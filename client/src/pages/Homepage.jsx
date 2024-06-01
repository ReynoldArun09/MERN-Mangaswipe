import { lazy, Suspense } from "react";
import HomepageSekeleton from "../components/Skeletons/HomepageSekeleton";

const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon"));
const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));
const OnGoingRelease = lazy(() => import("../components/OnGoingRelease/OnGoingRelease"));

export default function Homepage() {
  return (
    <>
      <Suspense fallback={<HomepageSekeleton />}>
        <HeroSection />
        <ComingSoon />
        <OnGoingRelease />
      </Suspense>
    </>
  );
}
