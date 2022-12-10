import { galleryItems } from "./gallery-items.js";
// Change code below this line

const conteinerGallary = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);
conteinerGallary.insertAdjacentHTML("beforeend", markupImg);

function createMarkupImg(item) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery"></div>
    <div class="gallery_item">
      <a class="gallery_link" href="${original}">
        <img class="gallery_img" src="${preview}" alt="${description}" data-source="${original}">
      </a>
    </div>`,
    ""
  );
}

const clickOnConteinerItem = (evt) => {
  evt.preventDefault();
};

console.log(galleryItems);
