console.log("Hello!");


// Находим по id scrollToTopBtn

const scrollButton = document.querySelector('#scrollToTopBtn');

// console.log(scrollButton);

//  Слушаем событие скролла на странице

window.addEventListener('scroll', function (){
    console.log("Scroll!");

    // Если пользователь проскроллил страницу по высоте больше чем высота экрана

    if (window.pageYOffset > window.innerHeight) {
        // Тогда добавляем к кнопке класс top-link--visible что бы отобразить её
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
})