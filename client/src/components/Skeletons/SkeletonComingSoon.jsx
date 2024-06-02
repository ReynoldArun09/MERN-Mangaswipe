import SkeletonElement from './SkeletonElement'

export default function SkeletonComingSoon() {
  return (
    <div className="container my-12 mx-auto">
      <div className="flex justify-between my-4">
        <h1 className="cursor-pointer mb-4 border-l-4 border-manga-yellow indent-[4px] font-bold w-fit transition duration-1000 ease-out hover:ease-in hover:bg-manga-yellow hover:w-fit">Loading &rarr;</h1>
        <SkeletonElement type="skeletonSpan"/>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
        <div>
        <SkeletonElement type="card" />
        <SkeletonElement type="cardTitle" />
        <SkeletonElement type="cardTitle" />
        </div>
      </div>
    </div>
  )
}
