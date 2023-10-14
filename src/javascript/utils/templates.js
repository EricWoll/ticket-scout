export function renderWithLiteral(templateFn, parentElement, position = 'afterbegin', clear = false,) {
    if (clear)  {parentElement.innerHTML = '';}
    parentElement.insertAdjacentHTML(position, templateFn);
}

export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}