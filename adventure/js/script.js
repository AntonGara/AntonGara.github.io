window.onload = function() {

document.querySelector('.menu').addEventListener("click", function(evt){
    var e = [].indexOf.call(this.children, evt.target);
    var filter = document.querySelectorAll ('.js-filter' + e);
    var allCard = document.querySelectorAll ('.card');
    var allItem = document.querySelectorAll ('.menu__item');
    if (!allItem[e] || allItem[e].classList.contains('menu__item-active')) return
    
    for (var i = 0; i < allItem.length; i++) {
        allItem[i].classList.remove("menu__item-active");
    }
    for (var i = 0; i < allCard.length; i++) {
        allCard[i].classList.remove("card-pasive");
    }

    allItem[e].classList.add("menu__item-active");
    
    if (e > 0) {
        for (var i = 0; i < filter.length; i++) {
            filter[i].classList.add("card-pasive");
        }  
    } 
});

//magnific-popup
    $('.open-popup-image').magnificPopup({
    type: 'image',
    showCloseBtn: false,
    autoFocusLast: false
    });

    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        autoFocusLast: false,
        fixedContentPos: false
    });

};

