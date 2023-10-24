export function renderWithLiteral(
    templateFn,
    parentElement,
    position = 'afterbegin',
    clear = false
) {
    if (clear) {
        parentElement.innerHTML = '';
    }
    parentElement.insertAdjacentHTML(position, templateFn);
}

export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

export async function loadHeaderFooter() {
    const pagePersistent = await import('../components/header-footer');
    const navbar = await import('../components/navBar');

    const mainElement = document.querySelector('body');

    renderWithLiteral(pagePersistent.header(), mainElement);
    renderWithLiteral(pagePersistent.footer(), mainElement, 'beforeend');

    const navContainer = document.querySelector('.nav-link-container');

    if (window.innerWidth < 600) {
        navContainer.classList.add('hidden');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 600) {
            navContainer.classList.remove('hidden');
        }
    });

    navbar.NavBar();
}
