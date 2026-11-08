// Мобильная навигация

// Ищем кнопку открытия мобильной навигации
const mobileNavBtnOpen = document.querySelector('#openMobileNav');

// Ищем кнопку закрытия мобильной навигации
const mobileNavBtnClose = document.querySelector('#closeMobileNav');

// Ищем ьлок с мобильной навигацией
const mobileNav = document.querySelector('.mobile-nav');

//  Вешаем прослушку события по клику на кнопку открытия мобильной навигации

mobileNavBtnOpen.addEventListener('click', function () {
    console.log('Click!')

    // По клику добавляем класс mobile-nav--open к блоку мобильной навигации
    mobileNav.classList.add('mobile-nav--open');

    // Добавляем класс no-scroll к тэгу body, что-бы запретить скролл на странице
    document.body.classList.add('no-scroll');
})

// Вешаеь прослушку события по клику на кнопку закрытия мобильной навигации
mobileNavBtnClose.addEventListener('click', function () {

    // По клику удоляем класс mobile-nav--open у блока мобильной навигации
    mobileNav.classList.remove('mobile-nav--open');

    // Удоляем класс no-scroll к тэгу body, что-бы отключить скролл на странице
    document.body.classList.remove('no-scroll');
})

// ---------------------------------------------------------------------------------------
//  Закрыть мобильную навигацию по ссылкам мобильной навигации

//  Находим ссылки внутри блока с мобильной навигацией
const mobileNavLinks = mobileNav.querySelectorAll('a, button');

console.log('mobileNavLinks');

//  Перебираем все ссылки в мобилной навигации
mobileNavLinks.forEach(function(item){
    console.log('item');
    // Вешаем прослушку события по клику на каждую ссылку в мобильной навигации
    item.addEventListener('click', function(){
        console.log('click on element');

        //Закрываем мобильную навигацию, по клику удоляем класс mobile-nav--open у блока мобильной навигации
        mobileNav.classList.remove('mobile-nav--open');

        // Удоляем класс no-scroll к тэгу body, что-бы отключить скролл на странице
        document.body.classList.remove('no-scroll');
        
    })
})
