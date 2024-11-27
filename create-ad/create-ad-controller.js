import { createAd } from "./create-ad-model.js";

export function createAdController(createAdForm) {
  createAdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const adImage = createAdForm.querySelector("#ad-photo");
    const adTitle= createAdForm.querySelector("#ad-title");
    const adDescription = createAdForm.querySelector("#ad-description");
    
    const adImageValue = adImage.value;
    const adTitleValue = adTitle.value;
    const adDescriptionValue = adDescription.value;

    handleAdCreation(adImageValue, adTitleValue, adDescriptionValue);
  })

  async function handleAdCreation(adImageValue, adTitleValue, adDescriptionValue) {
    try {
      await createAd(adImageValue, adTitleValue, adDescriptionValue);
      window.location.href = "/"
    } catch (error) {
      alert(error.message)
    }
  }

}
