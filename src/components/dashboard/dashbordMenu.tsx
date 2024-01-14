"use client";

import { useEffect, useState } from "react";

const DashbordMenu = () => {
  const [isUserVisible, setUserVisible] = useState(false);
  const [isUVisible, setUVisible] = useState(false);
  const [isTutorVisible, setTutorVisible] = useState(false);
  const [isTVisible, setTVisible] = useState(false);

  const toggleSubMenu = (sub: string) => {
    if (sub === "user") setUVisible(!isUserVisible);
    if (sub === "user") setUserVisible(!isUserVisible);
    if (sub === "tutor") setTutorVisible(!isTutorVisible);
    if (sub === "tutor") setTVisible(!isTVisible);
  };

  const [position, setPosition] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Set position based on scroll position
      console.log("scroll", scrollY);

      if (scrollY >= 280) {
        setPosition(0);
        console.log("trigger");
      } else if (scrollY < 280) {
        setPosition(40);
        console.log("not trigger");
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("pos", position);

  return (
    <div className="mt-5 flex mb-10">
      <div className="w-[30%]">
        <div className={`fixed top-${position} flex flex-col`}>
          <div className="inline-block outline outline-b-1 outline-white h-fit bg-light w-[400px]">
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
                } transition-all ease-in`}
              >
                <div
                  className={`absolute w-full transition-all ease-in ${
                    isUserVisible ? "top-[-100px]" : "top-0"
                  }`}
                >
                  <button className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in">View</button>
                  <button className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in">
                    Manage User {/* create, delete, **make admin, */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block outline outline-b-1 outline-white h-fit bg-light w-[400px]">
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
                  <button className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in">All Tutor</button>
                  <button className="px-4 py-2 w-full hover:bg-lighter transition-all ease-in">
                    Manage Tutor {/* create, delete, **make admin, */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[200vh] bg-light flex-grow"></div>
    </div>
  );
};

export default DashbordMenu;
