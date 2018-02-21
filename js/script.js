window.onload = function() {
    
    //Фильтр проектов
    document.querySelector('.projects__list').addEventListener("click", function(evt){
        var e = [].indexOf.call(this.children, evt.target);
        var filter = document.querySelectorAll ('.js-filter' + e);
        var allCard = document.querySelectorAll ('.card');
        var allItem = document.querySelectorAll ('.projects__item');
        if (!allItem[e] || allItem[e].classList.contains('projects__item--active')) return
        
        for (var i = 0; i < allItem.length; i++) {
            allItem[i].classList.remove("projects__item--active");
        }
        for (var i = 0; i < allCard.length; i++) {
            allCard[i].classList.remove("card--pasive");
        }

        allItem[e].classList.add("projects__item--active");
        
        if (e > 0) {
            for (var i = 0; i < filter.length; i++) {
                filter[i].classList.add("card--pasive");
            }  
        } 
    });

    
    //Счетчик
    var show = true;
    var distance = 300; // расстояние на котором запускается счетчик(до секции в "px");
      $(window).on("scroll", function(){
          if(!show) return false;
          var w_top = $(window).scrollTop();
          var e_top = $('.counter').offset().top;
          if (w_top + distance  >= e_top) {
            $('.counter__number').countTo();
            show = false;
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
        var slidesValue = Math.round(trackItems.length - contentWidth/itemWidth);
        
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


    //magnific-popup
    $('.open-popup-image').magnificPopup({
        type: 'image',
        showCloseBtn: false,
        autoFocusLast: false
    });
    
    $('.popup-vimeo').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
        preloader: false,
        autoFocusLast: false,
		fixedContentPos: false
	});

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