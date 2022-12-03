$(document).ready(() => {

  const emailsesion = sessionStorage.getItem("email");
  const passwordsesion = sessionStorage.getItem("password");

  $('#iniciar').click(() => {
    const emaillogin = $(`#emaillogin`).val()
    const passwordlogin = $(`#passwordlogin`).val()

    console.log("Aca abajo email");
    console.log(emaillogin);
    console.log("------");
    console.log(passwordlogin);
    console.log("Arriba password");

    if (emaillogin == emailsesion && passwordlogin == passwordsesion) {
      window.open("../Feed/feed.html", "_self");
    } else {
      alert("Correo o contraseña incorecto, por favor verifique los datos ingresados y vuelva a intentarlo.")
    }

  })

})

