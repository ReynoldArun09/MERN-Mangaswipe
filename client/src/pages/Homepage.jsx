import { lazy, Suspense } from "react";
import HomepageSekeleton from "../components/Skeletons/HomepageSekeleton";

const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon"));
const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));

export default function Homepage() {
  return (
    <>
      <Suspense fallback={<HomepageSekeleton />}>
        <HeroSection />
        <ComingSoon />
      </Suspense>
    </>
  );
}
