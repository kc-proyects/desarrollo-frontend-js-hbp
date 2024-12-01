export function buildAuthorizedSession() {
    return `
        <li class="nav-item">
            <a class="nav-link" href="/create-ad.html">Crear Anuncio</a>
        </li>
        <li class="nav-item">
            <button class="nav-link">cerrar sesión</button>
        </li>`;
}

export function buildUnauthorizedSession() {
    return `
        <li class="nav-item">
            <a class="nav-link" href="/login.html">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/signup.html">Signup</a>
        </li>`;
}
