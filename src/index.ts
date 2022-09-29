import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { getUserData } from "./getUserData.js";
import { localStorage } from "./localstorage.js";
import { Amount } from "./getFavoritesAmount.js";

const getData:{
  names: string;
   sorname: string;
    amount: number
} [] =
  localStorage();

const start = () => {
  window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock(getData[0].names, getData[0].sorname, getData[0].amount);
    getUserData(getData[0].names);
    Amount(getData[0].amount);
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

