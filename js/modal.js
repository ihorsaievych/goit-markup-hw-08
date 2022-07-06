(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
    // header: document.querySelector('[data-page-header]'),
    // forms: document.querySelectorAll('.js-speaker-form'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

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
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
