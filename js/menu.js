const open = (nav, btn) => {
    nav.classList.add( btn);
}
const close = (nav, btn) => {
    nav.classList.remove(btn);
}

const Slidemenu = (openBtn, nav, active, closeBtn ) => {
    const burger = document.querySelector(openBtn);
    const menu = document.querySelector(nav);
    const navigationClose = document.querySelectorAll(closeBtn);

    burger.addEventListener("click", () =>{
        open(menu, active);
    });
    navigationClose.forEach(item=>{
        item.addEventListener('click', () =>{
            close(menu, active);
        });
    }); 
};

Slidemenu('.header-burger', '.header__menu', 'navigation_active', ' .header__menu-link, .header__close');


