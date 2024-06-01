import CustomTitle from '../Custom/CustomTitle'
import { GetMostRecommendedMangas } from '../../services/mangaApi';
import {useQuery} from '@tanstack/react-query'
import { Link } from 'react-router-dom';

export default function MostRecommendedManga() {

  const { data: mostrecommendedData } = useQuery({
    queryKey: ["most-popular"],
    queryFn: GetMostRecommendedMangas,
  });


  return (
    <section>
    <CustomTitle title={"Most Recommended"} link={'most-recommended'}/>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {mostrecommendedData?.map((manga) => {
          const { mangaImageUrl, mangaTitle, _id, likes } = manga;
          const newLikes = likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <div className="text-center mx-auto w-[160px]" key={_id}>
              <Link to={`/manga/${_id}/chapter`}>
                <img
                  src={mangaImageUrl}
                  alt={mangaTitle}
                  className="w-44 h-64 rounded-md hover:scale-x-105 hover:scale-y-105"
                />
                <div className="text-black dark:text-white space-y-1" key={_id}>
                  <h2 className="text-sm line-clamp-2 my-1">{mangaTitle}</h2>
                  <h3 className="text-sm font-bold">
                    <i className="fa-solid fa-thumbs-up mr-1"></i>
                    {newLikes}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  </section>
  )
}
