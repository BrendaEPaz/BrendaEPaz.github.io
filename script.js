let menuVisible = false;
function mostrarOcultarMenu(){ 
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function cerrarMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
  }