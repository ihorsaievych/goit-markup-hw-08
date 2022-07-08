(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-mob__btn"),
    menu: document.querySelector(".menu-mob"),
    body: document.querySelector("body"),
    // header: document.querySelector('[data-page-header]'),
    // forms: document.querySelectorAll('.js-speaker-form'),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

//   // padding for fixed header
//  if (refs.header.classList.contains('page-header--fixed')) {
//   const { height: headerHeight } = refs.header.getBoundingClientRect();
//   document.body.style.paddingTop = `${headerHeight}px`;
//   }
//   // forms submit handler
//   refs.forms.forEach(item =>
//   item.addEventListener('submit', e => {
//     e.preventDefault();
//     new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
//   }))

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
