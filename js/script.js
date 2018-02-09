window.onload = function() {
    var dots = document.querySelectorAll('.slider__dot');
    var dot1 = document.querySelector ('.slider__dot--1');
    var dot2 = document.querySelector ('.slider__dot--2');
    var dot3 = document.querySelector ('.slider__dot--3');
    var slides = document.querySelectorAll('.slider__item');
    var item1 = document.querySelector ('.slider__item--1');
    var item2 = document.querySelector ('.slider__item--2');
    var item3 = document.querySelector ('.slider__item--3');

    dot1.onclick = function () {
        for (var i = 0; i < dots.length; i++) { 
            dots[i].classList.remove("slider__dot--active");
            slides[i].classList.remove("slider__item--active");
        }
        dot1.classList.add("slider__dot--active");
        item1.classList.add("slider__item--active");        
    }
    dot2.onclick = function () {
        for (var i = 0; i < dots.length; i++) { 
            dots[i].classList.remove("slider__dot--active");
            slides[i].classList.remove("slider__item--active");
        }
        dot2.classList.add("slider__dot--active");
        item2.classList.add("slider__item--active");        
    }
    dot3.onclick = function () {
        for (var i = 0; i < dots.length; i++) { 
            dots[i].classList.remove("slider__dot--active");
            slides[i].classList.remove("slider__item--active");
        }
        dot3.classList.add("slider__dot--active");
        item3.classList.add("slider__item--active");        
    }
    
    //Видео



    //Счетчик

    var number1 = document.querySelector('.counter__number--1'),
        numberTop = number1.getBoundingClientRect().top,
        start = +number1.innerHTML, end = +number1.dataset.max;

    window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);

            var interval = setInterval(function() {
                    number1.innerHTML = ++start;
                if(start == end) {
                        clearInterval(interval);
                }
            }, 50);   
        }
    });

    var number2 = document.querySelector('.counter__number--2'),
        numberTop2 = number2.getBoundingClientRect().top,
        start2 = +number2.innerHTML, end2 = +number2.dataset.max;

    window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop2 - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);

            var interval = setInterval(function() {
                    number2.innerHTML = ++start2;
                if(start2 == end2) {
                        clearInterval(interval);
                }
            }, 50);   
        }
    });

    //Карусель   
    var items = document.querySelectorAll('.carousel__item');
    var itemNext = document.querySelector ('.carousel__btn--next');
    var itemPrev = document.querySelector ('.carousel__btn--prev');
    var counter = -1;
    var counter1 = 2;

    itemNext.onclick = function () {
        counter++;
        if (counter+4 >= items.length) {
            itemNext.classList.add("carousel__btn--next-disabled");
        }; 
        
        items[counter].classList.add("carousel__item--active-pasive");
        items[counter+3].classList.add("carousel__item--pasive-active");
        itemNext.classList.add("carousel__btn--next-animated");
        itemPrev.classList.add("carousel__btn--prev-disabled");    
        
            itemNext.addEventListener('animationend', function() {
                for (var i = 0; i < items.length; i++) { 
                    items[i].classList.remove("carousel__item--active-pasive");
                    items[i].classList.remove("carousel__item--pasive-active");
                }
                items[counter].classList.add("carousel__item--pasive");
                items[counter+3].classList.remove("carousel__item--pasive");     
                itemNext.classList.remove("carousel__btn--next-animated");
                itemPrev.classList.remove("carousel__btn--prev-disabled"); 
         });
    }
    itemPrev.onclick = function () { 
        
        items[counter].classList.add("carousel__item--pasive-active");
        items[counter+3].classList.add("carousel__item--active-pasive");
        itemNext.classList.add("carousel__btn--next-disabled");
        itemPrev.classList.add("carousel__btn--prev-animated");

        counter--;

        if (counter < 0) {
            itemPrev.classList.add("carousel__btn--prev-disabled"); 
        }
        
        itemPrev.addEventListener('animationend', function() {
            for (var i = 0; i < items.length; i++) { 
                items[i].classList.remove("carousel__item--active-pasive");
                items[i].classList.remove("carousel__item--pasive-active");
            }
            items[counter+1].classList.remove("carousel__item--pasive");
            items[counter+4].classList.add("carousel__item--pasive");    
            itemNext.classList.remove("carousel__btn--next-disabled");
            itemPrev.classList.remove("carousel__btn--prev-animated"); 
     });      
    }
}
