// menu plegable funcion 
let toggle = document.querySelector('.toggle');
let navegation = document.querySelector('.navegation');
let main = document.querySelector('.main');
//funcion para activar cuando pulsamos el boton del menu eso se pasara a css para que se le de un tamaño   
toggle.onclick = function(){
    navegation.classList.toggle('active');
    // al activarse el main volvemos a pasarle el contenido de la funcion en este caso active
    //y el boton del menu se deberia mover junto a la bara azul
    main.classList.toggle('active');
}
// se quedara selecionado nuesta ultima opcion del menu--list item
let list = document.querySelectorAll('.navegation li');
    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');            
    }
    list.forEach((item)=>
    item.addEventListener('mouseover' , activeLink));