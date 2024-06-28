const mobileMenu = document.querySelector('.menu__mobile');
const menuBtn = document.querySelector('.menu__btn');
const menuItem = document.querySelectorAll('.menu__item');
const headerLogo = document.querySelector('.header__logo');

menuBtn.addEventListener('click', () => {
  openMenu();
  document.addEventListener('keyup', handleCloseMenuByEsc);
})

const openMenu = () => {
  mobileMenu.classList.add('menu__mobile_active');
  menuBtn.classList.add('menu__btn-close');
  headerLogo.classList.add('logo-centered')
  menuBtn.addEventListener('click', handleCloseMenu)
}

const closeMenu = () => {
  mobileMenu.classList.remove('menu__mobile_active');
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
  console.log('1');
};


