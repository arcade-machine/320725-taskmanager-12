import {menuMarkup} from "./view/menu";
import {filterMarkup} from "./view/filter";
import {boardContainerMarkup} from "./view/boardContainer";
import {boardTaskMarkup} from "./view/board";
import {filterListMarkup} from "./view/filterLIst";
import {cardEditMarkup} from "./view/cardEdit";
import {cardMarkup} from "./view/card";
import {loadMoreMarkup} from "./view/loadMore";

import {cardMock, getRandomArrayItem} from "./mocks/task";

const cards = [];
const mainContainer = document.querySelector(`.main`);
const mainControlContainer = mainContainer.querySelector(`.main__control`);

function renderTemplate(container, template, where = `beforeend`, timesToRender = 1) {
  let fragment = ``;
  for (let i = 0; i < timesToRender; i++) {
    fragment += template;
  }
  container.insertAdjacentHTML(where, fragment);
}

let i = 0;
while (i < 15) {
  cards.push(
      cardMock()
  );
  i++;
}

renderTemplate(mainControlContainer, menuMarkup());
renderTemplate(mainControlContainer, filterMarkup(), `afterend`);
renderTemplate(mainContainer, boardContainerMarkup());

const boardContainer = document.querySelector(`.board`);

renderTemplate(boardContainer, filterListMarkup());
renderTemplate(boardContainer, boardTaskMarkup());

const boardTaskContainer = document.querySelector(`.board__tasks`);

renderTemplate(boardTaskContainer, cardEditMarkup(
    getRandomArrayItem(cards)
));
for (let a = 0; a < 4; a++) {
  renderTemplate(boardTaskContainer, cardMarkup(
      getRandomArrayItem(cards)
  ), `beforeend`);
}
renderTemplate(boardContainer, loadMoreMarkup());
