import { createAd } from "./create-ad-model.js";

export function createAdController(createAdForm) {
  createAdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const adImage = createAdForm.querySelector("#ad-photo");
    const adTitle= createAdForm.querySelector("#ad-title");
    const adDescription = createAdForm.querySelector("#ad-description");
    const adPrice = createAdForm.querySelector("#ad-price");
    const adType = createAdForm.querySelector("#ad-type");
    
    const adImageValue = adImage.value;
    const adTitleValue = adTitle.value;
    const adDescriptionValue = adDescription.value;
    const adPriceValue = adPrice.value;
    const adTypeValue = adType.value;

    const ad = {
      img: adImageValue, 
      title: adTitleValue, 
      description: adDescriptionValue,
      price: adPriceValue,
      type: adTypeValue
    }

    handleAdCreation(ad);
  })

  async function handleAdCreation(ad) {
    try {
      await createAd(ad);
      window.location.href = "/"
      const customEvent = new CustomEvent("ad-create-success", {
        detail: {
          message: "Anuncio publicado correctamente",
          type: "succes",
        }
      });
      document.dispatchEvent(customEvent);
    } catch (error) {
      alert(error.message)
    }
  }

}
