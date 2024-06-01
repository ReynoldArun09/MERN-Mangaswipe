import { lazy, Suspense } from "react";
import HomepageSekeleton from "../components/Skeletons/HomepageSekeleton";

const ComingSoon = lazy(() => import("../components/ComingSoon/ComingSoon"));

export default function Homepage() {
  return (
    <>
      <Suspense fallback={<HomepageSekeleton />}>
        <ComingSoon />
      </Suspense>
    </>
  );
}
