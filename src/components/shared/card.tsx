"use client";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ item }: any) => {
  return (
    <div className="w-[300px] h-[350px] shadow-md rounded-md ">
      <div className="w-full h-[50%] overflow-hidden">
        <Image
          className="rounded-t-md h-full w-full transition-transform transform hover:scale-110"
          src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          width={500}
          height={500}
          alt="img"
        />
      </div>
      <div className="p-3 text-[16px]">
        <p className="font-semibold">{item?.name}</p>
        <p className="">
          <span className="font-semibold">Experience: </span> {item?.experience}
        </p>
        <p className="">
          <span className="font-semibold">Gender: </span> {item?.gender}
        </p>
        <p className="">
          <span className="font-semibold">Address: </span>
          {item?.address}
        </p>
        <p className="">
          <span className="font-semibold">Institute: </span>
          {item?.institute || "N/A"}
        </p>
        <Link href={`/single-service/${item?._id}`} className="">
          <div className="bg-light hover:bg-deep px-3 py-1 mt-3 rounded-md w-full hover:text-white transition-all ease-in text-center">
            View
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
