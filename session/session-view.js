export function buildAuthorizedSession() {
  return `
    <a href="/create-ad.html">Crear Anuncio</a>
    <button>cerrar sesión</button>
  `
}

export function buildUnauthorizedSession() {
  return `
    <a href="/login.html">Login</a>
    <a href="/signup.html">Signup</a>
  `
}
