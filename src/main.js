import {menuMarkup} from "./view/menu";
import {filterMarkup} from "./view/filter";
import {boardContainerMarkup} from "./view/boardContainer";
import {boardTaskMarkup} from "./view/board";
import {filterListMarkup} from "./view/filterLIst";
import {cardEditMarkup} from "./view/cardEdit";
import {cardMarkup} from "./view/card";
import {loadMoreMarkup} from "./view/loadMore";

const mainContainer = document.querySelector(`.main`);
const mainControlContainer = mainContainer.querySelector(`.main__control`);

function renderTemplate(container, template, where = `beforeend`, timesToRender = 1) {
  let fragment = ``;
  for (let i = 0; i < timesToRender; i++) {
    fragment += template;
  }
  container.insertAdjacentHTML(where, fragment);
}

renderTemplate(mainControlContainer, menuMarkup());
renderTemplate(mainControlContainer, filterMarkup(), `afterend`);
renderTemplate(mainContainer, boardContainerMarkup());

const boardContainer = document.querySelector(`.board`);

renderTemplate(boardContainer, filterListMarkup());
renderTemplate(boardContainer, boardTaskMarkup());

const boardTaskContainer = document.querySelector(`.board__tasks`);

renderTemplate(boardTaskContainer, cardEditMarkup());
renderTemplate(boardTaskContainer, cardMarkup(), `beforeend`, 3);
renderTemplate(boardContainer, loadMoreMarkup());
