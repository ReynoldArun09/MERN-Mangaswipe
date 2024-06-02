import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import ComingSoonpage from "./pages/ComingSoonpage/ComingSoonpage";
import PageNotFoundpage from "./pages/PageNotFoundpage";
import OnGoingpage from "./pages/OnGoingpage/OnGoingpage";
import Recommendedpage from './pages/Recommendedpage/Recommendedpage'
import MostReadMangapage from './pages/MostReadMangapage/MostReadMangapage'
import Popularpage from './pages/Popularpage/Popularpage'
import RecentlyUpdatepage from './pages/RecentlyUpdatepage/RecentlyUpdatepage'
import Aboutpage from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Dcmapage from './pages/Dmcapage'
import Termspage from './pages/Termspage'
import Privacypage from './pages/Privacypage'
import Manga from './pages/Manga/Manga'
import MangaChapter from './pages/MangaChapter/MangaChapter'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/coming-soon" element={<ComingSoonpage />} />
          <Route path="/on-going" element={<OnGoingpage />} />
          <Route path="/recent-update" element={<RecentlyUpdatepage />} />
          <Route path="/popular-mangas" element={<Popularpage />} />
          <Route path="/most-read" element={<MostReadMangapage />} />
          <Route path="/most-recommended" element={<Recommendedpage />} />
          <Route path="/manga/chapter/:title" element={<Manga />} />
          <Route path="/manga/:id/chapter" element={<MangaChapter />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/dcma" element={<Dcmapage />} />
          <Route path="/terms" element={<Termspage />} />
          <Route path="/privacy" element={<Privacypage />} />
        </Route>
        <Route path="*" element={<PageNotFoundpage />} />
      </Routes>
    </>
  );
}

