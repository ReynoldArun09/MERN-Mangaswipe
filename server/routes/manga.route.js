import { Router } from "express";
import * as manga from "../controllers/manga.controller.js";

const MangaRoutes = Router();
MangaRoutes.get("/coming-soon", manga.ComingSoonManga);
MangaRoutes.get("/coming-soon-all", manga.AllComingSoonManga);

export default MangaRoutes;
