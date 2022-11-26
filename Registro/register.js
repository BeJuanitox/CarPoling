$(document).ready(function () {

  $(`#enviar`).click(function () {
    const nombre = $(`#nombre`).val()
    const apellido = $(`#apellido`).val()
    const email = $(`#email`).val()
    const carrera = $(`#carrera`).val()
    const celular = $(`#celular`).val()
    const password = $(`#password`).val()
    const rpassword = $(`#rpassword`).val()


    if (nombre == "" || apellido == "" || email == "" || carrera == "" || celular == "" || password == "" || rpassword == "") {
      alert("Dejaste un campo vacio.")
    } else if (password != rpassword) {
      alert("Las contraseñas no coinciden");
    } else if (!validarCorreo(email)) {
      alert("Por favor, ingrese un correo valido.")
      return false;
    } else {

      window.open("/Feed/feed.html", "_self");

    }

  })

})

//Validaciones correos
function validarCorreo(email) {
  var tester = /^([a-zA-Z0-9_.+-])+\@(([elpoli]+)\.([edu]+)\.)([co])+$/;
  return tester.test(email);
}

//Validación letras (Nombre y Apellido)
function sololetras(e) {
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
