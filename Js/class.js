let tipo
let btnFinalizarCompra = document.getElementById(`botonFinalizarCompra`)
let carritoDeCompra = document.getElementById("botonCarrito")

// Class Constructor

class Ropa {
    constructor(id, etiquetas, nombre, talle, precio, imagen) {
            this.id = id,
            this.etiquetas = etiquetas,
            this.nombre = nombre,
            this.talle = talle,
            this.precio = precio,
            this.imagen = imagen
    }
    mostrarInfo() {
        console.log(`${this.nombre}, ${this.color}, ${this.talle}, ${this.precio}, ${this.imagen}`)
    }
}

// Crear Productos

const buzo1 = new Ropa("1", "buzo buzos negro", "buzo Black", "M", "$5000", `../Assets/imagenes/buzo2.png`);
const buzo2 = new Ropa("2", "buzo buzos gris", "buzo Grey", "M", "$5000", "../Assets/imagenes/buzo-gris.png");
const buzo3 = new Ropa("3", "buzo buzos gris y negro", "buzo Monitor", "M", "$5000", "../Assets/imagenes/buzo3.png");
const buzo4 = new Ropa("4", "buzo buzos negro", "buzo Meteorite", "M", "$5000", "../Assets/imagenes/buzo4.png");
const buzo5 = new Ropa("5", "buzo buzos negro", "buzo BZ", "M", "$5000", "../Assets/imagenes/buzo5.png");
const buzo6 = new Ropa("6", "buzo buzos negro", "buzo PQ", "M", "$5000", "../Assets/imagenes/buzo6.png");
const remera1 = new Ropa("7", "remera  remeras  blanca blanco", "remera lf", "M", `$5000`, "../Assets/imagenes/Remera1.png");
const remera2 = new Ropa("8", "remera  remeras negro  negra", "remera RT", "M", `$5000`, "../Assets/imagenes/Remera.png");
const remera3 = new Ropa("9", "remera remeras blanca blanco", "remera ST", "M", `$5000`, "../Assets/imagenes/Remera3.png");
const remera4 = new Ropa("10", "remera remeras negro negra", "remera WV", "M", `$5000`, "../Assets/imagenes/remeraAurora-removebg-preview.png");
const remera5 = new Ropa("11", "remera remeras blanca blanco", "remera NB", "M", `$5000`, "../Assets/imagenes/BlancaEnvyCirculo.png");
const remera6 = new Ropa("12", "remera remeras negro negra", "remera JK", "M", `$5000`, "../Assets/imagenes/Remera-Negra-logomedio.png")

const productos = [buzo1, remera1, buzo2, remera2, buzo3, remera3, remera4, buzo4, remera5, buzo5, remera6, buzo6]
const remeras = [...productos.filter((producto) => producto.nombre.includes(`remera`))]
const buzos = [...productos.filter((producto) => producto.nombre.includes(`buzo`))]







