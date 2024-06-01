import { Link } from "react-router-dom";

export default function SideFrame({data}) {
  let id;
  return (
    <div className="w-[90%] md:w-[50%] h-[516px] text-center space-y-3 rounded-lg m-4 bg-[#F3F4F6] dark:bg-[#131415] pt-[20px]">
    {data?.map((listData, index) => {
      const { _id, mangaImageUrl, mangaTitle, description, status } = listData;
      if (index === 3) {
        id = _id;
        return (
          <div key={index} className="font-bold">
            <div className="relative group">
              <img src={mangaImageUrl} alt={mangaTitle} className="group-hover:opacity-[0.3] w-[300px] h-[350px] mx-auto relative" />
              <div className="opacity-0 absolute ease-in delay-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100">
                <div className="w-[200px] h-[240px] text-white">
                  <h2 className="uppercase text-2xl mt-2 font-bold line-clamp-3">{mangaTitle}</h2>
                  <p className="line-clamp-3 my-2 mx-2">{description}</p>
                  <p>Status: {status}</p>
                </div>
              </div>
            </div>
            <h2 className="my-2 mx-4 line-clamp-3 text-2xl">{mangaTitle}</h2>
            <p className="line-clamp-3 mx-8 text-sm">{description}</p>
          </div>
        );
      }
    })}
    <Link to={`/manga/${id}/chapter`}>
      <span className="mangaSpan">View More</span>
    </Link>
  </div>
  )
}
