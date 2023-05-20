  function seleccionar(link) {
    var opciones = document.querySelectorAll('.links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
  }

 const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }


 let dark = document.getElementById("dark")

 dark.addEventListener("click", darkMode)

