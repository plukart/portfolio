let menuVisible = false;
//funcion que oculta menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function Seleccionar(){
    //ocultar menu una vez seleccionada la opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion que aplica animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("illustrator");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("ingles");
        habilidades[6].classList.add("pensamiento");
        habilidades[7].classList.add("proyect");
        
    }
}
//detecto el scroll para aplicar la animacion
window.onscroll = function(){
    efectoHabilidades();
}


