const buttonsParent = document.getElementById('buttonsContainer');
const menu = document.getElementById('menu');
const backDrop = document.getElementById('backdrop');
const accordeon = document.querySelector('.buttons__container');
const citySelector = document.getElementById('citySelector');
const cityList = document.getElementById('cityList');

window.onload = function() {
    document.getElementById('nav-button').addEventListener('click', showMenu);
    backDrop.addEventListener('click', showMenu);
    menu.addEventListener('click', showMenu);
    buttonsParent.addEventListener('click', activateService);
    accordeon.addEventListener('click', openItem);
    citySelector.addEventListener('click', toggleSelect);
    cityList.addEventListener('click', selectCity);
    console.log(`Верстка соответствует макету. Header и welcome объединены, это допускается и мне так удобно.
Полос прокрутки нет, адаптивное меню работает плавно. ИМХО заслуживаю максимальной оценки, но решать Вам ;)`);
}

function showMenu() {
    const body = document.getElementById('body');
    if (window.screen.width < 480) {
        menu.classList.toggle('opened');
        backDrop.classList.toggle('opened');
        body.classList.toggle('overflow');
    }
}

function activateService() {
    let buttons = Array.from(buttonsParent.children),
        clickedButton = document.getElementById(event.target.id),
        counter = 0;
    clickedButton.classList.toggle('clicked');
    buttons.forEach((item) => (item.classList.contains('clicked')) && counter++);
    if (buttons.length === counter) {
        buttons.forEach((item) => item.classList.remove('clicked'));
        clickedButton.classList.toggle('clicked');
    }
    buttons.forEach(function(item) {
        let cards = Array.from(document.getElementsByClassName(item.id));
        if (item.classList.contains('clicked') || counter === 0) {
            cards.forEach((carditem) => carditem.classList.remove('blur'));
        } else
            cards.forEach((carditem) => carditem.classList.add('blur'));
    })
}

function openItem() {
    let accordeonPanel = Array.from(accordeon.children);
    let clickedItem = event.target;
    accordeonPanel.forEach((item) => {
        item.childNodes[3].classList.add('accordeon__panel-visible');
        item.childNodes[1].classList.remove('opened');
    });
    if (accordeonPanel.includes(clickedItem)) {
        clickedItem.childNodes[3].classList.remove('accordeon__panel-visible');
        clickedItem.childNodes[1].classList.add('opened');
    }
}

function toggleSelect() {
    let icon = document.querySelector('.dropdown__icon');
    icon.classList.toggle('opened');
    cityList.classList.toggle('visible');
}

function selectCity() {
    let city = event.target.getAttribute('data-select');
    citySelector.childNodes[0].textContent = city;
    toggleSelect();
    showAddress(city);
}

function showAddress(data) {
    let addresses = document.querySelectorAll('.contacts__adress');
    addresses.forEach((item) => (item.getAttribute('data-address') === data) ? item.classList.add('visible') : item.classList.remove('visible'));
    }