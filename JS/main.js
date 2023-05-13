function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  function seleccionar(link) {
    var opciones = document.querySelectorAll('.links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
  }

 const english = document.querySelector('#english')

 english.addEventListener('click', () => {
    document.body.classList.toggle('english')
    english.classList.toggle('inactive')
 })

 
 const spanish = document.querySelector('#spanish')

 spanish.addEventListener('click', () => {
    document.body.classList.toggle('spanish')
    spanish.classList.toggle('inactive')
 })


