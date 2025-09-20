const productos = [
    { nombre: "Laptop", 
      precio: 12000 },

    { nombre: "Mouse", 
      precio: 250 },

    { nombre: "Teclado",
      precio: 750 },

    { nombre: "Monitor", 
        precio: 3000 }
];

let resultados = productos.filter(productos => productos.precio > 1000);

resultados = resultados.map(resultados => resultados.nombre);

console.log("Productos con precio mayor a 1000");
console.log(resultados)

