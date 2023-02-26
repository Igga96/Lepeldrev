let btnLeft = document.querySelector('.button__circle-left')
let btnRight = document.querySelector('.button__circle-right')
let slider = document.querySelector('.goods__slider')
let sliderLine = document.querySelector('.goods__slider-line')
let slideritem = document.querySelectorAll('.goods__item')

let count = 0


function Init() {
    width = slider.offsetWidth;
    sliderLine.style.width = width - slideritem.length + 'px';
    slideritem.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

Init();
window.addEventListener('resize', Init);



btnRight.addEventListener('click', function () {
    count++
    if (count >= slideritem.length/2) {
        count = 0;
    }

    rollSlider();
});
btnLeft.addEventListener('click', function () {

    count--;
    if (count < 0) {
        count = slideritem.length/5;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width/2 + 'px)';
    sliderLine.style.transition = '800ms ease transform';

}