import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className=" w-64 p-2 border-gray-400 border-r-2 bg-indigo-700 shadow-xl h-screen fixed left-0 top-0 z-50 hidden md:block ">
      <nav>
        {/* <ul className="">
          <li className="w-full bg-green-400 cursor-pointer p-3 hover:bg-green-800 text-white uppercase flex flex-col justify-center items-center">
            <i class="fas fa-person-booth  fa-3x"></i>
            <Link href="/">
              <a>Yo</a>
            </Link>
          </li>
          <li className="w-full bg-green-400 cursor-pointer p-3 hover:bg-green-800 text-white uppercase flex flex-col justify-center items-center">
            <i class="far fa-folder-open fa-3x"></i>
            <Link href="/proyectos">
              <a>Proyectos</a>
            </Link>
          </li>
          <li className="w-full bg-green-400 cursor-pointer p-3 hover:bg-green-800 text-white uppercase flex flex-col justify-center items-center">
            <i class="fas fa-question fa-3x"></i>
            <Link href="/personal">
              <a>Info</a>
            </Link>
          </li>
        </ul> */}

        <div className="flex flex-col justify-center">
          <div className={styles.sidebarNamingHead}>
            <h1 className="font-semibold text-white text-3xl">Sergio Salgado</h1>
            <p className="text-white font-semibold text-lg  m-3">
              Desarrollador Web 
            </p>
            <Image
            className={styles.imageCircleCrop}
            src="/perfil-raw-circle.jpg"
            width={240}
            height={200}
          />
            <p className="text-white font-semibold text-md text-center m-3">
              Tienes algun proyecto en el que necesitas un desarrollador  
              React Js/ Next Js?.  Trabajemos Juntos!
            </p>
          </div>
          
        </div>
        <div className="flex justify-center flex-col align-center h-44">
          <h2 className="m-0 p-0 text-xl text-white text-center underline">Contactame en mis Redes</h2>
          <div className="flex  justify-center m-2">
            <a
              href="https://www.linkedin.com/in/sergio-pablo-salgado/"
              target="_blank"
            >
              <i
                className="fab fa-linkedin fa-2x text-white cursor-pointer hover:text-gray-300"
                style={{ margin: "0 8px" }}
              ></i>
            </a>

            <a href="https://github.com/Pablosal" target="_blank">
              <i
                className="fab fa-github fa-2x cursor-pointer text-black hover:text-gray-900"
                style={{ margin: "0 8px" }}
              ></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
