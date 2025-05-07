import './platos-container.js';

export const platosView = [
    {
        nombre: "Hamburguesa BBQ con Yuca",
        tipo: "Principal",
        tiempo_preparacion_min: 40,
        dificultad: "Media",
        descripcion: "Hamburguesa artesanal con carne jugosa, queso, vegetales frescos y salsa BBQ, acompañada de bastones de yuca crocante.",
        ingredientes: ["Pan artesanal", "Carne de res", "Lechuga", "Tomate", "Cebolla", "Queso", "Yuca", "Salsa BBQ"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/1XFLk1Dx/Plato-2.jpg"
    },
    {
        nombre: "Montaje Criollo con Guacamole",
        tipo: "Desayuno",
        tiempo_preparacion_min: 30,
        dificultad: "Fácil",
        descripcion: "Plato típico con huevo, arepa, carne desmechada, guacamole y toques de crema, ideal para empezar el día con sabor local.",
        ingredientes: ["Huevo", "Arepa", "Carne desmechada", "Guacamole", "Crema", "Perejil"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/hGPRfwRx/Plato-3.jpg"
    },
    {
        nombre: "Pollo Glaseado con Manzana",
        tipo: "Principal",
        tiempo_preparacion_min: 45,
        dificultad: "Alta",
        descripcion: "Pechuga de pollo glaseada al horno sobre cama de manzanas caramelizadas y vegetales frescos.",
        ingredientes: ["Pechuga de pollo", "Manzana", "Zanahoria", "Verduras mixtas", "Glaseado dulce"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/wjLSfzgD/Plato-8.jpg"
    },
    {
        nombre: "Pasta con Vegetales y Pollo",
        tipo: "Principal",
        tiempo_preparacion_min: 35,
        dificultad: "Media",
        descripcion: "Deliciosa pasta en salsa blanca con trozos de pollo salteado y vegetales coloridos.",
        ingredientes: ["Pasta", "Pechuga de pollo", "Brócoli", "Pimentón", "Zanahoria", "Crema de leche"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/JnvfYzDc/Plato-1.jpg"
    },
    {
        nombre: "Tostada con Queso Cheddar y Tocineta",
        tipo: "Entrada",
        tiempo_preparacion_min: 20,
        dificultad: "Fácil",
        descripcion: "Pan tostado con salsa de queso cheddar fundido y tiras crujientes de tocineta.",
        ingredientes: ["Pan", "Queso cheddar", "Tocineta", "Salsa bechamel"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/NLhdmyyS/Plato-5.jpg"
    },
    {
        nombre: "Arroz Salteado con Verduras y Cerdo",
        tipo: "Principal",
        tiempo_preparacion_min: 30,
        dificultad: "Media",
        descripcion: "Arroz blanco salteado con trozos de cerdo, cebolla, pimentón y una reducción de tomate casera.",
        ingredientes: ["Arroz", "Cerdo", "Cebolla", "Pimentón", "Tomate", "Salsa soya"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/R0GpyV8J/Plato-7.jpg"
    },
    {
        nombre: "Fusilli en Salsa de Vegetales",
        tipo: "Principal",
        tiempo_preparacion_min: 30,
        dificultad: "Fácil",
        descripcion: "Fusilli cocinado en salsa suave de vegetales con un toque de queso y hierbas frescas.",
        ingredientes: ["Fusilli", "Zanahoria", "Brócoli", "Queso", "Hierbas", "Crema"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/0QQXs1RW/Plato-4.jpg"
    },
    {
        nombre: "Guiso de Fríjoles con Cerdo y Verduras",
        tipo: "Principal",
        tiempo_preparacion_min: 60,
        dificultad: "Alta",
        descripcion: "Tradicional guiso espeso de fríjoles con trozos de cerdo, papas y especias regionales.",
        ingredientes: ["Fríjoles", "Cerdo", "Papa", "Cebolla", "Ajo", "Laurel"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/Fs2MVz59/Plato-9.jpg"
    },
    {
        nombre: "Huevo Pochado sobre Pan con Emulsión",
        tipo: "Desayuno",
        tiempo_preparacion_min: 25,
        dificultad: "Media",
        descripcion: "Huevo pochado perfectamente cocido sobre pan rústico y acompañado de una suave emulsión de vegetales.",
        ingredientes: ["Huevo", "Pan", "Emulsión vegetal", "Especias", "Aceite de oliva"],
        Echo_por: "Maryann <3",
        imagen: "https://i.postimg.cc/mk1dP3r7/Plato-6.jpg"
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('platos-container');
    if (contenedor) {
      contenedor.setData(platosView);
    }
  });