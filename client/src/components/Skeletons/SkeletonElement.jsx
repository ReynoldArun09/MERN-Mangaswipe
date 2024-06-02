export default function SkeletonElement({ type }) {
  if (type === "cardtitle") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded w-[160px] h-[20px] my-2"></div>;
  }

  if (type === "card") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded w-[160px] h-[210px]"></div>;
  }

  if (type === "skeletonTitle") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded w-[120px] h-[25px]"></div>;
  }
  if (type === "skeletonSpan") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded w-[60px] h-[20px]"></div>;
  }

  if(type === "mangapage") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded w-[320px] my-10 h-[750px] md:w-[400px] lg:w-[550px] xl:w-[650px]"></div>
  }
  if(type === "skelebtn") {
    return <div className="bg-[#313131] overflow-hidden mx-0 rounded h-[2rem] w-[8rem]"></div>
  }
}
