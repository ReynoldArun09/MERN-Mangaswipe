import { Link } from "react-router-dom";

export default function CustomCard({ data }) {
  const { _id, mangaImageUrl, mangaTitle, chapters, description } = data;
  return (
    <div className="my-[20px]" key={mangaTitle}>
      <Link to={`/manga/${_id}/chapter`}>
        <div className="relative group">
          <img src={mangaImageUrl} alt={mangaTitle} className="group-hover:opacity-[0.2] w-44 h-64 mx-auto relative" />
          <div className="opacity-0 absolute ease-in delay-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100">
            <h1 className="uppercase w-[150px] mx-auto text-2xl line-clamp-3">{mangaTitle}</h1>
            <p className="line-clamp-3 my-2 w-44 mx-auto">{description}</p>
            {chapters.slice(Math.max(chapters.length - 1, 0)).map((chap) => {
              return (
                <div key={chap.chapterNumber}>
                  <button className="w-32 h-8 text-black border-2 border-black my-1 cursor-pointer">
                    Chapter {chap.chapterNumber}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
      {chapters.slice(Math.max(chapters.length - 2, 0)).map((chapter) => (
        <div key={chapter.chapterTitle}>
          <Link to={`/manga/chapter/${chapter.chapterTitle}`}>
            <button className="w-32 text-black h-[40px] rounded-full bg-manga-yellow my-2 cursor-pointer">
              Chapter {chapter.chapterNumber}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
