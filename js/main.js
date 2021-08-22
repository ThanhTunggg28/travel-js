const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $('header');

const nav_logo = $('.nav__logo');

const btn_play = $('.button-play');

const nav_link = $$('.nav__link');

const videoFile = $('#videofile');

const button_toggle = [...$$('.button-play .fas')];
console.log(button_toggle);
const link2 = [...nav_link]

var handleOnscroll = function () {
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if(scrollTop != 0) {
            heading.style.backgroundColor = 'white';
            heading.style.boxShadow = '0 2px 3px rgba(0, 0, 0, 0.3)';
            nav_logo.style.color = 'black';
            link2.map(function (arr) {
                return arr.style.color = 'black';
            })
        }
        else {
            heading.style.backgroundColor = 'transparent';
            heading.style.boxShadow = '';
            nav_logo.style.color = 'white';
            link2.map(function (arr) {
                return arr.style.color = 'white';
            })
        }
    }
}

var handelOnclickNavLink = function () {
    link2.map(function (arr) {
        arr.onclick = function () {
            $('.nav__link.active').classList.remove('active');
            arr.classList.add('active');
        }
    })
}

var handleClickButton = function () {  
    button_toggle.forEach(function (arr) {
            if(arr.classList.contains('active')) {
                arr.classList.remove('active');
                videoFile.play();
                
            }
            else{
                arr.classList.add('active');
                videoFile.pause();
            }
    })
}
var playVideo = function () {
    btn_play.addEventListener('click', handleClickButton)
}


playVideo();

handelOnclickNavLink();
handleOnscroll();
