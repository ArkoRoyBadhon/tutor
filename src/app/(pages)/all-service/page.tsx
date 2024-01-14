"use client";
import { useGetAllTutorQuery } from "@/app/redux/features/tutor/tutorApi";
import Card from "@/components/shared/card";
import SkeletonCard from "@/components/shared/skeletonCard";
import Pagination from "@/components/utils/pagination";
import { useState } from "react";


const AllServices = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");

  const [pageNum, setPageNum] = useState("1");

  const {
    data: allTutor,
    isLoading,
    isSuccess,
  } = useGetAllTutorQuery({
    searchVal,
    selectedGender,
    selectedClass,
    pageNum,
  });

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  const handleSearch = () => {
    setSearchVal(searchValue);
  };

  const handleSelectChange = (e: any) => {
    setSelectedGender(e.target.value);
  };

  const pageCount = Math.ceil(Number(allTutor?.data?.meta?.count) / Number(2));

  const handlePageChange = (page: any) => {
    setPageNum(page);
  };

  return (
    <div className="px-10 md:container pb-5">
      <h3 className="font-semibold text-md mt-5">Filter Options</h3>
      <div className="h-fit py-5">
        <div className="flex outline w-[400px] rounded-md outline-1 outline-light">
          <input
            className="w-full px-2 outline-none"
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <p
            onClick={() => handleSearch()}
            className="bg-light px-2 py-1 rounded-r-md cursor-pointer hover:bg-deep hover:text-white transition-all ease-in"
          >
            Search
          </p>
        </div>
        <div className=" w-fit pt-5">
          <div className="outline outline-1 outline-light px-2 py-[2px] rounded-md flex justify-between gap-5 mb-5">
            <label htmlFor="selectgender">Choose a gender:</label>
            <select
              className="w-14"
              id="selectgender"
              value={selectedGender}
              onChange={(e) => handleSelectChange(e)}
            >
              <option value="">all</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="outline outline-1 outline-light px-2 py-[2px] rounded-md flex justify-between gap-5">
            <label htmlFor="selectclass">Choose a Class:</label>
            <select
              className="w-14"
              id="selectclass"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">all</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="my-5 outline outline-b outline-1 outline-light" />
      <h3 className="font-semibold text-xl">Our Services</h3>
      {isLoading && (
        <div className="mt-5 ">
          <SkeletonCard />
          {/* <SkeletonCard /> */}
        </div>
        // <div className="mt-5 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-10 gap-x-0">
        //   <div className="">
        //     <Skeleton className="h-20" />
        //     <Skeleton count={5} />
        //   </div>
        // </div>
      )}
      {isSuccess && (
        <div className="mt-5 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-10 gap-x-0">
          {allTutor?.data?.data.length > 0 ? (
            allTutor?.data?.data?.map((item: any) => {
              return (
                <div key={item?._id} className="">
                  <Card item={item} />
                </div>
              );
            })
          ) : (
            <div className="w-full h-[300px] flex justify-center items-center text-md">
              Sorry! No Data Found
            </div>
          )}
        </div>
      )}

      <div className="mt-10">
        <div className="flex justify-center">
          {}
          <Pagination totalPages={pageCount} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default AllServices;
