//-----------------------------------------------Menu Button

var btnMenu = document.querySelector('.btn_menu');
var bar1 = document.querySelector('.bars:nth-child(1)');
var bar2 = document.querySelector('.bars:nth-child(2)');
var bar3 = document.querySelector('.bars:nth-child(3)');
var bar4 = document.querySelector('.bars:nth-child(4)');

var bars = 0;
btnMenu.addEventListener('click', function(){

    if(bars == 0){

        bar1.setAttribute('class', 'barss');
        bar2.setAttribute('class', 'barss');
        bar3.setAttribute('class', 'barss');
        bar4.setAttribute('class', 'barss');

        bars = 1;
    }
    else {

        bar1.setAttribute('class', 'bars');
        bar2.setAttribute('class', 'bars');
        bar3.setAttribute('class', 'bars');
        bar4.setAttribute('class', 'bars');

        bars = 0;
    }
})
//-----------------------------------------------Menu Button