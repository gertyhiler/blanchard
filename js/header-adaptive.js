const openBtn = document.querySelector('.search-open-btn');
const closeBtn = document.querySelector('.search-close-btn');
const form = document.querySelector('.search_mobile');
const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.nav-adaptive');
const signInBtn = document.querySelector('.header__sign-in');

openBtn.addEventListener('click', () => {
  form.classList.add("is-cliced");
});

closeBtn.addEventListener('click', (event) => {
  form.classList.remove("is-cliced");
  event.preventDefault();

});

menuBtn.addEventListener('click', () => {
  toggleMenuClass ();

  if (menu.classList.value.includes('is-cliced')) {
    menu.addEventListener('click', isClicedLink=(event) => {
      if(event.target.className.includes('link')) {
        toggleMenuClass ();
        menu.removeEventListener('click', isClicedLink);
      };
    })
  }
});

function toggleMenuClass () {
  menuBtn.classList.toggle("is-cliced");
  menu.classList.toggle("is-cliced");
  signInBtn.classList.toggle("link-effects");
  signInBtn.classList.toggle("header__link");
  signInBtn.classList.toggle("btn-effects");
  signInBtn.classList.toggle("btn-effects_light");
  document.body.classList.toggle("overflow-hidden")
}
