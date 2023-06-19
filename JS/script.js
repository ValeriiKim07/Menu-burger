'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
},


Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
},

any: function () {
    return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera()||
        isMobile.Windows());
}
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuAroows = document.querySelectorAll('.menu__arrow');
    if (menuAroows.length > 0) {
        for (let index = 0; index < menuAroows.length; index++) {
            const menuAroow = menuAroows[index];
            menuAroow.addEventListener('click', function(e) {
                menuAroow.parentElement.classList.toggle('_active');
            })
        }
    }
} else {
    document.body.classList.add('_pc');
}


// scroll links

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', oneMenuLinkClick);
    });

    function oneMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}


