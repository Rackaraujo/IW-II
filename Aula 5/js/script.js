/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/morcego.gif')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "green";
titulo.style.color = "green";
titulo.style.backgroundColor = "#121212";
titulo.style.borderBottom = "2px solid green";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')
let btnPink = document.querySelector('#btpink')
let btnPurple = document.querySelector('#btpurple')
let btnGreen = document.querySelector('#btgreen')  

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)
btnPurple.addEventListener('click', modoPurple)
btnGreen.addEventListener('click', modoGreen)
btnRed.addEventListener('click', modoRed)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("purple");
    tela.classList.remove("green");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
    tela.classList.remove("pink");
    tela.classList.remove("purple");
    tela.classList.remove("green");
}

function modoPink() {
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.add("pink");
    tela.classList.remove("purple");
    tela.classList.remove("green");
}

function modoPurple() {
    console.log('modo purple')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.add("purple");
    tela.classList.remove("green");
}

function modoGreen() {
    console.log('modo green')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("purple");
    tela.classList.add("green");
}


/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/