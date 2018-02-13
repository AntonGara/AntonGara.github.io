window.onload = function() {
var allF = document.querySelector ('.js-no-filter'); // Первая кнопка меню. Отменяет фильтры.
var allCard = document.querySelectorAll ('.card');
var allMenuItem = document.querySelectorAll ('.menu__item');


var cultF = document.querySelector ('.js-filter1');
var cult = document.querySelectorAll ('.js-first-filter');


var exF = document.querySelector ('.js-filter2');
var ex = document.querySelectorAll ('.js-second-filter');


var atmoF = document.querySelector ('.js-filter3');
var atmo = document.querySelectorAll ('.js-third-filter');


var peopleF = document.querySelector ('.js-filter4');
var people = document.querySelectorAll ('.js-fourth-filter');


allF.onclick = function () {
    for (var i = 0; i < allMenuItem.length; i++) {
        allMenuItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card--pasive");
    }
    allF.classList.add("menu__item-active");   
}

cultF.onclick = function () {
    for (var i = 0; i < allMenuItem.length; i++) {
        allMenuItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card--pasive");
    } 
    for (var i = 0; i < cult.length; i++) {
        cult[i].classList.add("card--pasive");
    }
    cultF.classList.add("menu__item-active"); 
}

exF.onclick = function () {
    for (var i = 0; i < allMenuItem.length; i++) {
        allMenuItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card--pasive");
    } 
    for (var i = 0; i < ex.length; i++) {
        ex[i].classList.add("card--pasive");
    }
    exF.classList.add("menu__item-active"); 
}

atmoF.onclick = function () {
    for (var i = 0; i < allMenuItem.length; i++) {
        allMenuItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card--pasive");
    } 
    for (var i = 0; i < atmo.length; i++) {
        atmo[i].classList.add("card--pasive");
    }
    atmoF.classList.add("menu__item-active"); 
}

peopleF.onclick = function () {
    for (var i = 0; i < allMenuItem.length; i++) {
        allMenuItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card--pasive");
    } 
    for (var i = 0; i < people.length; i++) {
        people[i].classList.add("card--pasive");
    }
    peopleF.classList.add("menu__item-active"); 
}

//Видео в модальном окне (костыль)
var video = document.getElementById('video');
var close = document.getElementById('close');
close.onclick = function () {
    video.src = "https://www.youtube.com/embed/Rk6_hdRtJOE";
}

};

