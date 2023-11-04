import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// // Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageContainer = document.querySelector('.gallery');
const imageMarkup = creatImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imageMarkup);


function creatImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item" style="list-style:none">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('');
};


  new SimpleLightbox('.gallery__item a', {
  captionsData: "alt",
  captionDelay: 250,
});
