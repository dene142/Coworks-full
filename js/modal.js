// Модальная кнопка

//  Находим элементы для модального окна

// Находим кнопки которые могут открывать модальные окна, по data атрибуту [data-action="modal"]
const openModalBtns = document.querySelectorAll('[data-action="modal"]');

// Находим модальное окно
const modal = document.querySelector('.modal'); 

// Кнопка закрытия модального окна
const closeModalBtn = document.querySelector('#closeModal');

// Блок с контентом модального окна
const modalBody = document.querySelector('.modal__body');

function openModal(){
    // Обращаемся к модалке и открываем её, добавляя к ней класс modal--open
    modal.classList.add('modal--open');

    // Добавляем класс no-scroll к тэгу body, что-бы запретить скролл на странице
    document.body.classList.add('no-scroll');
};

function closeModal(){
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
};





// Открываем модалку при клике по кнопкам
openModalBtns.forEach(function(item){
    // Вешаем прослушку по клику на них
    item.addEventListener('click', openModal);
});


//  Эакрытия модального окна
closeModalBtn.addEventListener('click', closeModal);


// Закрытие модалки по оверлею

modal.addEventListener('click', closeModal);


// Cлушаем клик непосредственно  внутри модального окна
modalBody.addEventListener('click', function(event){
    // Запрещаем кликам внутри модального окна (всплывать на верх)
    // Что-бы они не доходили до элемента modal и не закрывали модальноое окно
    event.stopPropagation();
});



// Закрываем модалку, нажимаем escape
document.addEventListener('keydown', function(event){
    if (event.key == 'Escape') {
        closeModal();
    }
});
