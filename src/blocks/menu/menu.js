let menus = document.querySelectorAll('.menu');

for(let menu of menus){
    let burger = menu.querySelector('.menu_burger');
    burger.onclick = function () {
        menu.classList.toggle('menu-list_activ');
    }
}