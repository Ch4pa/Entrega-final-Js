// DOM 

let productosCatalogo = document.getElementById("productos")
let iniciarS = document.getElementsByClassName(`iniciarSesion`)
let crearSesion = document.querySelector(`.crearSesion`)
let busqueda = document.getElementById(`searchBox`)
let coincidencia = document.getElementById("coincidencia")
let productosTotal = document.getElementById(`inicioMercado`)

// Mostrar ropa completa

function mostrarRopa(array) {
    let coincidencia = document.getElementById("coincidencia")
    coincidencia.innerHTML = ""
    for (let ropa of array) {
        let nuevoDivRopa = document.createElement("div")
        nuevoDivRopa.innerHTML =
            `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="btnCarritoEstilo" id="btnCarrito${ropa.id}">Agregar al carrito</button>
        </div>`
        coincidencia.appendChild(nuevoDivRopa)
        let agregarBtn = document.querySelector(`#btnCarrito${ropa.id}`)
        agregarBtn.addEventListener("click", () => {
            agregarAlCarrito(ropa)
            Toastify({
                text: "Producto Agregado",
                className: "info",
                duration: 2000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        })
    }
}
mostrarRopa(productos)


// Funcion buscar

function buscarProducto(buscado, array) {

    let busquedaArray = array.filter(
        (ropa) => ropa.etiquetas.toLowerCase().includes(buscado.toLowerCase())
    )
    if (busquedaArray.length == 0) {
        coincidencia.innerHTML = "No hay coincidencias";
        mostrarRopa(busquedaArray);
    }
    else {
        coincidencia.innerHTML = "";
        productosTotal.innerHTML = ""
        mostrarRopa(busquedaArray)
    }
    console.log("Ropa", busquedaArray)

}

// Agregar Carrito

let ProductoCarrito

if (localStorage.getItem(`carrito`)) {
    ProductoCarrito = JSON.parse(localStorage.getItem("carrito"))
}
else {
    ProductoCarrito = []
    localStorage.setItem("carrito", ProductoCarrito)
}

//Funciones

function agregarAlCarrito(ropa) {
    ProductoCarrito.push(ropa)
    localStorage.setItem("carrito", JSON.stringify(ProductoCarrito))
}


function mostrarRopaCarrito(ProductoCarrito) {
    let ropaCarrito = document.getElementById("modal-bodyCarrito")
    ropaCarrito.innerHTML = ""
    for (let ropa of ProductoCarrito){
        let nuevoDivRopa = document.createElement("div")
        nuevoDivRopa.innerHTML =
            `<div class="productosCarrito">
            <div class="divCarrito">
            <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropaCarrito"></a>
            </div>
            <div class="divCarritoText"> 
            <h3 class="productoTextCarrito">${ropa.nombre}</h3>
            <span itemprop="price" class="itemPrecioCarrito">${ropa.precio}</span>
            </div>
        </div>`
        ropaCarrito.appendChild(nuevoDivRopa)
    }
}




// Finalizar compra

function finalizarCompra() {
    
    ProductoCarrito = []
    localStorage.removeItem("carrito")

}


// EVENTOS

busqueda.addEventListener("input", () => {
    buscarProducto(busqueda.value.toLowerCase(), productos)
})


crearSesion.addEventListener("click", () => {

})

// Eventos

btnFinalizarCompra.addEventListener("click", () => {
    finalizarCompra(ProductoCarrito)
    Toastify({
        text: "Compra Finalizada",
        className: "info",
        duration: 2000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
})

carritoDeCompra.addEventListener("click", ()=>{
    mostrarRopaCarrito(JSON.parse(localStorage.getItem("carrito")))
})


// Json 

localStorage.setItem("misProductos", JSON.stringify(productos))
let getProductos = JSON.parse(localStorage.getItem("misProductos"))

