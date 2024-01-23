"use client";

import { useEffect, useState } from "react";
import { DashboardData } from "./dashboardData";

const DashbordMenu = () => {
  const [isUserVisible, setUserVisible] = useState(false);
  const [isUVisible, setUVisible] = useState(false);
  const [isTutorVisible, setTutorVisible] = useState(false);
  const [isTVisible, setTVisible] = useState(false);
  const [position, setPosition] = useState(40);
  const [dashItem, setDashItem] = useState("all-user");

  const toggleSubMenu = (sub: string) => {
    if (sub === "user") setUVisible(!isUserVisible);
    if (sub === "user") setUserVisible(!isUserVisible);
    if (sub === "tutor") setTutorVisible(!isTutorVisible);
    if (sub === "tutor") setTVisible(!isTVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set position based on scroll position
      // console.log("scroll", scrollY);

      if (scrollY >= 280) {
        setPosition(0);
        // console.log("trigger");
      } else if (scrollY < 280) {
        setPosition(40);
        // console.log("not trigger");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const element = DashboardData?.filter((item) => item?.id === dashItem);

  // console.log(element);

  return (
    <div className="mt-5 flex flex-col md:flex-row gap-10 md:gap-0 mb-10">
      <div className="w-[30%]">
        <div className={`md:fixed top-${position} flex flex-col`}>
          <div className="inline-block outline outline-b-1 outline-white h-fit w-[90vw] md:w-[22vw] lg:w-[24vw] xl:w-[400px] overflow-hidden">
            <button
              className="bg-blue-500 w-full text-white px-4 py-2 cursor-pointer "
              onClick={() => toggleSubMenu("user")}
            >
              User
            </button>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  isUVisible ? "h-0" : "h-20"
                } transition-all ease-in bg-light`}
              >
                <div
                  className={`absolute w-full transition-all ease-in ${
                    isUserVisible ? "top-[-100px]" : "top-0 md:top-0"
                  }`}
                >
                  <button
                    onClick={() => setDashItem("add-user")}
                    className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in"
                  >
                    Add User
                  </button>
                  <button
                    onClick={() => setDashItem("all-user")}
                    className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in"
                  >
                    Manage User {/* create, delete, **make admin, */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block outline outline-b-1 outline-white h-fit bg-light w-[90vw] md:w-[22vw] lg:w-[24vw] xl:w-[400px]">
            <button
              className="bg-blue-500 w-full text-white px-4 py-2 cursor-pointer "
              onClick={() => toggleSubMenu("tutor")}
            >
              Tutor
            </button>
            <div className="relative overflow-hidden">
              <div
                className={` ${
                  isTVisible ? "h-0" : "h-20"
                } transition-all ease-in`}
              >
                <div
                  className={`absolute w-full transition-all ease-in ${
                    isTutorVisible ? "top-[-100px]" : "top-0"
                  }`}
                >
                  <button
                    onClick={() => setDashItem("add-tutor")}
                    className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in"
                  >
                    Add Tutor
                  </button>
                  <button
                    onClick={() => setDashItem("all-tutor")}
                    className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in"
                  >
                    Manage Tutor {/* create, delete, **make admin, */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] md:w-[60vw] lg:w-[70%] min-h-[100vh] bg-light flex-grow">
        {element.map((item) => {
          return (
            <div key={item.id} className="">
              {item?.element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashbordMenu;
