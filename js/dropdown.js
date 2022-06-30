let rowList = document.querySelector('.row__list');

document.body.addEventListener('click', el => {
  el.target.classList.value.includes("row__btn") ? el.target.classList.toggle('active') : false;
  rowList.querySelectorAll('.active').forEach(e => el.target.textContent !== e.textContent ? e.classList.remove('active') : false);
});


