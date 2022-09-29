import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { getUserData } from "./getUserData.js";
import { localStorage } from "./localstorage.js";
import { Amount } from "./getFavoritesAmount.js";

const getData: { names: string; sorname: string; amount: number } =
  localStorage();

const start = () => {
  window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock(getData.names, getData.sorname, getData.amount);
    getUserData(getData.names);
    Amount(getData.amount);
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast(
      {
        text: "Это пример уведомления. Используйте его при необходимости",
        type: "success",
      },
      {
        name: "Понял",
        handler: () => {
          console.log("Уведомление закрыто");
        },
      }
    );
  });
};

start();

