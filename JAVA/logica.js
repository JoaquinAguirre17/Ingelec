console.table(productos);
let carrito = [];



const contenedorProds = document.getElementById('misprods');
const tablaBody = document.getElementById('tablabody');

//DOM
function renderizarProds(listaProds) {
    for (const prod of listaProds) {
        contenedorProds.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${prod.foto} alt=${prod.nombre}/>
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$ ${prod.precio}</p>
                        <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                    </div>
            </div>
        `;
    }

    //eventos
    let botones = document.getElementsByClassName('compra');//coleccion de nodos
    for (const boton of botones) {
        //opcion 1 - addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = listaProds.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            //cargar producto encontrado al carro
            agregarAlCarrito(prodACarro);
        });

        
    }
}

renderizarProds(productos);


function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    alert(`Agregaste ${producto.nombre} al carro 🛒`);
    //agregar el producto a la tabla
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    //calcular el total gastado hasta el momento
   
    total.innerHTML += `
        <tr>
            <td>${producto.precio}</td>
        </tr>
    `;

}




