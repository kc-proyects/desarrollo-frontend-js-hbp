export const buildAd = (ad) => {
  const newAd = document.createElement('a');
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);
  newAd.setAttribute("id", "ad-card");
  const createdAt = new Date(ad.updatedAt)
  newAd.innerHTML = `
  <div class="col">
    <div class="card">
      <img src="${ad.img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${ad.title}</h5>
        <p class="card-text">Precio: ${ad.price} €</p>
        <p class="card-text">Tipo: ${ad.type}</p>
        <p class="card-text">${ad.description}</p>
        <p class="card-text"><small class="text-body-secondary">${ad.user.username} - ${createdAt.toLocaleDateString()}</small></p>
      </div>
    </div>
  </div>
  `;
  return newAd;
}

export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}
