export function renderWithLiteral(templateFn, parentElement, position = 'afterbegin', clear = false,) {
    if (clear)  {parentElement.innerHTML = '';}
    parentElement.insertAdjacentHTML(position, templateFn);
}

export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

export async function loadHeaderFooter() {
    const pagePersistent = await import("../components/page-persistent");
    const navbar = await import("../components/navBar");

    const mainElement = document.querySelector("main");

    renderWithLiteral(pagePersistent.header(), mainElement);
    renderWithLiteral(pagePersistent.footer(), mainElement, 'beforeend');

    navbar.NavBar();
}