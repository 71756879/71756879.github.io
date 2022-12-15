const stockProductos = [
  {
    id: 1,
    nombre: "The Exorcist",
    cantidad: 1,
    desc: "Juego terror, niveles dificiles",
    precio: 220,
    img: "/img-accion/exorcist.jpg",
  },
  {
    id: 2,
    nombre: "Ghost Of Tushima",
    cantidad: 1,
    desc: "Luchas con los mejores graficos",
    precio: 200,
    img: "/img-accion/ghost.jpg",
  },
  {
    id: 3,
    nombre: "God of War: Ragnarök",
    cantidad: 1,
    desc: "Juego de acción, niveles dificiles",
    precio: 400,
    img: "/img-accion/god-of-war.jpg",
  },
  {
    id: 4,
    nombre: "Resident Evil - Biohazard",
    cantidad: 1,
    desc: "Serie de videojuegos de terror, niveles dificiles",
    precio: 300,
    img: "/img-accion/resident.jpg",
  },
  {
    id: 5,
    nombre: "FIFA 18",
    cantidad: 1,
    desc: "Videojuego de Fitbol, multiplataforma",
    precio: 200,
    img: "/img-accion/fifa18.jpg",
  },
  {
    id: 6,
    nombre: "Grand Theft Auto",
    cantidad: 1,
    desc: "videojuego de accion y aventura",
    precio: 99,
    img: "/img-accion/gta-v.jpg",
  },
  {
    id: 7,
    nombre: "War Thunder",
    cantidad: 1,
    desc: "Videojuego de Guerra y acción",
    precio: 250,
    img: "/img-accion/war-thunder.jpg",
  },
  {
    id: 8,
    nombre: "Call Of Duty",
    cantidad: 1,
    desc: "Dispara como nunca",
    precio: 200,
    img: "/img-accion/call.jpg",
  },
  {
    id: 9,
    nombre: "Spiderman",
    cantidad: 1,
    desc: "videojuego de serie y acción",
    precio: 250,
    img: "/img-accion/spiderman.jpg",
  },
  {
    id: 10,
    nombre: "Batman: Arkham Knight",
    cantidad: 1,
    desc: "videojuego de serie y acción",
    precio: 300,
    img: "/img-accion/batman.jpg",
  },
  {
    id: 11,
    nombre: "Crash Bandicoot",
    cantidad: 1,
    desc: "Aventura, Carreras, Mini juegos",
    precio: 200,
    img: "/img-accion/Crash-Bandicoot.jpg",
  },
  {
    id: 12,
    nombre: "The Show 20",
    cantidad: 1,
    desc: "Videojuego de Deporte",
    precio: 260,
    img: "/img-accion/theshow.jpg",
  },
  {
    id: 13,
    nombre: "Fornite",
    cantidad: 1,
    desc: "Juego plataformero, Battle Royale",
    precio: 99,
    img: "/img-accion/fornite.jpg",
  },
  {
    id: 14,
    nombre: "Sekiro: Shadows Die Twice",
    cantidad: 1,
    desc: "Juego de acción, niveles dificiles",
    precio: 300,
    img: "/img-accion/sekiro-portada.jpg",
  },
  {
    id: 15,
    nombre: "eFootball 2022",
    cantidad: 1,
    desc: "videojuego de futbol, multiplataforma",
    precio: 200,
    img: "/img-accion/2022.jpg",
  },
  {
    id: 16,
    nombre: "Bloodborne",
    cantidad: 1,
    desc: "Videojuego de acción, niveles dificiles",
    precio: 260,
    img: "/img-accion/bloodborne.jpg",
  },
  {
    id: 17,
    nombre: "Blasphemous",
    cantidad: 1,
    desc: "Juego de Metroidvania",
    precio: 350,
    img: "/img-accion/blash.jpg",
  },
  {
    id: 18,
    nombre: "Tom Clancy's Ghost Recon Wildlands",
    cantidad: 1,
    desc: "Juego acción y aventura",
    precio: 240,
    img: "/img-accion/GRW.jpg",
  },
  {
    id: 19,
    nombre: "NBA 2K14",
    cantidad: 1,
    desc: "Videojuego de deporte",
    precio: 200,
    img: "/img-accion/inba.jpg",
  },
  {
    id: 20,
    nombre: "Call of Duty: Warzone",
    cantidad: 1,
    desc: "videojuego de Guerra, Battle Royale",
    precio: 300,
    img: "/img-accion/call.jpg",
  },
  {
    id: 21,
    nombre: "Attack on Titan",
    cantidad: 1,
    desc: "Videojuego de serie anime, acción y aventura",
    precio: 300,
    img: "/img-accion/shingeki.jpg",
  },
  {
    id: 22,
    nombre: "Bloodstained: Ritual of the Night",
    cantidad: 1,
    desc: "Videojuego de acción de terror gótico de",
    precio: 220,
    img: "/img-accion/blood.jpg",
  },
  {
    id: 23,
    nombre: "Dark Souls III",
    cantidad: 1,
    desc: "videojuego de rol de acción",
    precio: 350,
    img: "/img-accion/dark.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }