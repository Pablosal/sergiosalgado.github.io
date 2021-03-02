import Head from "next/head";
import { useEffect } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import Sidebar from "../components/Sidebar";
export default function Home() {
const data = [
  {
    id: 0,
    titulo: "Obituario Virtual",
    image: "/images/obituario.png",

    descripcion:
      "Creada con firebase y react utilizando un firestore como base de datos NoSQL,permitiendo filtrar los casos segun el dia de la semana. Con la capacidad de distintas rutas mediante react-router-dom",
    link: "https://epic-pike-27cd37.netlify.app/",
    descripcionTecnologias:
      "Firebase Firestore, react-router-dom para la conexion entre paginas y Context API para la manipulacion del estado.",
    tecnologias: [
      "fab fa-react fa-3x text-blue-500",
      "fab fa-js-square fa-3x text-yellow-500",
    ],
  },
  {
    id: 1,
    titulo: "Aplicacion de Muestra de Proovedores de Frutos Secos ",
    image: "/images/proov.png",
    descripcionTecnologias:
      "Firebase Auth, Firestore, Storage, Elementos integrados de NextJs como Router, Images y Link ",

    descripcion:
      "creada en Next JS usando la Context API, utilizando contenido estatico, y renderizado desde el servidor, con autenticación en Firebase, y CRUD con firestore. ",
    link: "https://proovedores-next.vercel.app/",
    tecnologias: [
      "fab fa-react fa-3x text-blue-500",
      "fab fa-js-square fa-3x text-yellow-500",
    ],
  },
];

  return (
    <div>
      <Head>
        <title>Programador React JS / Next JS</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      <main className="grid grid-cols-5">
        <Sidebar />
        <div className="md:col-start-2 md:col-end-6  col-start-1 col-end-6">
          <h2 className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center font-semibold text-3xl full text-white p-4 uppercase">Proyectos</h2>
          <div className="flex flex-col align-center justify-center ">
            {data.map((dato) => (
              <ProjectDisplay key={dato.id} projecto={dato}></ProjectDisplay>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


