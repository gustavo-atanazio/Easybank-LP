const menu = {
    element: document.querySelector('#menu'),
    open: false
};

const header = document.querySelector('header');
const logo = document.querySelector('#logo');
const navBar = document.querySelector('nav');

menu.element.onclick = () => {
    if (!menu.open) {
        header.style.justifyContent = 'center';
        logo.style.marginRight = '8rem';

        navBar.style.display = 'block';
        navBar.classList.add('modal');

        menu.element.src = 'assets/img/icon-close.svg';
        menu.element.style.width = '25px';
        menu.open = true;
    } else {
        header.style.justifyContent = 'space-between';
        logo.style.marginRight = '';
        
        navBar.classList.remove('modal');
        navBar.style.display = 'none';

        menu.element.src = 'assets/img/icon-hamburger.svg';
        menu.element.style.width = '35px';
        menu.open = false;
    }
};