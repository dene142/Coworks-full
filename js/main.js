//  Tiny slider


const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    "mouseDrag": true,
    gutter: 20,
    autoWidth: true,
    lazyload: true,
    swipeAngle: false,

    speed: 800,
    
    controlsContainer: '.locations__controls',
    nav: false,
   

});

// Кнопки управления слайдером
const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

// Обращаемся к кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад

prevMobile.onclick = () => slider.goTo('prev');
nextMobile.onclick = () => slider.goTo('next');

// prevMobile.onclick = function () {
// slider.goTo('prev');
// };

// nextMobile.onclick = function () {
    // slider.goTo('next');
// };