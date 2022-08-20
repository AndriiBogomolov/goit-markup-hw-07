(() => {
  const refs = {
    openMenuBtn: document.querySelector(".open-menu-btn"),
    closeMenuBtn: document.querySelector(".close-menu-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();



// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();





// (() => {
//   const menuOpenBtn = document.querySelector('[data-menu-open]');
//   const menuCloseBtn = document.querySelector('[data-menu-close]');
    
//   const mobileMenu = document.querySelector('[data-menu]');
//   const body = document.querySelector('body');
  
//   menuOpenBtn.addEventListener('click', openModal);
//   menuCloseBtn.addEventListener('click', openModal);

//   function openModal() {
//     mobileMenu.classList.toggle('is-open');
//     body.classList.toggle('no-scroll');
      
//   }
// })();