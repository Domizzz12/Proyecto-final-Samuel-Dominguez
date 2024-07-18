const productos = [

    {
        id:"abrigo-01",
        titulo:"Abrigo 01",
        imagen: "./Img/Abrigos/01Abrigos.jpeg",
        cantegoria:{ 
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio:1000
    },
    {
        id:"abrigo-02",
        titulo:"Abrigo 02",
        imagen: "./Img/Abrigos/01Abrigos.jpeg",
        cantegoria:{ 
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio:1000
    },
    {
        id:"abrigo-03",
        titulo:"Abrigo 03",
        imagen: "./Img/Abrigos/01Abrigos.jpeg",
        cantegoria:{ 
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio:1000
    },
    {
        id:"abrigo-04",
        titulo:"Abrigo 04",
        imagen: "./Img/Abrigos/01Abrigos.jpeg",
        cantegoria:{ 
            nombre:"Abrigos",
            id:"abrigos"
        },
        precio:1000
    },
    {
        id: "pantalones-01",
        titulo: "Pantalones 01",
        imagen: "./Img/Pantalones/01Pantalones.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 1000
    },
    {
        id: "pantalones-02",
        titulo: "Pantalones 02",
        imagen: "./Img/Pantalones/01Pantalones.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 1000
    },
    {
        id: "pantalones-03",
        titulo: "Pantalones 03",
        imagen: "./Img/Pantalones/01Pantalones.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 1000
    },
    {
        id: "pantalones-04",
        titulo: "Pantalones 04",
        imagen: "./Img/Pantalones/01Pantalones.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        "precio": 1000
    },
    {
        id: "zapatos-01",
        titulo: "Zapatos 01",
        imagen: "./Img/Zapatos/01Zapatos.jpeg",
        categoria: {
            nombre: "Zapatos",
            id: "zapatos"
        },
        "precio": 1000
    },
    {
        id: "zapatos-02",
        titulo: "Zapatos 02",
        imagen: "./Img/Zapatos/01Zapatos.jpeg",
        categoria: {
            nombre: "Zapatos",
            id: "zapatos"
        },
        "precio": 1000
    },
    {
        id: "zapatos-03",
        titulo: "Zapatos 03",
        imagen: "./Img/Zapatos/01Zapatos.jpeg",
        categoria: {
            nombre: "Zapatos",
            id: "zapatos"
        },
        "precio": 1000
    },
    {
        id: "zapatos-04",
        titulo: "Zapatos 04",
        imagen: "./Img/Zapatos/01Zapatos.jpeg",
        categoria: {
            nombre: "Zapatos",
            id: "zapatos"
        },
        "precio": 1000
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");

const botonesCategorias = document.querySelectorAll(".boton-categoria")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div)

    })

}
cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            cargarProductos(productos)
        }

    })
});

