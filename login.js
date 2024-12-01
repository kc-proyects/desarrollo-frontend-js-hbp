import { loginController } from "./login/login-controller.js";
import { navbarController } from "./navbar/navbar-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector("#navbar");
    navbarController(navbarContainer);

    const loginForm = document.querySelector("form");
    loginController(loginForm);
});
