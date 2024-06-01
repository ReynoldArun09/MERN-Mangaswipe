import AsyncWrapper from "../utils/AsyncWrapper.js";
import Manga from "../model/manga.model.js";

/**
 * Api = comingsoon manga api
 * find by status(comingsoon) field
 * limit 2
 * returns only mangatitle, description, mangaimageurl
 * http://localhost:3000/api/v1/manga/coming-soon
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
 * http://localhost:3000/api/v1/manga/coming-soon-all
 */
export const AllComingSoonManga = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.params.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({ status: "Coming Soon" })
    .limit(limit)
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, description: 1, mangaImageUrl: 1, chapters: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = Most liked manga api
 * find and sort by likes and views
 * limit 9
 * returns only mangatitle, likes, mangaimageurl
 * http://localhost:3000/api/v1/manga/most-liked
 */


export const MostLikedManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find({})
    .sort({ likes: -1, views: -1 })
    .limit(9)
    .select({ mangaTitle: 1, likes: 1, mangaImageUrl: 1 });

  return res.status(200).json(mangas);
});


/**
 * Api = ongoing manga api
 * find by status(Ongoing) field
 * limit 15
 * returns only mangatitle, status, type, modifiedManga, imagurl
 * http://localhost:3000/api/v1/manga/ongoing
 */


export const OnGoingManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find({ status: "Ongoing" })
    .limit(15)
    .select({ mangaTitle: 1, status: 1, type: 1, modifiedManga: 1, mangaImageUrl: 1 });

  return res.status(200).json(mangas);
});


/**
 * Api = Allongoing manga api
 * find by status(Ongoing) field
 * limit 20 + pagination
 * returns only mangatitle, status, type, modifiedManga, imagurl, description, chapters
 * http://localhost:3000/api/v1/manga/allongoing
 */


export const AllOnGoingManga = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({ status: "Ongoing" })
    .sort({ modifiedManga: -1 })
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, status: 1, type: 1, modifiedManga: 1, mangaImageUrl: 1, chapters: 1, description: 1 })
    .limit(limit);

  return res.status(200).json(mangas);
});