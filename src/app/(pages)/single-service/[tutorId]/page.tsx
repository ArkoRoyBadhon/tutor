"use client";
import { useGetSingleTutorQuery } from "@/app/redux/features/tutor/tutorApi";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";

const SingleTutor = () => {
  const router = useRouter();
  const pathname = usePathname();
  const cardId = pathname.slice(16);

  const {
    data: singleTutor,
    isLoading,
    isSuccess,
  } = useGetSingleTutorQuery(cardId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log("singleTutor", singleTutor?.data);

  return (
    <div className="px-10 md:container py-5">
      <div className="flex gap-10">
        <div className="w-[250px] outline outline-light h-60 rounded-md"></div>
        {/* <Image src={singleTutor?.data?.image} alt="img" height={500} width={500} /> */}
        <div className="">
          <p className="capitalize">
            <span className="font-semibold">Name:</span>{" "}
            {singleTutor?.data.name}
          </p>
          <p className="">
            <span className="font-semibold">Email:</span>{" "}
            {singleTutor?.data.email}
          </p>
          <p className="">
            <span className="font-semibold">Phone Number:</span>{" "}
            {singleTutor?.data.phoneNumber}
          </p>
          <p className="capitalize">
            <span className="font-semibold">Address:</span>{" "}
            {singleTutor?.data.address}
          </p>
          <p className="capitalize">
            <span className="font-semibold">Gender:</span>{" "}
            {singleTutor?.data.gender}
          </p>
          <p className="capitalize">
            <span className="font-semibold">Experience:</span>{" "}
            {singleTutor?.data.experience}
          </p>
          <p className="">
            <span className="font-semibold">Class:</span>{" "}
            {singleTutor?.data.class.map((ss: any, i: number) => {
              // console.log("aaaaa",ss[i]);
              // console.log("i",i);

              return (
                <span className="capitalize" key={i}>
                  {ss},
                </span>
              );
            })}
          </p>
          <p className="">
            <span className="font-semibold">Subject:</span>{" "}
            {singleTutor?.data.subject.map((ss: any, i: number) => {
              // console.log("aaaaa",ss[i]);
              // console.log("i",i);

              return (
                <span className="capitalize" key={i}>
                  {ss},
                </span>
              );
            })}
          </p>
          <p className="">
            <span className="font-semibold">Education:</span>{" "}
            {singleTutor?.data.education.map((ss: any, i: number) => {
              // console.log("aaaaa",ss[i]);
              // console.log("i",i);

              return (
                <span className="capitalize" key={i}>
                  {ss},
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <hr className="my-5 outline outline-b outline-1 outline-light" />

      <div className="">
        <h3 className="font-semibold text-xl">Are you like this tutor?</h3>
      </div>
    </div>
  );
};

export default SingleTutor;
