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

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};
