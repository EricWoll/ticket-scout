import { header, footer } from "../../javascript/components/page-persistent";

import { renderWithLiteral } from "../../javascript/utils/templates";

const mainElement = document.querySelector("main");

renderWithLiteral(header(), mainElement);
renderWithLiteral(footer(), mainElement, 'beforeend');