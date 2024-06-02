import { Router } from "express";
import * as manga from "../controllers/manga.controller.js";

const MangaRoutes = Router();
MangaRoutes.get("/coming-soon", manga.ComingSoonManga);
MangaRoutes.get("/coming-soon-all", manga.AllComingSoonManga);
MangaRoutes.get("/most-liked", manga.MostLikedManga);
MangaRoutes.get("/on-going", manga.OnGoingManga);
MangaRoutes.get("/on-going-all", manga.AllOnGoingManga);
MangaRoutes.get("/most-read", manga.MostReadManga);
MangaRoutes.get("/most-read-all", manga.MostReadMangaAll);
MangaRoutes.get("/most-recommended", manga.MostRecommendedManga);
MangaRoutes.get("/most-recommended-all", manga.MostRecommendedMangaAll);
MangaRoutes.get("/most-recent", manga.MostRecentManga);
MangaRoutes.get("/most-recent-all", manga.MostRecentMangaAll);
MangaRoutes.get("/most-popular", manga.MostPopularManga);
MangaRoutes.get("/most-popular-all", manga.MostPopularMangaAll);

export default MangaRoutes;
