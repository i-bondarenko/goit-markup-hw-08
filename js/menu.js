(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-button'),
    closeMenuBtn: document.querySelector('.menu-button-close'),
    menu: document.querySelector('.menu-container'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
