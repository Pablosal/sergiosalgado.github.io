import React from "react";
import Image from "next/image";
const ProjectDisplay = ({ projecto }) => {
  return (
    <div className="rounded-lgh-full shadow-sm mt-3  justify-self-center my-5">
      <div className="flex justify-center items-center md:items-start md:flex-row flex-col">
        <div className="mr-8">
          {projecto.image ? (
            <Image
              width={projecto.width}
              height={projecto.height}
              layout="intrinsic"
              src={projecto.image}
              alt={projecto.titulo}
            />
          ) : null}
        </div>
        <div className="w-80 mt-8">
          <div>
            {" "}
            <h1 className="text-center rounded-t-xl font-semibold text-xl m-0 p-0 ">
              {projecto.titulo}
            </h1>
            <p className="text-base text-justify m-2">{projecto.descripcion}</p>
          </div>
          <div>
            <h1 className="text-center  rounded-t-xl font-semibold text-xl  m-0 p-0">
              Tecnologias
            </h1>
            <p className="text-base text-justify m-2">
              {projecto.descripcionTecnologias}
            </p>
          </div>
          <div className="flex justify-center space-x-4 my-5 align-center w-full ">
            {projecto.tecnologias.map((t) => (
              <i className={t} key={t}></i>
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
      </div>
    </div>
  );
};

export default ProjectDisplay;
