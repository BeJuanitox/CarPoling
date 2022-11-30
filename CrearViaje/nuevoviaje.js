$(document).ready(() => {

  $('#back').click(() => {
    window.open("/Conductor/feedconductor.html", "_self");
  })

  $('#fecha').change(() => {
    if (!FechaActual()) {
      alert("La fecha u hora programada no puede ser inferior a la actual.")
      return false
    }

  });

  let numpuesto = 0;

  $('#puesto1').click(() => {
    numpuesto = 1;
  })

  $('#puesto2').click(() => {
    numpuesto = 2;
  })

  $('#puesto3').click(() => {
    numpuesto = 3;
  })

  $('#puesto4').click(() => {
    numpuesto = 4;
  })

  $('#saveviaje').click(() => {
    const puntopartida = $('#puntopartida').val()
    const precio = $('#precio').val()
    const tyc = $('#tyc').val()    
    const fechaviaje = $('#fechaviaje').val();

    sessionStorage.setItem("puntopartida", puntopartida);
    sessionStorage.setItem("fechaviaje", fechaviaje);
    sessionStorage.setItem("precio", precio);
    sessionStorage.setItem("tyc", tyc);
    sessionStorage.setItem("numpuesto", numpuesto);

    $("#puntopartida").val("");
    $("#fechaviaje").val("");
    $("#precio").val("");
    $("#tyc").val("");
    $("#numpuesto").val("");

    window.open("/Conductor/feedconductor.html", "_self"); //Crear viaje

  })

})

function solonumeros(e) {

  key = e.keyCode || e.which;

  teclado = String.fromCharCode(key);

  numeros = "0123456789";

  especiales = "8 - 37 - 38 - 46";

  teclado_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      teclado_especial = true;
    }
  }

  if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
    return false;
  }

}

FechaActual = () => {
  const actual = new Date();
  const anioActual = parseInt(actual.getFullYear());
  const mesActual = parseInt(actual.getMonth()) + 1;
  const diaActual = parseInt(actual.getDate());
  const horaActual = parseInt(actual.getHours());
  const minutoActual = parseInt(actual.getMinutes());

  const anioProgramado = parseInt(String($('#fecha').val()).substring(0, 4));
  const mesProgramado = parseInt(String($('#fecha').val()).substring(5, 7));
  const diaProgramado = parseInt(String($('#fecha').val()).substring(8, 10));
  const horaProgramado = parseInt(String($('#fecha').val()).substring(11, 13));
  const minutoProgramado = parseInt(String($('#fecha').val()).substring(14, 16));

  if (anioActual == anioProgramado && mesActual == mesProgramado && diaActual == diaProgramado) {
    if (horaActual <= horaProgramado) {
      return true
    } else {
      return false
    }
  } else if (anioActual > anioProgramado) {
    return false
  } else if (anioActual == anioProgramado && mesActual > mesProgramado) {
    return false
  } else if (anioActual == anioProgramado && mesActual == mesProgramado && diaActual > diaProgramado) {
    return false
  } else {
    return true
  }

}

// const anioProgramado = parseInt(String($('#fecha').val()).substring(0, 4));
// const mesProgramado = parseInt(String($('#fecha').val()).substring(5, 7));
// const diaProgramado = parseInt(String($('#fecha').val()).substring(8, 10));
// const horaProgramado = parseInt(String($('#fecha').val()).substring(11, 13));
// const minutoProgramado = parseInt(String($('#fecha').val()).substring(14, 16));
// const fechaProgramada = anioProgramado + "/" + mesProgramado + "/" + diaProgramado + " - " + horaProgramado + ":" + minutoProgramado;
// console.log(fechaProgramada);