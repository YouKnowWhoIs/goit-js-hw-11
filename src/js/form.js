// бібліотека izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// бібліотека simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const button = document.querySelector('.button');

form.addEventListener('submit', event => {
  event.preventDefault();
  const symbol = event.target.elements.query.value;

  getImages(symbol).then(data => {
    renderTicker(data);
  });

  event.target.reset();
});

function getImages(symbol) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '?key=42272316-28c697ce0580eb37211383c7d';
  const Q = `&q=${symbol}`;
  const IMAGE_TYPE = '&image_type=photo';
  const ORIENTATION = '&orientation=horizontal';
  const SAFESEARCH = '&safesearch=true';
  const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

  if (symbol.trim() === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
  return fetch(url).then(res => res.json());
  // .then(data => {
  //   if (data.hits.length === 0) {
  //     return iziToast.error({
  //       message:
  //         'Sorry, there are no images matching your search query. Please try again!',
  //       position: 'topRight',
  //     });
  //   }
  // })
  // .catch(error => console.log(error));
}

function getElement(obj) {
  return `<li class="gallery-item" >
  <a class="gallery-link" href="${obj.largeImageURL}">
    <img
      class="gallery-image"
      src="${obj.webformatURL}"
      data-source="${obj.largeImageURL}"
      alt="${obj.tags}"
    />
  </a>
  <sapn>likes ${obj.likes}</span>
  <sapn>views ${obj.views}</span>
  <sapn>comments ${obj.comments}</span>
  <sapn>downloads ${obj.downloads}</span>
</li>`;
}

function renderTicker(obj) {
  const markup = getElement(obj);
  refs.infoEl.innerHTML = markup;
}
