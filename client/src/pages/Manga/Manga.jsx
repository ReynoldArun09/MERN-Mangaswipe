import {useNavigate, useParams} from 'react-router-dom'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {GetMangaByTitle} from '../../services/mangaApi'
import CustomHelmet from '../../components/Custom/CustomHelmet'

export default function Manga() {
  let { title } = useParams();
  let [index, setIndex] = useState(0);
  let navigate = useNavigate();
  let newTitle;
  let nextchapter;

  const {data:manga} = useQuery({
    queryKey: ['manga', title],
    queryFn: () => GetMangaByTitle(title)
})


  return (
    <>
    <CustomHelmet title={`Manga Swipe - ${title}`} href={`/manga/chapter/${title}`}/>
    <section className="bg-[#131415] dark:bg-white py-8">
      <h1 className="text-center text-4xl font-bold text-white dark:text-black">{title}</h1>
      <div className="flex justify-center text-white my-10 mx-auto w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
        <div className="lg:space-x-4">
          {manga?.map((chapter) => {
              nextchapter = chapter.chapters[index];
              nextchapter.chapterTitle;
            })}
          <button
            className="w-[120px] text-black h-[30px] rounded-full bg-manga-yellow my-2 cursor-pointer"
            onClick={() => {
              index > 0 ? setIndex(index - 1) : setIndex((index = 0)), navigate(`/manga/chapter/${newTitle}`);
            }}
          >
            Prev
          </button>
          <button
            className="w-[120px] text-black h-[30px] rounded-full bg-manga-yellow my-2 cursor-pointer"
            onClick={() => {
              setIndex(index + 1), navigate(`/manga/chapter/${newTitle}`);
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        {manga &&
          manga.map((chapter, l) => {
            const filteredData = chapter.chapters.filter((data) => data.chapterTitle === title);
            return (
              <div key={l}>
                {filteredData &&
                  filteredData.map((pageimage, i) => {
                    return (
                      <div key={i}>
                        {pageimage.panelImage.map((singleimage, j) => {
                          return (
                            <div key={j}>
                              <img src={singleimage} alt="image" className="mx-auto" />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <div className="w-[100%] mx-auto text-center space-x-4 lg:space-x-10 my-8">
        {manga &&
          manga.map((chapter) => {
            nextchapter = chapter.chapters[index];
            newTitle = nextchapter.chapterTitle;
          })}
        <button
          className="w-[120px] text-black h-[30px] rounded-full bg-manga-yellow my-2 cursor-pointer"
          onClick={() => {
            index > 0 ? setIndex(index - 1) : setIndex((index = 0)), navigate(`/manga/chapter/${newTitle}`);
          }}
        >
          Prev
        </button>
        <button
          className="w-[120px] text-black h-[30px] rounded-full bg-manga-yellow my-2 cursor-pointer"
          onClick={() => {
            setIndex(index + 1), navigate(`/manga/chapter/${newTitle}`);
          }}
        >
          Next
        </button>
      </div>
    </section>
  </>
  )
}
