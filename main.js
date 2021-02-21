'user strict';

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
function scrollIntiView(selector) {
    var scrollTo = document.querySelector(selector); // 문자열을 가지는 element 탐색
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

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

