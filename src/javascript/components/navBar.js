import { toggleClass } from "../utils/cssClass";

export function NavBar() {
    const navDisplayElement = document.querySelector(".nav-display");
    const navLinkContainerElement = document.querySelector(".nav-link-container");

    navLinkContainerElement.innerHTML = `<li class="nav-item"><a href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/search-events/">Search Events</a></li>
        <li class="nav-item"><a class="nav-link" href="/saved-events/">Saved Events</a></li>`
    
    navDisplayElement.addEventListener("click", () => toggleClass(navLinkContainerElement, "hidden"));
    
}