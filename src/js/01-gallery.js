// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemMarkup);
// Реалізація делегування на div.gallery і отримання url великого зображення.
galleryEl.addEventListener('click', onGalleryElClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            />
        </a>`;
    })
    .join('');
}

function onGalleryElClick(e) {
  e.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
