let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ele = document.forms["registerForm"];
    let datosCompletos = true;
  // Obtiene el modal
    let modal = document.getElementById("modalRegister");

  // Obtiene <span> elemento que cierra el modal
    let span = document.getElementsByClassName("close");

  // Cuando hace click en <span> (x), close the modal
    span.onclick = function () {
    modal.style.display = "none";}

  // Cuando el usuario hace click en cualquier lugar de fuera del modal, lo cierra.
    window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    for (let i = 0; i < ele.length; i++) {
    if (ele.elements[i].type != "submit") {
        if (ele.elements[i].value == "") {
        ele.elements[i].style.backgroundColor = "#9a70b0";
        datosCompletos = false;
        }
        else { ele.elements[i].style.backgroundColor = "#e1eee1"; }
    }
    }
    if (datosCompletos) {
    $('#idHeaders').text(`${nombre.value}`);
    modal.style.display = "block";
    document.getElementById("registerForm").reset();
    }
});
