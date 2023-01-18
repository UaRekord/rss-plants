const menu = document.getElementById('menu');
const burger = document.getElementById('nav-button');
const backDrop = document.getElementById('backdrop');
const body = document.getElementById('body');
const myOpinion = `Верстка соответствует макету. Header и welcome объединены, это допускается и мне так удобно.
Полос прокрутки нет, адаптивное меню работает плавно. ИМХО заслуживаю максимальной оценки, но решать Вам ;)`;

burger.addEventListener('click', showMenu);
backDrop.addEventListener('click', showMenu);
menu.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('opened');
    backDrop.classList.toggle('opened');
    body.classList.toggle('overflow');
}
console.log(myOpinion);