import { galleryItems } from "./gallery-items.js";
// Change code below this line

const conteinerGallary = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);
conteinerGallary.insertAdjacentHTML("beforeend", markupImg);

function createMarkupImg(item) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
      </a>
    </div>`,
    ""
  );
}

const clickOnConteinerItem = (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery")) return;
  const targetSrc = evt.target.dataset.source;
  const instance = basicLightbox.create(`
	<img src="${targetSrc}" alt="large-photo" >`);
  instance.show();
};
conteinerGallary.addEventListener("click", clickOnConteinerItem);

console.log(galleryItems);
