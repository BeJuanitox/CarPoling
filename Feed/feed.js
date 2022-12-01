let travelList = [];

travelList = JSON.parse(sessionStorage.getItem('travelList'));

const cardsContainer = document.getElementById('cards');

travelList.forEach((travel) => {
  // Header
  let imgOne = document.createElement('img');
  imgOne.src = travel.img;
  imgOne.classList.add('imagenconductor');
  imgOne.alt = 'Perfil';
  
  let hName = document.createElement('h1');
  hName.classList.add('nombre');
  hName.innerHTML = travel.name;
  
  let divHeader = document.createElement('div');
  divHeader.classList.add('infoconductor');
  
  divHeader.appendChild(imgOne);
  divHeader.appendChild(hName);
  
  // Header 2
  let hFrom = document.createElement('h2');
  hFrom.innerHTML = `Desde: ${travel.from}`;
  hFrom.classList.add('destinos');
  
  let pRules = document.createElement('p');
  pRules.classList.add('condiciones');
  pRules.innerHTML = travel.rules;
  
  let pPrice = document.createElement('p');
  pPrice.classList.add('precio');
  pRules.innerHTML = `$ ${travel.price} | Puestos disponibles: ${travel.availableSeats}`;

  let divHeaderTwo = document.createElement('div');
  divHeaderTwo.classList.add('destinoviaje');

  divHeaderTwo.appendChild(hFrom);
  divHeaderTwo.appendChild(pRules);
  divHeaderTwo.appendChild(pPrice);

  let divHeaderTop = document.createElement('div');
  divHeaderTop.classList.add('encabezado');
  
  divHeaderTop.appendChild(divHeader);
  divHeaderTop.appendChild(divHeaderTwo);
  
  // Info
  let hInfo = document.createElement('h1');
  hInfo.classList.add('masinfo');
  hInfo.innerHTML = 'Más información';

  // Body
  let pCar = document.createElement('p');
  pCar.innerHTML = travel.carInfo.brand;

  let pCarOne = document.createElement('p');
  pCarOne.innerHTML = travel.carInfo.model;

  let pCarTwo = document.createElement('p');
  pCarTwo.innerHTML = travel.carInfo.idCar;

  let pCarThree = document.createElement('p');
  pCarThree.innerHTML = travel.carInfo.color;

  let divInfoCar = document.createElement('div');
  divInfoCar.classList.add('infovehiculo');

  divInfoCar.appendChild(pCar);
  divInfoCar.appendChild(pCarOne);
  divInfoCar.appendChild(pCarTwo);
  divInfoCar.appendChild(pCarThree);

  let imgFrom = document.createElement('img');
  imgFrom.src = travel.fromImg;
  imgFrom.classList.add('parque');
  imgFrom.alt = travel.from;

  let divInfoCarTwo = document.createElement('div');
  divInfoCarTwo.classList.add('containermasinfo');

  divInfoCarTwo.appendChild(divInfoCar);
  divInfoCarTwo.appendChild(imgFrom);

  // Footer
  let iWasap = document.createElement('i');
  iWasap.classList.add('fa-brands');
  iWasap.classList.add('fa-whatsapp');
  iWasap.classList.add('iconwsp');
  
  let iText = document.createElement('i');
  iText.classList.add('titulocontacto');
  iText.innerHTML = 'Contacto';

  let divBtn = document.createElement('div');
  divBtn.classList.add('btnContacto');
  divBtn.id = 'btnContacto';

  divBtn.appendChild(iWasap);
  divBtn.appendChild(iText);

  let divContact = document.createElement('div');
  divContact.classList.add('contacto');

  divContact.appendChild(divBtn);
  
  // Final
  let divCard = document.createElement('div');
  divCard.classList.add('card');

  divCard.appendChild(divHeaderTop);
  divCard.appendChild(hInfo);
  divCard.appendChild(divInfoCarTwo);
  divCard.appendChild(divContact);
  
  cardsContainer.appendChild(divCard);
});





$(document).ready(() => {

  $('#btnContacto').click(() => {

    window.open("https://wa.link/6ovyoe", "_blank");
    
  })

})