import { createAdController } from "./create-ad/create-ad-controller.js";
import { isUserLoggedIn } from "./utils/auth.js";
import { navbarController } from "./navbar/navbar-controller.js";

if (!isUserLoggedIn()) {
    window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector("#navbar");
    navbarController(navbarContainer);

    const createAdForm = document.querySelector('form');
    createAdController(createAdForm);
})
