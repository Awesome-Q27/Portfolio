'user strict';

// 함수 정의
function scrollIntiView(selector) {
    var scrollTo = document.querySelector(selector); // 문자열을 가지는 element 탐색
    scrollTo.scrollIntoView({behavior: 'smooth'});
}




// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link; // 지정한 문자열이 들어 있다
    if (link == null) {
        return;
    }

    console.log(link);
    scrollIntiView(link);
});

// Handle click on "Contact me" button on home
const contackMeBtn = document.querySelector('.home__contact');
contackMeBtn.addEventListener('click', () => {
    console.log('#contact');
    scrollIntiView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeheight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeheight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on "arrow up" btn
arrowUp.addEventListener("click", () => {
    scrollIntiView('#home');
});






