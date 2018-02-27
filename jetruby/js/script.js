window.onload = function() {
    var allTiles = document.querySelectorAll('.tiles');
    var start = document.querySelector('.start');
    start.onclick = function () {
        start.classList.add('is-active');
        board.classList.add('is-disabled');
        for (e=0; e < allTiles.length; e++) {
            function getRandom(min, max) {
                return Math.random() * (max - min) + min;
            }
            allTiles[e].style.order= Math.round(getRandom(1,10));
            allTiles[e].classList.remove('is-active');
            allTiles[e].classList.remove('is-find');
            allTiles[e].classList.add('show'); 
        }
        start.addEventListener('animationend', function () {
            for (e=0; e < allTiles.length; e++) {
                allTiles[e].classList.remove('show');
                start.classList.remove('is-active');
                board.classList.remove('is-disabled');
            }
        })  
    }
    
    var board = document.querySelector('.board');
    var i = 0;
    var s = [];

    board.onclick = function (e) {
         var targetTiles = e.target.closest('.tiles')
         if (!targetTiles || targetTiles.classList.contains('is-find')) return
         if (!targetTiles || targetTiles.classList.contains('is-active')) return
         targetTiles.classList.add('is-active'); 
         setTimeout(function() {
             var allActive = document.querySelectorAll('.tiles.is-active');
             s[i] = targetTiles.dataset.item;
             i++
             if (i>=2) {
                 if (s[0] == s[1]) {
                     for (e=0; e < allActive.length; e++) {
                         allActive[e].classList.remove('is-active');
                         allActive[e].classList.add('is-find');  
                     }
                 } else {
                     for (e=0; e < allActive.length; e++) {
                         allActive[e].classList.remove('is-active');
                     }
                 }
                 s = []
                 i=0;
             } 
         }, 300)  
     }
    







};