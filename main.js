'user strict';

// 함수 정의
function scrolling(selector) {
    var target = document.querySelector(selector); // 문자열을 가지는 element 탐색'
    // 절대좌표를 이용한 이동
    const absoluteTop = window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo({
        top: absoluteTop - 50,
        behavior: 'smooth'
    });
    // 엘리멘트 자체로 이동
    // target.scrollIntoView({behavior: 'smooth'});
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
    navbarMenu.classList.remove('open');
    scrolling(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


// Handle click on "Contact me" button on home
const contackMeBtn = document.querySelector('.home__contact');
contackMeBtn.addEventListener('click', () => {
    console.log('#contact');
    scrolling('#contact');
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


// Projects
const workBtnContainer = document.querySelector('.work__caregories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode; // span 클릭시의 오류 방지
    target.classList.add('selected');

    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('animation');
    setTimeout(() => {
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }
            else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('animation');   
    }, 300); // 300ms 후에 {} 코드 실행
});





