$(document).ready(() => {

  $('#crear').click(() => {
    window.open("../CrearViaje/nuevoviaje.html", "_self");
  })
  
  let myRoutes = [];

  if ('travelList' in sessionStorage) {
    myRoutes = JSON.parse(sessionStorage.getItem('travelList'));
  }

  const contact = sessionStorage.getItem('celular');

  let myCard = document.getElementById("misviajes-template");

  myRoutes.map((routes) => {
    myCard.innerHTML += `
      <div class="card">
        <div class="info">
          <div class="encabezado">
            <div class="infoconductor">
              <img class="imagenconductor" src="../img/User.png" alt="Perfil">
              <h1 class="nombre">${routes.name}</h1>
            </div>
            <div class="destinoviaje">
              <h2>${routes.date}</h2>
              <h2 class="destinos"> <b>Desde: </b>${routes.from}</h2>
              <p class="precio"> <b class="moneda">$</b>${routes.price}<b> | </b>Puestos disponibles: <b>${routes.availableSeats}</b>.</p>
            </div>
          </div>
          <h1 class="masinfo">Más información</h1>
          <div class="containermasinfo">
              <p class="infocarro"><b>${routes.carInfo.brand}</b></p>
              <p class="infocarro"><b>Modelo: </b>${routes.carInfo.model}</p>
              <p class="infocarro"><b>Placa: </b>${routes.carInfo.idCar}</p>
              <p class="infocarro"><b>Color: </b>${routes.carInfo.color}</p>
          </div>
          <p class="condiciones"> <b>Condiciones: </b>${routes.rules}</p>
          <div class="contacto">
            <div class="btnContacto" id="contactoDinamico">
              <i class="fa-brands fa-whatsapp iconwsp"></i>
              <i class="titulocontacto">Contacto</i>
            </div>
          </div>
        </div>
      </div>
    `;

    $('#contactoDinamico').click(() => {

      window.open("https://wa.me/+57"+contact, "_blank");
  
    })

  })

})