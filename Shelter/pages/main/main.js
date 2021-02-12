window.addEventListener("load", function () {

    let mobileMenu = document.querySelector('.mobile__menu');
    let headerBox = document.querySelector('.header__box');
    let main = document.querySelector('.main');
    let burgerMenu = document.querySelector('.burger__menu');
    let shadow = document.querySelector('.shadow');
    let body = document.querySelector('.body');


    burgerMenu.onclick = function () {
        /* Появление/исчезание меню при клике на бургер */
        this.classList.toggle('burger__menu__active');
        mobileMenu.classList.toggle('active');
        headerBox.classList.toggle('active');
        shadow.classList.toggle('active');
        body.classList.toggle('lock'); /*Блокировка прокрутки при открытом меню*/
    };

    shadow.onclick = function (e) {
        /* Убирает меню при клике вне */
        if (e.target.classList !== headerBox || e.target.classList !== mobileMenu) {
            this.classList.remove('active');
            headerBox.classList.remove('active');
            mobileMenu.classList.remove('active');
            burgerMenu.classList.remove('burger__menu__active');
            body.classList.remove('lock');

        }
    };

    document.querySelector('.hero__btn').onclick = function () {
        /* Переход на другой сайт по клику */
        document.location.href = "https://rolling-scopes-school.github.io/laranto-spb-JS2020Q3/shelter/pages/pets/pets.html";
    };

    document.querySelector('.pets__button').onclick = function () {
        /* Переход на другой сайт по клику */
        document.location.href = "https://rolling-scopes-school.github.io/laranto-spb-JS2020Q3/shelter/pages/pets/pets.html";
    };

    document.querySelector('list__link.closed').onclick = function () {
        /*Запрет перехода*/
        document.location.href = "javascript:void(0)";
    };

    document.querySelector('logo').onclick = function () {
        /*Запрет перехода*/
        document.location.href = "javascript:void(0)";
    };


});