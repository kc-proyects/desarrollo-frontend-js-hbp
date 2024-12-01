import { adDetailController } from "./ad-detail/ad-detail-controller.js";
import { navbarController } from "./navbar/navbar-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector("#navbar");
    navbarController(navbarContainer);

    const searchParams = new URLSearchParams(window.location.search);
    const adId = searchParams.get("id");
    const adDetailContainer = document.querySelector("#ad-detail");
    adDetailController(adDetailContainer, adId);
});
