$(document).ready(() => {

  let routes = [];

  if ('travelList' in sessionStorage) {
    routes = JSON.parse(sessionStorage.getItem('travelList'));
  }

  const contact = sessionStorage.getItem('celular');

  let Card = document.getElementById("viajes-template");

  routes.map((routesF) => {
    Card.innerHTML += `
    <div class="card">
      <div class="info">
        <div class="encabezado">
          <div class="infoconductor">
            <img class="imagenconductor" src="../img/User.png" alt="Perfil">
            <h1 class="nombre">${routesF.name}</h1>
          </div>
          <div class="destinoviaje">
            <h2>${routesF.date}</h2>
            <h2 class="destinos"> <b>Desde: </b>${routesF.from}</h2>
            <p class="precio"> <b class="moneda">$</b>${routesF.price}<b> | </b>Puestos disponibles: <b>${routes.availableSeats}</b>.</p>
          </div>
        </div>
        <h1 class="masinfo">Más información</h1>
        <div class="containermasinfo">
            <p class="infocarro"><b>${routesF.carInfo.brand}</b></p>
            <p class="infocarro"><b>Modelo: </b>${routesF.carInfo.model}</p>
            <p class="infocarro"><b>Placa: </b>${routesF.carInfo.idCar}</p>
            <p class="infocarro"><b>Color: </b>${routesF.carInfo.color}</p>
        </div>
        <p class="condiciones"> <b>Condiciones: </b>${routesF.rules}</p>
        <div class="contacto">
            <div class="btnContacto" id="contactoDinamico">
              <i class="fa-brands fa-whatsapp iconwsp"></i>
              <i class="titulocontacto">Contacto</i>
            </div>
        </div>
      </div>
    </div>
  `;


  })

  $('#btnContacto').click(() => {

    window.open("https://wa.link/6ovyoe", "_blank");

  })

  $('#contactoDinamico').click(() => {

    window.open("https://wa.me/+57"+contact, "_blank");

  })

})
