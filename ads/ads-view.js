export const buildAd = (ad) => {
  const newAd = document.createElement('a');
  newAd.setAttribute("href", `/ad-detail.html?id=${ad.id}`);
  const createdAt = new Date(ad.updatedAt)
  newAd.innerHTML = `
    <div>
      <span>usuario: ${ad.user.username} - ${createdAt.toLocaleDateString()}</span>
      <div>
          <img src="${ad.img}" width="500"></img>
      </div>
      <p>${ad.title}</p>
      <p>${ad.price}</p>
      <p>${ad.type}</p>
      <p>${ad.description}</p>
    </div>
  `;
  return newAd;
}

export function buildEmptyAdList() {
  return '<h2>No hay anuncios disponibles</h2>';
}
