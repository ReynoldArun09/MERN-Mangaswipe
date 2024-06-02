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

/**
 * Api = most read manga api
 * sort by views
 * limit 6
 * returns only mangatitle status, mangaimagurl, description
 * http://localhost:3000/api/v1/manga/most-read
 */
export const MostReadManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find({})
    .sort({ views: -1 })
    .limit(6)
    .select({ mangaTitle: 1, mangaImageUrl: 1, status: 1, description: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = all most read manga api
 * sort by views
 * limit 20
 * returns only mangatitle chapter, mangaimagurl, description
 * http://localhost:3000/api/v1/manga/most-read-all
 */

export const MostReadMangaAll = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({})
    .sort({ views: -1 })
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, chapters: 1, mangaImageUrl: 1, description: 1 })
    .limit(limit);

  return res.status(200).json(mangas);
});

/**
 * Api = most recommended manga api
 * sort by rating
 * limit 10
 * returns only mangatitle, likes, mangaimagurl
 * http://localhost:3000/api/v1/manga/most-recommended
 */

export const MostRecommendedManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find({ rating: { $gte: 4 } })
    .select({ mangaTitle: 1, likes: 1, mangaImageUrl: 1 })
    .sort({ rating: -1 })
    .limit(10);

  return res.status(200).json(mangas);
});

/**
 * Api = all most recommended manga api
 * sort by rating
 * limit 20
 * returns only mangatitle, description, mangaimagurl, chapters
 * http://localhost:3000/api/v1/manga/most-recommended-all
 */

export const MostRecommendedMangaAll = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({ rating: { $gte: 4 } })
    .sort({ rarting: -1 })
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, chapters: 1, mangaImageUrl: 1, description: 1 })
    .limit(limit);

  return res.status(200).json(mangas);
});

/**
 * Api = most recent manga api
 * sort by modified data
 * limit 6
 * returns only mangatitle, description, mangaimagurl, status
 * http://localhost:3000/api/v1/manga/most-recent
 */

export const MostRecentManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find()
    .sort({ modifiedManga: -1 })
    .limit(6)
    .select({ mangaTitle: 1, mangaImageUrl: 1, status: 1, description: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = all most recent manga api
 * sort by modified data
 * limit 20
 * returns only mangatitle, description, mangaimagurl, chapters
 * http://localhost:3000/api/v1/manga/most-recent-all
 */

export const MostRecentMangaAll = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({ rating: { $gte: 4 } })
    .sort({ rarting: -1 })
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, mangaImageUrl: 1, chapters: 1, description: 1 })
    .limit(limit);

  return res.status(200).json(mangas);
});

/**
 * Api = most popular manga api
 * sort by modified data
 * limit 5
 * returns only mangatitle, description, mangaimagurl, status
 * http://localhost:3000/api/v1/manga/most-popular
 */

export const MostPopularManga = AsyncWrapper(async (req, res) => {
  const mangas = await Manga.find()
    .sort({ modifiedManga: -1 })
    .limit(5)
    .select({ mangaTitle: 1, mangaImageUrl: 1, status: 1, description: 1, likes: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = all most recent manga api
 * sort by raring
 * limit 20
 * returns only mangatitle, description, mangaimagurl, chapters
 * http://localhost:3000/api/v1/manga/most-popular-all
 */

export const MostPopularMangaAll = AsyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const mangas = await Manga.find({ rating: { $gte: 4 } })
    .sort({ rarting: -1 })
    .skip((page - 1) * limit)
    .select({ mangaTitle: 1, mangaImageUrl: 1, chapters: 1, description: 1, likes: 1 })
    .limit(limit);

  return res.status(200).json(mangas);
});


/**
 * Api = search manga api
 * limit 5
 * returns only mangatitle, likes, mangaimageurl
 * http://localhost:3000/api/v1/manga/mangas/search
 */


export const SearchMangas = AsyncWrapper(async (req, res) => {
  let Mangaregex = new RegExp(`^${req.query.searchTerm}`, "ig");
  const mangas = await Manga.find({ mangaTitle: { $regex: Mangaregex } })
    .limit(5)
    .select({ mangaTitle: 1, likes: 1, mangaImageUrl: 1 });

  return res.status(200).json(mangas);
});

/**
 * Api = single manga by id api
 * returns only mangatitle, description, mangaimagurl, chapters, type, genre, rating, likes, artist, status
 * http://localhost:3000/api/v1/manga/single/:id
 */


export const GetSingleManga = AsyncWrapper(async (req, res) => {
  const {id }= req.params
  const manga = await Manga.findById({_id: id}).select({
    mangaTitle: 1,
    mangaImageUrl: 1,
    type: 1,
    status: 1,
    chapters: 1,
    description: 1,
    genre: 1,
    rating: 1,
    likes: 1,
    artist: 1,
  });
  return res.status(200).json(manga);
});

/**
 * Api = single manga by title api
 * returns only chapters
 * http://localhost:3000/api/v1/manga/mangas/:title
 */


export const GetMangaByTitle = AsyncWrapper(async (req, res) => {
  const { title } = req.params;
  const manga = await Manga.find({ "chapters.chapterTitle": title }).select({ chapters: 1 });
  return res.status(200).json(manga);
});
