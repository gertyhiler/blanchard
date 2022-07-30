const catalogSummary = document.querySelector('.artists');
const artist = document.querySelector('.artist[data-artist-name="Доменико Гирландайо"]');
const plug = document.querySelector('.artist-plug');

catalogSummary.addEventListener('click', e => {
  if (e.target.innerText === "Доменико Гирландайо") {
    if (!artist.classList.value.includes('is-selected') ) {
      artist.classList.add('is-selected');
      plug.classList.remove('is-selected')
    }
  } else if (e.target.innerText !== "Доменико Гирландайо" && e.target.classList.value.includes('artists__btn')){
    artist.classList.remove('is-selected');
    plug.classList.add('is-selected');
  }
})
