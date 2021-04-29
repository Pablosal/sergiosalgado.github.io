import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <nav className="md:h-full md:w-72 w-full md:col-span-2 h-36 p-2 border-gray-400 border-r-2 bg-blue-650 shadow-sm  fixed left-0 top-0 z-50 flex md:flex-col justify-evenly md:justify-center items-center mb-11">
      <Image
        className="rounded-full"
        src="/perfil-raw-circle.jpg"
        height={120}
        width={120}
        alt="Picture of the author"
      />
      <div>
        <h2 className="text-center md:text-4xl text-md font-bold text-white">
          Sergio Salgado
        </h2>
        <div className="hidden md:inline">
          <p className="text-center my-5 font-semibold text-white">
            Desarrollador autodidacta enfocado en React
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-center mt-5 text-md font-semibold text-white">
            Contactame en:
          </h3>
          <ul className="flex justify-center items-center">
            <li className="mx-4">
              <i className="fab fa-linkedin-in fa-3x cursor-pointer  text-blue-800 hover:text-blue-300"></i>
            </li>
            <li className="mx-4">
              <i className="fab fa-github-alt fa-3x cursor-pointer hover:text-gray-700  text-black"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
