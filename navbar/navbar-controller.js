import { buildNavbar } from "./navbar-view.js"

export function navbarController(navbarContainer) {
    navbarContainer.innerHTML = buildNavbar();
}
