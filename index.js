//---BUTTONS---//
const menuBtn = document.querySelector('.menu__btn');
const btnContact = document.querySelectorAll('.btn_contact'); // Кнопка "Написать" в баннере
const btnsClose = document.querySelectorAll('.popup__button-close'); //Кнопка "Закрыть" popup

const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');
const headerLogo = document.querySelector('.header__logo');

//---CLONES---//
const socials = document.querySelector('.socials');
const contacts = document.querySelector('.contacts__form'); // Форма отправки сообщения из контактов
const cloneSocials = socials.cloneNode(true);
const cloneContacts = contacts.cloneNode(true);

//---TABS---//
const portfolio = document.querySelector('.portfolio');
const portfolioTabs = portfolio.querySelectorAll('.tab');
const skills = document.querySelector('.skills__tabs');

//---POPUPS---//
const popup = document.querySelectorAll('.popup')
const popupContactMe = document.querySelector('.popup_contact-me'); // Попап обратная связь
const fullImage = document.querySelector('.popup_type_fullscreen-image'); //Попап full-изображения
const popupImage = fullImage.querySelector('.popup__image');
const popupImageCaption = fullImage.querySelector('.popup__image-caption');

const images = document.querySelectorAll('.photo__item-img');


//------------ Open-Popups -------------//
function openPopup(popup) { //Функцию передаем в обработчик по клику на элемент DOM
  popup.classList.add('popup_opened'); //Функция добавляет класс popup_opened
  document.addEventListener('keyup', handleClosePopupByEsc); // Добавляем обработчик для закрытия по Esc
};

function openImagePopup(image) {
  image.querySelector('.photo__item-img').addEventListener('click', evt => { //По клику на DOM элемент с картинкой выполняется функция
    popupImage.src = evt.target.src;                                     // которая заполняет атрибуты элементов поп-апа
    popupImageCaption.textContent = evt.target.querySelector('.photo__item-text').textContent;
    popupImageCaption.alt = evt.target.alt;
    openPopup(fullImage); // И вызывается функция открытия поп-апа
  });
};

images.forEach((image) => {
  image.addEventListener('click', evt => { //По клику на DOM элемент с картинкой выполняется функция
    popupImage.src = evt.target.src;                                     // которая заполняет атрибуты элементов поп-апа
    popupImageCaption.textContent = evt.target.alt;
    popupImageCaption.alt = evt.target.alt;
    openPopup(fullImage); // И вызывается функция открытия поп-апа
  });
})
//------------ END ---------------------//

//------------ Close-Popups -------------//
function closePopup(popup) {
  popup.classList.remove('popup_opened'); //Функция удаляет класс popup_opened у родительского элемента .popup, возвращаемого функцией handleClickClosePopup
  document.removeEventListener('keyup', handleClosePopupByEsc); //Удаляем обработчик для закрытия на клавишу Esc
  document.body.style.overflow = "";
};

function handleClosePopupByEsc(evt) { // Ф-я закрытия попапа по клавише Esc
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened')); //Закрываем открытый попап
  }
};

function handleClickClosePopup(evt) { // Ф-я закрытия попапа на кнопку-крестик
  closePopup(evt.target.closest('.popup'));
}

btnsClose.forEach(button => { // Закрытие попапа по кнопке
  button.addEventListener('click', handleClickClosePopup); // Добавляем обработчик для закрытия по кнопке
});

function handleClosePopupByOverlay(evt) { // закрытие попапа по оверлею
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target); //Закрываем открытый попап
  }
};

popup.forEach((item) =>  //Добавляем обработчик для закрытия на клик по оверлею
  item.addEventListener('click', (evt) =>  {
    evt.stopPropagation();
    handleClosePopupByOverlay(evt);
}));
//------------ END ---------------------//

//------------ MOBILE MENU ------------//
menuBtn.addEventListener('click', () => {
  openMenu();
})

const openMenu = () => {
  menu.classList.add('menu__mobile');
  menuBtn.classList.add('menu__btn-close');
  headerLogo.classList.add('logo-centered');
  headerLogo.addEventListener('click', closeMenu); // Обработчик клика по лого в меню
  menuBtn.addEventListener('click', handleCloseMenu); // Обработчик клика кнопки закрытия моб. меню
  document.addEventListener('keyup', handleCloseMenuByEsc); // Обработчик на клавишу для закрытия меню по Escape
}

const closeMenu = () => { // Ф-я закрытия моб. меню
  menu.classList.remove('menu__mobile');
  menuBtn.classList.remove('menu__btn-close');
  headerLogo.classList.remove('logo-centered');
  menuBtn.removeEventListener('click', handleCloseMenu);
  document.removeEventListener('keyup', handleCloseMenuByEsc);
}

menuItem.forEach((item) => { // Закрытие меню при клике на пункт меню
  item.addEventListener('click', closeMenu)
})


function handleCloseMenuByEsc(evt) { // Закрытие меню по Esc
  if (evt.key === "Escape") {
    closeMenu();//Закрываем меню
  }
};

function handleCloseMenu() { // Закрытие меню при клике на крестик
  closeMenu(); //Закрываем меню
};
//------------ MOBILE MENU END ------------//

// --- Открытие Попапа Обратная связь --- //
const openPopupContact = () => {
  document.addEventListener('keyup', handleClosePopupByEsc);
  cloneContacts.classList.add('contacts__info_popup');
  cloneSocials.classList.add('socials_popup');
    openPopup(popupContactMe);
    popupContactMe.querySelector('.popup__container').insertAdjacentElement('beforeend', cloneContacts);
    popupContactMe.querySelector('.popup__container').insertAdjacentElement('beforeend', cloneSocials);
    document.body.style.overflow = "hidden";
}

btnContact.forEach((btn) => {
  btn.addEventListener('click', openPopupContact)
});

// ----- ВКЛАДКИ ----- //

// Проходимся по всем кнопкам
portfolioTabs.forEach(tab => {
  // вешаем на каждую кнопку обработчик события клик
  tab.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveButton = portfolio.querySelector('.tab.tab_active');
    // Получаем предыдущую активную вкладку
    /*const prevActiveItem = document.querySelector('.tabs__button._active');*/

    // Проверяем есть или нет предыдущая активная вкладка
    /*if (prevActiveItem) {
      //Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('tab_active');
    }*/

    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      // Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('tab_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    /*const nextActiveItemId = `#${tab.getAttribute('data-tab')}`;*/
    // получаем новую активную вкладку по id
    /*const nextActiveItem = document.querySelector(nextActiveItemId);*/

    // добавляем класс _active кнопке на которую нажали
    tab.classList.add('tab_active');
    // добавляем класс _active новой выбранной вкладке
    /*nextActiveItem.classList.add('tab_active');*/
  });
})

skills.addEventListener('click', function (evt) {
  // Получаем предыдущую активную кнопку
  const prevActiveButton = skills.querySelector('.tab._active');
  // Получаем предыдущую активную вкладку
  const prevActiveTab = skills.querySelector('.skills__list._active');

  if (evt.target.classList.contains('skills__tab')) {
    evt.target.parentElement.querySelector('.skills__list').classList.toggle('_active'); // Помещаем перед условием, чтобы вкладка закрывалась при повторном нажатии
    evt.target.parentElement.querySelector('.skills__tab').classList.toggle('_active');
    if (prevActiveTab) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveTab.classList.remove('_active');
      prevActiveButton.classList.remove('_active');
    }
  }
 });

