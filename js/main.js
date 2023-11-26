// Funcion para activar el menu.
// y para que se oculte al presionar una opcion del menu

function showMenu() {
   const btn = document.querySelector('.header_btn');
   const menu = document.querySelector('.header_list ');
      btn.addEventListener('click', function(){
         menu.classList.toggle('active')
   });

   menu.addEventListener('click', function(){
      menu.classList.remove('active')
   });
}

showMenu()