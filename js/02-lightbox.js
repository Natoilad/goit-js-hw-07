import { galleryItems } from "./gallery-items.js";
// Change code below this line

const conteinerGallary = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);
conteinerGallary.insertAdjacentHTML("beforeend", markupImg);

function createMarkupImg(item) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"
      </a>`,
    ""
  );
}

const lightbox = new SimpleLightbox(".gallery a");

console.log(galleryItems);
