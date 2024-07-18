const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const menuItem = document.querySelectorAll('.menu__item');
const headerLogo = document.querySelector('.header__logo');
const socials = document.querySelector('.socials');
const popupContactMe = document.querySelector('.popup_contact-me');
console.log(socials);

popupContactMe.insertAdjacentHTML('beforeend', socials);
console.log(popupContactMe);


menuBtn.addEventListener('click', () => {
  openMenu();
  document.addEventListener('keyup', handleCloseMenuByEsc);
})

const openMenu = () => {
  menu.classList.add('menu__mobile');
  menuBtn.classList.add('menu__btn-close');
  headerLogo.classList.add('logo-centered')
  menuBtn.addEventListener('click', handleCloseMenu)
}

const closeMenu = () => {
  menu.classList.remove('menu__mobile');
  menuBtn.classList.remove('menu__btn-close');
  headerLogo.classList.remove('logo-centered')
  menuBtn.removeEventListener('click', handleCloseMenu)
  document.removeEventListener('keyup', handleCloseMenuByEsc);
}

menuItem.forEach((item) => {
  item.addEventListener('click', closeMenu)
})

function handleCloseMenuByEsc(evt) {
  if (evt.key === "Escape") {
    closeMenu(); //Закрываем меню
  }
};

function handleCloseMenu() {
  closeMenu(); //Закрываем меню
};


