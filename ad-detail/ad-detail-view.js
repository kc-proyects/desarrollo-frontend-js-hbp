export function buildAdDetail(ad) {
  const createdAt = new Date(ad.updatedAt);

  return `
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
  `
}

export function buildDeleteButton() {
  const removeButton = document.createElement('button');
  removeButton.textContent = "Borrar anuncio";

  return removeButton;
}
