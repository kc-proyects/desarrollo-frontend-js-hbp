import { getAds } from "./ads-model.js";
import { buildAd, buildEmptyAdList } from "./ads-view.js";

function drawAds(ads, adsContainer) {
  if(!ads.length) {
    adsContainer.innerHTML = buildEmptyAdList();
  } else {
    ads.forEach(ad => {
      const newAd = buildAd(ad);
      adsContainer.appendChild(newAd);
    })
  }
}

function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-ads-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent);
}

export async function adsController(adsContainer) {
  const spinner = document.querySelector('.spinner')
  adsContainer.innerHTML = "";

  spinner.classList.toggle('hidden');
  try {
    const ads = await getAds();
    fireEvent("Anuncios cargados correctamente", "success", adsContainer);
    drawAds(ads, adsContainer)
  } catch (error) {
    fireEvent(error.message, "error", adsContainer);
  } finally {
    spinner.classList.toggle('hidden');
  }
}
