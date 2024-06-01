import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import ComingSoonpage from "./pages/ComingSoonpage/ComingSoonpage";
import PageNotFoundpage from "./pages/PageNotFoundpage";
import OnGoingpage from "./pages/OnGoingpage/OnGoingpage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/coming-soon" element={<ComingSoonpage />} />
          <Route path="/on-going" element={<OnGoingpage />} />
        </Route>
        <Route path="*" element={<PageNotFoundpage />} />
      </Routes>
    </>
  );
}
