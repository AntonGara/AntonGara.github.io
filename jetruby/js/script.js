window.onload = function() {
    function game(selector) {
        var container = document.querySelector(selector)
        var allTiles = document.querySelectorAll('.tile');
        var winScreen = document.querySelector('.game__winScreen')
        var restart = document.querySelector('.game__restartBtn')
        var winRound = document.querySelector('.game__winRounds')
        var index = 0 //счетчик действий в каждой итерации
        var rounds = 0 //счетчик раундов
        var match = 0 //счетчик совпадений (для победы 8)
        var activeTiles = []
        function getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }
        for (var i =0 ; i < allTiles.length; i++) {
            allTiles[i].style.order= getRandom(1,10);
        }
        restart.addEventListener('click', function () {
            for (var i =0 ; i < allTiles.length; i++) {
                allTiles[i].style.order= getRandom(1,10);
                allTiles[i].classList.remove('is-find');
                allTiles[i].classList.remove('is-hide');
                winScreen.classList.remove('is-active')
                match=0
                index=0
                rounds=0
            }
        }) 
        container.addEventListener('click', gameFilter)

        function gameFilter(e) {
            var targetTile = e.target.closest('.tile')
            var roundsValue = document.querySelector('.game__roundsValue') 
            if (!targetTile || targetTile.classList.contains('is-active')) return
            if (!targetTile || targetTile.classList.contains('is-find')) return
            targetTile.classList.add('is-active');
            roundsValue.classList.add('is-active');
            container.classList.add('is-disabled');
            activeTiles[index] = targetTile
            index++
            rounds++
            roundsValue.innerHTML = rounds;
            roundsValue.addEventListener('animationend', anim)
            function anim() {
                container.classList.remove('is-disabled');
                if (index >= 2) {
                    if (activeTiles[0].dataset.key == activeTiles[1].dataset.key) {
                        activeTiles[0].classList.add('is-find')
                        activeTiles[1].classList.add('is-find')
                        match++
                    }
                    activeTiles[0].classList.remove('is-active')
                    activeTiles[1].classList.remove('is-active')
                    index=0
                    activeTiles = []
                    if (match>=8) {
                        for (var i = 0; i < allTiles.length; i++) {
                            allTiles[i].classList.add('is-hide')
                        }
                        winScreen.classList.add('is-active')
                        winRound.innerHTML = rounds;
                        roundsValue.innerHTML = '0';
                    }  
                }
                roundsValue.classList.remove('is-active');
            }
            
        }      
    }
    game('#container')

};