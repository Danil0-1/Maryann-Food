const platosData = [
    {
      nombre: "Paella",
      tipo: "Principal",
      tiempo_preparacion_min: 45,
      difucultad: "Media",
      descripcion: "Arroz típico de Valencia con mariscos, pollo y vegetales.",
      ingredientes: "Arroz, mariscos, pollo, vegetales, azafrán",
      imagen: "./Img/paella.jpg",
      ganadores: [
        { temporada: 2023, piloto: "Carlos Sainz" },
        { temporada: 2022, piloto: "Fernando Alonso" }
      ]
    },
    {
      nombre: "Arepa",
      tipo: "Desayuno",
      tiempo_preparacion_min: 20,
      difucultad: "Fácil",
      descripcion: "Plato típico de maíz, popular en Colombia y Venezuela.",
      ingredientes: "Harina de maíz, queso, mantequilla",
      imagen: "./Img/arepa.jpg",
      ganadores: []
    }
  ];
  
  export default platosData;
  