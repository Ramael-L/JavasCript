
const ventas = require("./datos.js");

console.log("Cantidad de registros:", ventas.length);

console.log("Primera venta:", ventas[0]);

console.log("Última venta:", ventas[ventas.length - 1]);

console.log("Producto de posición 4:", ventas[4].producto);

console.table(ventas);
