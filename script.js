import {johnMarston, arthurMorgan, dutchVanDerLinde, abigailRoberts, jackMarston} from "./personajes.js";

function obtenerContenido(enlace){
    let contenido = {
        "Arthur Morgan": arthurMorgan,
        "John Marston": johnMarston,
        "Dutch Van Der Linde": dutchVanDerLinde,
        "Abigail Roberts": abigailRoberts,
        "Jack Marston": jackMarston
    }
    return contenido[enlace];
}

let enlaces = document.querySelectorAll('a');
let nombreElemento = document.getElementById('nombre');
let imagenElemento = document.getElementById('imagen');
let descripcionElemento = document.getElementById('descripcion');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(){
        //REMOVER ACTIVE
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //AGREGAR ACTIVE AL ELEMENTO ACTUAL
        this.classList.add('active');
        //OBTENER CONTENIDO
        let contenido = obtenerContenido(this.textContent);
        //CAMBIAR CONTENIDO
        nombreElemento.textContent = contenido.nombre;
        imagenElemento.src = contenido.img;
        descripcionElemento.textContent = contenido.descripcion;
    })
});