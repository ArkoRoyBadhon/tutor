"use client";
import { FaUser, FaChalkboardTeacher } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { useState } from "react";
import { UserData } from "@/utils/Data";
import DashbordMenu from "@/components/dashboard/dashbordMenu";

const DashboardPage = () => {
  return (
    <div className="px-5 md:px-10 md:container min-h-[100vh] mx-auto">
      <h3 className="font-semibold text-md mt-5">Dashboard</h3>
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="bg-deep text-white h-32 w-[30%] flex flex-col justify-center items-center rounded-md">
            <FaUser className="text-xl mb-3" />
            <h4 className="font-semibold">Total User</h4>
            <p className="">11200</p>
          </div>
          <div className="bg-deep text-white h-32 w-[30%] flex flex-col justify-center items-center rounded-md">
            <FaChalkboardTeacher className="text-xl mb-3" />
            <h4 className="font-semibold">Total Teacher</h4>
            <p className="">270</p>
          </div>
          <div className="bg-deep text-white h-32 w-[30%] flex flex-col justify-center items-center rounded-md">
            <BiSolidInstitution className="text-xl mb-3" />
            <h4 className="font-semibold">Active Tution</h4>
            <p className="">785</p>
          </div>
        </div>
        <DashbordMenu />
      </div>
    </div>
  );
};

export default DashboardPage;
