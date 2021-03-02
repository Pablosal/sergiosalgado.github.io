import React, { useEffect } from "react";
import styles from "./ProjectDisplay.module.css";
import Image from "next/image";
const ProjectDisplay = ({ projecto }) => {
  useEffect(() => {
    console.log(projecto);
  }, [projecto]);
  return (
    <div className="rounded-lgh-full shadow-sm mt-3 ">
      <div className="flex justify-center items-center md:items-start md:flex-row flex-col">
        <div >
          {projecto.image ? (
            <Image
              width={1200}
              height={780}
              layout="intrinsic"
              src={projecto.image}
              alt={projecto.titulo}
            />
          ) : null}
        </div>
        <div>
          <div className="">
            {" "}
            <h1 className="text-center rounded-t-xl font-semibold text-xl m-0 p-0 ">
              {projecto.titulo}
            </h1>
            <p className="text-base text-justify text-center m-2">
              {projecto.descripcion}
            </p>
          </div>
          <div>
            <h1 className="text-center  rounded-t-xl font-semibold text-xl  m-0 p-0">
              Tecnologias
            </h1>
            <p className="text-base text-justify text-center m-2">
              {projecto.descripcionTecnologias}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 my-5 align-center w-full ">
        {projecto.tecnologias.map((t) => (
          <i className={t}></i>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={projecto.link}
          target="_blank"
          className=" animate-pulse bg-transparent border-4 border-green-500 p-2 hover:bg-green-500 hover:border-none hover:color-white font-semibold hover:text-white uppercase m-5"
        >
          ir Al Projecto
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
