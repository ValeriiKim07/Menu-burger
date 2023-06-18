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
