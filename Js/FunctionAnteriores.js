
// Mostrar Catalogo

function mostrarCatalogoForEach() {
    console.log(`Productos disponibles: `)
    productos.forEach(
        (ropaMostrar) => {
            console.log(ropaMostrar.nombre, ropaMostrar.color, ropaMostrar.talle, ropaMostrar.precio)
        }
    )
}

// Buscar Producto

function buscarProductoNombre() {
    let ProductoNombre = prompt(`Ingrese el nombre del producto que buscas:`)
    let resultado = productos.filter(
        (ropa) => ropa.nombre.includes(`${ProductoNombre.toLowerCase()}`)
    )
    if (resultado == undefined) {
        console.log(`${ProductoNombre} no está en stock`)

    } else {
        console.log(resultado)
    }
}

// Preguntar Producto por color y nombre

function buscarProductoColorYnombre(tip) {
    console.log(tip)
    let preguntarColor = prompt(`Ingresa un color para ver los productos disponibles de ese color:`)
    let resultado = productos.filter(
        (ropa) => (ropa.color.includes(`${preguntarColor.toLowerCase()}`) && ropa.nombre.includes(tip))
    )

    if (resultado == undefined) {
        console.log(`${preguntarColor} no esta disponible`)
    }
    else {
        console.log(resultado)
    }
}

// Mostrar Producto

function mostrarProducto(color, talle) {
    alert(`Estas buscando un producto ${color} y talle ${talle}`)
}

// Preguntar Producto por talle y nombre

function buscarProductoTalleYnombre(tip) {
    console.log(tip)
    let preguntarColor = prompt(`Ingresa un color para ver los productos disponibles de ese talle:`)
    let resultado = productos.filter(
        (ropa) => (ropa.talle.includes(`${preguntarColor.toLowerCase()}`) && ropa.nombre.includes(tip))
    )

    if (resultado == undefined) {
        console.log(`${preguntarColor} no esta disponible`)
    }
    else {
        console.log(resultado)
    }
}


function preguntarProducto(tip) {
    console.log(tip)
    let preguntarColor = prompt(`Estas buscando un color en especial. Ingrese si para buscar o no para buscar por talle`)
        (preguntarColor.toLowerCase() == `si`) ? buscarProductoColorYnombre(tip) : buscarProductoTalleYnombre(tip)


    /* if (preguntarColor.toLowerCase() == `si`) {
        buscarProductoColorYnombre(tip)
    }
    else {
        buscarProductoTalleYnombre(tip)
    } */

}

function preguntarAccesorio() {

    let accesorio = prompt(`Estas buscando un producto en especial. Ingrese Si o No.`)
    if (accesorio.toLowerCase() == `si`) {
        let accesorioIngresado = prompt(`Ingrese el producto que deseas.`);
        alert(`No tenemos ${accesorioIngresado}`)

    }


}


// Mostrar remeras

function mostrarRopaRemeras(array) {
    if (window.location.href.includes(`remera`)) {
        let productosRemeras = document.getElementById(`remerasMercado`)
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="btnCarrito" id="${ropa.id}">Agregar al carrito</button>
        </div>`
            productosRemeras.appendChild(nuevoDivRopa)
            let agregarBtn = document.getElementsByClassName(`btnCarrito`)
            for (let i = 0; i < agregarBtn.length; i++) {
                //Evento para capturar
                agregarBtn[i].addEventListener("click", (e) => {
                    agregarAlCarrito(e.target.id)
                })
            }
        }
    }
}
mostrarRopaRemeras(remeras)