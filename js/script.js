window.onload = function() {
    // Адаптивный CSS слайдер с анимацией текста
    var dot1 = document.querySelector ('.cssSlider__dot--1');
    var dot2 = document.querySelector ('.cssSlider__dot--2');
    var dot3 = document.querySelector ('.cssSlider__dot--3');
    var text1 = document.querySelector ('.cssSlider__text--1');
    var text2 = document.querySelector ('.cssSlider__text--2');
    var text3 = document.querySelector ('.cssSlider__text--3');

    dot1.onclick = function () {
        text1.classList.add("cssSlider__text--animated");
        text1.addEventListener('animationend', function() {
            text1.classList.remove("cssSlider__text--animated");
        });      
    }
    dot2.onclick = function () {
        text2.classList.add("cssSlider__text--animated");
        text2.addEventListener('animationend', function() {
            text2.classList.remove("cssSlider__text--animated");
        });      
    }
    dot3.onclick = function () {
        text3.classList.add("cssSlider__text--animated");
        text3.addEventListener('animationend', function() {
            text3.classList.remove("cssSlider__text--animated");
        });      
    }

    //Форма поиска
    var header = document.querySelector ('.header__content');
    var search = document.querySelector ('.menu__button--search');
    var close = document.querySelector ('.header__close');

    search.onclick = function () {
        header.classList.add("header__content--pasive");
    }
    close.onclick = function () {
        header.classList.remove("header__content--pasive");
    }
    
    //Фильтр проектов
     
    document.querySelector('.projects__list').addEventListener("click", function(evt){
        var e = [].indexOf.call(this.children, evt.target);
        var filter = document.querySelectorAll ('.js-filter' + e);
        var allCard = document.querySelectorAll ('.card');
        var allItem = document.querySelectorAll ('.projects__item');

        if (e <= 0) {
            for (var i = 0; i < allItem.length; i++) {
                allItem[i].classList.remove("projects__item--active");
            }
            for (var i = 0; i < allCard.length; i++) {
                allCard[i].classList.remove("card--pasive");
            }
            allItem[e].classList.add("projects__item--active");
        } else {
            for (var i = 0; i < allItem.length; i++) {
                allItem[i].classList.remove("projects__item--active");
            }
            for (var i = 0; i < allCard.length; i++) {
                allCard[i].classList.remove("card--pasive");
            }
            for (var i = 0; i < filter.length; i++) {
                filter[i].classList.add("card--pasive");
            }
            allItem[e].classList.add("projects__item--active");
        }
    });

    
    //Счетчик
    var startCounter = document.querySelector('.mobile__content');
    var numberSourceTop = startCounter.getBoundingClientRect().top + window.pageYOffset;
    var number1 = document.querySelector('.counter__number--1');
    var number2 = document.querySelector('.counter__number--2');
    var number3 = document.querySelector('.counter__number--3');
    var number4 = document.querySelector('.counter__number--4');
    var number5 = document.querySelector('.counter__number--5');
    
    window.addEventListener('scroll', function onScroll() {
        if(window.pageYOffset > numberSourceTop) {
        this.removeEventListener('scroll', onScroll);
            interval1 = setInterval(function() {
                start = +number1.innerHTML;
                end = +number1.dataset.max;
                number1.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval1);
                }
            }, 10);
            interval2 = setInterval(function() {
                start = +number2.innerHTML;
                end = +number2.dataset.max;
                number2.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval2);
                }
            }, 25);
            interval3 = setInterval(function() {
                start = +number3.innerHTML;
                end = +number3.dataset.max;
                number3.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval3);
                }
            }, 50);
            interval4 = setInterval(function() {
                start = +number4.innerHTML;
                end = +number4.dataset.max;
                number4.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval4);
                }
            }, 100);
            interval5 = setInterval(function() {
                start = +number5.innerHTML;
                end = +number5.dataset.max;
                number5.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval5);
                }
            }, 200);         
        }
    });

    
    //Карусель (самописный слайдер)
    var track = document.querySelector ('.carousel__wrapper');
    var trackItems = document.querySelectorAll ('.carousel__item');
    var prev = document.querySelector ('.carousel__prev');
    var next = document.querySelector ('.carousel__next');
    var i = 0;
    var itemWidth = 400; //ширина слайда с учетом отступов
    
    
    next.onclick = function () {
        i = i-itemWidth;
        track.classList.add("carousel__wrapper--next");
        prev.classList.add("carousel__prev--disabled");
        next.classList.add("carousel__next--disabled");

        var content = document.querySelector ('.carousel__content');
        var computedStyle = getComputedStyle(content);
        var contentWidth = parseInt(computedStyle.width);
        var slidesValue = trackItems.length - contentWidth/itemWidth;
        
        track.addEventListener('animationend', function trackNext() {
            track.classList.remove("carousel__wrapper--next");
            track.style.left = i + "px";
            prev.classList.remove("carousel__prev--disabled");
            next.classList.remove("carousel__next--disabled");
            if (i <= slidesValue*-itemWidth) {
                next.classList.add("carousel__next--disabled");
            }
        });
    }
    prev.onclick = function () {
        i = i+itemWidth;
        track.classList.add("carousel__wrapper--prev");
        prev.classList.add("carousel__prev--disabled");
        next.classList.add("carousel__next--disabled");
        track.addEventListener('animationend', function trackPrev() {
            track.classList.remove("carousel__wrapper--prev");
            track.style.left = i + "px";
            prev.classList.remove("carousel__prev--disabled");
            next.classList.remove("carousel__next--disabled");
            if (i >= 0) {
                prev.classList.add("carousel__prev--disabled");
            }
        });    
    }


    //Видео в модальном окне (костыль)
    var video = document.getElementById('video');
    var close = document.getElementById('close');
    close.onclick = function () {
        video.src = "https://www.youtube.com/embed/Rk6_hdRtJOE";
    }

    //swiper слайдер
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        speed: 800,
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        grabCursor: true,
        breakpoints: {
            1280: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            620: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });

}