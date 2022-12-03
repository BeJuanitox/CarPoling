$(document).ready(() => { 

  $('#publicaranuncio').click(() => {
    
    const adnombreusuario = sessionStorage.getItem("nombre");
    const admensajeuser = $('#admensajeescrito').val()
    const adnumerousuario = sessionStorage.getItem("celular");

    let adList = [
      {
      adimg: '../img/User.png',
      adname: adnombreusuario,
      message: admensajeuser,
      adcontact: adnumerousuario
      }
    ];
  
    let adcad = document.getElementById("anuncio-template");
  
    adList.map((x) => {
      adcad.innerHTML += `
        <div class="cardanuncio">
        <div class="encabezado">
          <img class="imagenusuario" src="${x.adimg}" alt="Perfil">
          <h1 class="nombre">${x.adname}</h1>
        </div>
        <div class="mensaje">
          <p>${x.message}</p>
        </div>
        <div class="contacto">
          <div class="btnContacto">
            <i class="fa-brands fa-whatsapp iconwsp"></i>
            <i class="titulocontacto">${x.adcontact}</i>
          </div>
        </div>
      </div>
      `;
    })

  })

})
