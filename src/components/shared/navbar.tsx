"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  useGetUserQuery,
  useLogOutMutation,
} from "@/app/redux/features/user/userApi";
import { setLoggedInfo } from "@/app/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const {
    data: InfoData,
    isSuccess,
    isError,
    refetch,
  } = useGetUserQuery(undefined);
  const [logOut] = useLogOutMutation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  if (isSuccess) {
    dispatch(setLoggedInfo(InfoData?.data));
  }

  const handleLogout = async () => {
    await logOut(undefined);
  };

  if (isError) {
    dispatch(setLoggedInfo(null));
    router.push("/login");
  }

  return (
    <nav className="shadow-md py-4 scroll-m-0">
      <div className="px-10 md:container relative overflow-hidden">
        <div className={`flex justify-between items-center`}>
          <div className="font-bold">Tutor House</div>
          <div className="md:flex hidden">
            <ul className="flex gap-5">
              <li className="cursor-pointer">
                <Link href="/home">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/all-service">All Services</Link>
              </li>
              {user?.role === "admin" && (
                <li className="cursor-pointer">
                  <Link href="/dashboard">DashBoard</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-5">
              <Link href="/cart"><FaCartShopping /></Link>
              <div className="">
                {user?.email ? (
                  <div className="">{user?.name}</div>
                ) : (
                  <Link
                    href="/login"
                    className="bg-light px-3 py-2 rounded-md cursor-pointer"
                  >
                    Sign in
                  </Link>
                )}
              </div>
              <div className="">
                {user?.email ? (
                  <div
                    className="cursor-pointer bg-light px-3 py-2 rounded-md"
                    onClick={() => handleLogout()}
                  >
                    LogOut
                  </div>
                ) : (
                  <Link
                    href="/register"
                    className="bg-light px-3 py-2 rounded-md cursor-pointer"
                  >
                    Sign Up
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={`absolute w-[100vw] h-[100vh] top-[-15px] bg-deeper transition-all ease-in duration-500 z-10 p-5 ${
            isOpen ? "right-[0px]" : "right-[-200%]"
          }`}
        >
          <div className="flex justify-end">
            <div className="" onClick={() => setIsOpen(!isOpen)}>
              <MdClose />
            </div>
          </div>
          <ul>
            <li className="h-10 hover:bg-lighter flex items-center px-5 rounded-sm border-b border-solid border-lighter">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className={``}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="h-10 hover:bg-lighter flex items-center px-5 rounded-sm border-b border-solid border-lighter">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className={``}
                href="/all-service"
              >
                All Service
              </Link>
            </li>
            <li className="h-10 hover:bg-lighter flex items-center px-5 rounded-sm border-b border-solid border-lighter">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className={``}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-5 mt-10 justify-around">
              <FaCartShopping className="text-white text-[20px]" />
              <div className="">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  href="/login"
                  className="bg-light px-3 py-2 rounded-md"
                >
                  Sign in
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
