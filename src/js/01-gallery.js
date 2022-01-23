import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemCardMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

function createGalleryItemCardMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}
//проверка куда кликнули
function onGalleryItemsContainerClick(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const originalUrl = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src=${originalUrl}>`)
  instance.show();
  //закрытие по ESC
  document.addEventListener('keydown', function(event){
 if(basicLightbox.visible() && event.key === "Escape"){
   instance.close();
 }
});
    }

    



// const onShow = window.addEventListener("keydown", onEscKeyPress);
  //const onClose = window.removeEventListener("keydown", onEscKeyPress);
// function onEscKeyPress(evt) {
  
//   const ESC_KEY_CODE = 'Escape';
//   if (evt.code === ESC_KEY_CODE) {
//     instance.close();
//   }
//   }

console.log(galleryItems);
