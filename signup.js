import { signupController } from "./signup/signup-controller.js";
import { navbarController } from "./navbar/navbar-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.querySelector("#navbar");
    navbarController(navbarContainer);

    const signupForm = document.querySelector('form')
    signupController(signupForm)
})
