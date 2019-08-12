const $btnMenu = document.querySelector("#btn-menu");
const $menu = document.querySelector("#menu");

$btnMenu.addEventListener('click', showMenu);

    function showMenu(e){
        
        e.preventDefault();
        $menu.classList.toggle('showMenu');    

    }