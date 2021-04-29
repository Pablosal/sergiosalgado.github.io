import Head from "next/head";
import ProjectDisplay from "../components/ProjectDisplay";
import Sidebar from "../components/Sidebar";
export default function Home() {
  const data = [
    {
      id: "10a8sdj9sadj9asjd9sad",
      titulo: "Aplicacion de Muestra de Proovedores de Frutos Secos ",
      image: "/images/proovmobile.jpg",
      descripcionTecnologias:
        "Firebase Auth, Firestore, Storage, Elementos integrados de NextJs como Router, Images y Link ",
      height: 672,
      width: 340,
      descripcion:
        "creada en Next JS usando la Context API, utilizando contenido estatico, y renderizado desde el servidor, con autenticación en Firebase, y CRUD con firestore. ",
      link: "https://proovedores-next.vercel.app/",
      tecnologias: [
        "fab fa-react fa-3x text-blue-500",
        "fab fa-js-square fa-3x text-yellow-500",
      ],
    },
    {
      id: "0as9dj0asdj9as8dj0asd2",
      titulo: "Paigina estatica estilizada desde Figma ",
      image: "/images/becoolmobile.jpg",
      descripcionTecnologias:
        "Styled components utilizando una guia de estilos como theme",
      height: 672,
      width: 340,
      descripcion:
        "Creada en React JS, utilizando styled components para manejar lo responsive, con un acercamiento mobile first y context API para manejar funciones",
      link: "https://proovedores-next.vercel.app/",
      tecnologias: [
        "fab fa-react fa-3x text-blue-500",
        "fab fa-js-square fa-3x text-yellow-500",
      ],
    },
    {
      id: "01uj29duj2d2d",
      titulo: "Obituario Virtual",
      image: "/images/obituario-mobile.jpg",
      height: 672,
      width: 340,
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
      <main className="md:grid md:grid-cols-4 flex flex-col">
        <Sidebar />
        <div className="flex flex-col col-start-2 col-end-5 justify-center justify-self-center">
          {data.map((elemento) => (
            <ProjectDisplay key={elemento.id} projecto={elemento} />
          ))}
        </div>
      </main>
    </div>
  );
}
