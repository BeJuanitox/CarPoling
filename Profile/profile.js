$(document).ready(() => {

  const nombre = sessionStorage.getItem("nombre");
  const apellido = sessionStorage.getItem("apellido");
  const email = sessionStorage.getItem("email");
  const carrera = sessionStorage.getItem("carrera");
  const celular = sessionStorage.getItem("celular");
  const vehiculo = sessionStorage.getItem("vehiculo");
  const tipovehiculo = sessionStorage.getItem("tipovehiculo");
  const nombrevehiculo = sessionStorage.getItem("nombrevehiculo");
  const modelo = sessionStorage.getItem("modelo");
  const colorvehiculo = sessionStorage.getItem("colorvehiculo");
  const placa = sessionStorage.getItem("placa");

  let modousuario = 1;

  $(`#conductor`).click(() => {
    modousuario = 2;
  })

  $(`#close`).click(() => {
    if (modousuario === 2) {
      window.open("../Conductor/feedconductor.html", "_self");
    } else {
      window.open("../Feed/feed.html", "_self");
    }

  })

  $(`#vehiculo`).change(() => {
    const vehiculo = $(`#vehiculo`).val()
    if (vehiculo === "si") {
      $(`#tipovehiculo`).removeAttr("disabled", "");
      $(`#nombrevehiculo`).removeAttr("disabled", "");
      $(`#modelo`).removeAttr("disabled", "");
      $(`#colorvehiculo`).removeAttr("disabled", "");
      $(`#placa`).removeAttr("disabled", "");

    } else {
      $(`#tipovehiculo`).attr("disabled", true);
      $(`#nombrevehiculo`).attr("disabled", true);
      $(`#modelo`).attr("disabled", true);
      $(`#colorvehiculo`).attr("disabled", true);
      $(`#placa`).attr("disabled", true);
    }
    
  })

  $("#nombre").val(nombre);
  $("#apellido").val(apellido);
  $("#email").val(email);
  $("#carrera").val(carrera);
  $("#celular").val(celular);
  $("#vehiculo").val(vehiculo);
  $("#tipovehiculo").val(tipovehiculo);
  $("#nombrevehiculo").val(nombrevehiculo);
  $("#modelo").val(modelo);
  $("#colorvehiculo").val(colorvehiculo);
  $("#placa").val(placa);

  $(`#save`).click(() => {

    const nombre = $(`#nombre`).val()
    const apellido = $(`#apellido`).val()
    const email = $(`#email`).val()
    const carrera = $(`#carrera`).val()
    const celular = $(`#celular`).val()
    const vehiculo = $(`#vehiculo`).val()
    const tipovehiculo = $(`#tipovehiculo`).val()
    const nombrevehiculo = $(`#nombrevehiculo`).val()
    const modelo = $(`#modelo`).val()
    const colorvehiculo = $(`#colorvehiculo`).val()
    const placa = $(`#placa`).val()

    if (nombre == "" || apellido == "" || email == "" || carrera == "" || celular == "") {
      alert("Dejaste un campo vacio.")
    } else if (!validarCorreo(email)) {
      alert("Por favor, ingrese un correo valido.")
      return false;
    } else {

      if (typeof (Storage) != `undefined`) {

        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("apellido", apellido);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("carrera", carrera);
        sessionStorage.setItem("celular", celular);
        sessionStorage.setItem("vehiculo", vehiculo);
        sessionStorage.setItem("tipovehiculo", tipovehiculo);
        sessionStorage.setItem("nombrevehiculo", nombrevehiculo);
        sessionStorage.setItem("modelo", modelo);
        sessionStorage.setItem("colorvehiculo", colorvehiculo);
        sessionStorage.setItem("placa", placa);

        $("#name").val("");
        $("#apellido").val("");
        $("#email").val("");
        $("#carrera").val("");
        $("#celular").val("");
        $("#vehiculo").val("");
        $("#tipovehiculo").val("");
        $("#nombrevehiculo").val("");
        $("#modelo").val("");
        $("#colorvehiculo").val("");
        $("#placa").val("");

      } else {
        alert("No es compatible en este navegador.")
      }

    }

    document.location.href = "profile.html";

  })

})

//Validaciones correos
function validarCorreo(email) {
  var tester = /^([a-zA-Z0-9_.+-])+\@(([elpoli]+)\.([edu]+)\.)([co])+$/;
  return tester.test(email);
}

//Validación letras (Nombre y Apellido)
function sololetras(e) {
  console.log(e);
  key = e.keyCode || e.which;

  teclado = String.fromCharCode(key).toLowerCase();

  letras = " abcdefghijklmnñopqrstuvwxyz";

  especiales = "8 - 37 - 38 - 46 - 164";

  teclado_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      teclado_especial = true; break;
    }
  }

  if (letras.indexOf(teclado) == -1 && !teclado_especial) {
    return false;
  }
}

//Validar numeros
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
