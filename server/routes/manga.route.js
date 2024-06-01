import { Router } from "express";
import * as manga from "../controllers/manga.controller.js";

const MangaRoutes = Router();
MangaRoutes.get("/coming-soon", manga.ComingSoonManga);
MangaRoutes.get("/coming-soon-all", manga.AllComingSoonManga);
MangaRoutes.get("/most-liked", manga.MostLikedManga);
MangaRoutes.get("/on-going", manga.OnGoingManga);
MangaRoutes.get("/on-going-all", manga.AllOnGoingManga);

export default MangaRoutes;
