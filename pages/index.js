import Head from "next/head";
import { useEffect } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import Sidebar from "../components/Sidebar";
export default function Home({ data }) {

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

Home.getInitialProps= async (ctx)=> {
  const res = await fetch("http://localhost:3000/api/proyectos");
  const data = await res.json();
  return {
    stars: data
  };
}
