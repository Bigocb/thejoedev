"use client";
import Link from "next/link";
import { NavbarProps } from "./Navbar.types";
import Icon from "../Icon";

// import darkmodeswitcher
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher";

export const Navbar = ({
  siteTitle = "Next Portfolio",
  routes,
}: NavbarProps) => {
  return (
    <div className="navbar bg-gray-50/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 fixed w-full z-50 backdrop-blur-md">
      <div className="navbar-start container mx-auto">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black dark:text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
          >
            {routes.map((route, index) => (
              <li key={index}>
                <Link href={route.path} className="text-black dark:text-white">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl text-black dark:text-white"
          href={"/"}
        >
          <img
            src="/assets/images/sujay.png"
            alt="Sujay"
            className="w-10 h-10"
          />

          {siteTitle}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                href={route.path}
                className="text-lg text-black dark:text-white"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn dark:btn-neutral" href="/contact">
          {" "}
          Let&apos;s connect
          {/* <MessageCircleCode color="#111" size={22} />{" "} */}
          <Icon
            name="message-circle-code"
            className="text-white dark:text-black"
            size={22}
          />
        </Link>
        <div className="flex items-center">
          <DarkModeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
