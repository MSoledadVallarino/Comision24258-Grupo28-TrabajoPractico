let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ele = document.forms["contactForm"];
  let datosCompletos = true;
  // Obtiene el modal
  let modal = document.getElementById("contactModal");

  // Obtiene <span> elemento que cierra el modal
  let span = document.getElementsByClassName("close")[1];

  // Cuando hace click en <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Cuando el usuario hace click en cualquier lugar de fuera del modal, lo cierra.
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  for (let i = 0; i < ele.length; i++) {
    if (ele.elements[i].type != "submit") {
      if (ele.elements[i].value == "") {
        ele.elements[i].style.backgroundColor = "#e5bcfc";
        datosCompletos = false;
      }
      else { ele.elements[i].style.backgroundColor = "#e1eee1"; }
    }
  }
  if (datosCompletos) {
    $('#idHeader').text(`${nombre.value}`);
    modal.style.display = "block";
    document.getElementById("contactForm").reset();
  }
});
