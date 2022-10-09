import { searchData } from "./searchData.js"
import { addsearchData } from "./addSearchData.js";
import {favorites} from "./favorites.js"
import { supplises } from "./addSupplise.js";
export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);

  element.innerHTML = html;
  supplises()



  
 
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
        <button class="toast-main-action" data-number="1">поставщик данных 1</button>
        <button class="toast-main-action" data-number="2">поставщик данных 2</button>
      </div>
    `;
  }

  renderBlock("toast-block", messageText);

  const button = document.getElementById("toast-main-action");
console.log(button);

  if (button != null) {
    button.onclick = function () {
      
      if (action != null && action.handler != null) {
        action.handler();
      }
      console.log("111");
      
      renderToast(null,null);
     
      
    };
  }
  addsearchData()
 

}
