import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="mt-5 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-10 gap-x-0">
      <div className="flex flex-col grid-1 w-[300px] h-[350px]">
        <div className="h-[50%] w-full">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton count={5} />
      </div>
      <div className="flex flex-col grid-1 w-[300px] h-[350px]">
        <div className="h-[50%] w-full">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton count={5} />
      </div>
      <div className="flex flex-col grid-1 w-[300px] h-[350px]">
        <div className="h-[50%] w-full">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton count={5} />
      </div>
      <div className="flex flex-col grid-1 w-[300px] h-[350px]">
        <div className="h-[50%] w-full">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton count={5} />
      </div>
      
    </div>
  );
};

export default SkeletonCard;
