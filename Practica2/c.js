const personas = [
{ nombre: "Ana", 
  edad: 22 },

{ nombre: "Luis", 
  edad: 35},

{ nombre: "María", 
  edad: 28 }
];

let resultado1 = personas.find(personas => personas.nombre == "Luis");
console.log("Personas con nombre Luis:");
console.log(resultado1);

console.log("")

console.log("Lista de nombres y edades")
personas.forEach(function(name, age) {
  console.log("Nombre: ", name, "Edad", age);
}, );

console.log("")

let resultado2 = personas.map( personas => personas.edad);
const sum = resultado2.reduce((accumulator, age) => accumulator + age);
console.log("Suma edades: " + sum); 