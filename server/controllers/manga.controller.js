import AsyncWrapper from "../utils/AsyncWrapper.js";
import Manga from "../model/manga.model.js";

/**
 * Api = comingsoon manga api
 * find by status(comingsoon) field
 * limit 2
 * returns only mangatitle, description, mangaimageurl
 * http://localhost:3000/api/v1/manga/comingsoon
 */

export const ComingSoonManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find({ status: "Coming Soon" })
    .limit(2)
    .select({ mangaTitle: 1, description: 1, mangaImageUrl: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = all comingsoon manga api
 * find by status(comingsoon) field
 * limit 20
 * returns only mangatitle, description, mangaimageurl, chapters
 * http://localhost:3000/api/v1/manga/comingsoon
 */
export const AllComingSoonManga = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.params.page) || 1
  const limit = 20
  const mangas = await Manga.find({ status: "Coming Soon" }).limit(limit).skip((page-1) * limit)
    .select({ mangaTitle: 1, description: 1, mangaImageUrl: 1, chapters:1 });

  return res.status(200).json(mangas);
});
