import { searchData } from "./searchData.js"
import { addsearchData } from "./addSearchData.js";
export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}
interface msg{
text:string;
type:string;
}
export function renderToast(message:msg|null, action:{name:string,handler:()=>void}|null) {
  let messageText = "";

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || "Закрыть"}</button>
      </div>
    `;
  }

  renderBlock("toast-block", messageText);

  const button = document.getElementById("toast-main-action");
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null,null);
    };
  }
  searchData()
  addsearchData()

}
