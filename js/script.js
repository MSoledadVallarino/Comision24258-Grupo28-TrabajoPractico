let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ele = document.forms["contactForm"];
  let datosCompletos=true;
for (let i = 0; i < ele.length ;i++) {
    if (ele.elements[i].type!="submit"){
        if(ele.elements[i].value==""){
            console.log(ele.elements[i].type);
            ele.elements[i].style.backgroundColor="#e5bcfc";
            datosCompletos=false;}
        else ele.elements[i].style.backgroundColor="#e1eee1";
    }
  }
if (datosCompletos){
    alert(`${nombre.value} su email se ha envíado exitosamente`);
    document.getElementById("contactForm").reset();
}
});