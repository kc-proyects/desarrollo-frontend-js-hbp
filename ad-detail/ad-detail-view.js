export function buildAdDetail(ad) {
    const createdAt = new Date(ad.updatedAt);

    return `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${ad.img}" width="500" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${ad.title}</h5>
                <p class="card-text">Precio: ${ad.price} €</p>
                <p class="card-text">Tipo: ${ad.type}</p>
                <p class="card-text">${ad.description}</p>
                <p class="card-text"><small class="text-body-secondary">${ad.user.username} - ${createdAt.toLocaleDateString()}</small></p>
            </div>
        
            </div>
        </div>
    </div>`;
}

export function buildDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar anuncio";

    return removeButton;
}
