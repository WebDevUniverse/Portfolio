//-----------------------------------------------Menu Button

var btnMenu = document.querySelector('.btn_menu');
var menuBars = document.querySelector('.menu_bars');
var menuClose = document.querySelector('.menu_close');

var o = 0;
btnMenu.addEventListener('click', function(){
    if(o == 0){
        // btnMenu.setAttribute('style','border: 2px double red');
        menuBars.setAttribute('style', 'display: none;')
        menuClose.setAttribute('style', 'display: block;')
        o = 1;
    }
    else {
        // btnMenu.setAttribute('style','border: 2px double green');
        menuBars.setAttribute('style', 'display: block;')
        menuClose.setAttribute('style', 'display: none;')
        o = 0;
    }
})
//-----------------------------------------------Menu Button