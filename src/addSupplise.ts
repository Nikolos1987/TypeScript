import { renderToast } from "./lib.js"
import { data } from "./index.js";


export function supplises() {
    const button = document.querySelectorAll(".toast-main-action");
    button.forEach(n=>{
       n.addEventListener("click",(event)=>{
       event.target==button[0]?Adddata():Adddata();  
                         

        })
    })
    
    
}
const Adddata=()=>{
    fetch('http://127.0.0.1:5500/src/suppliers/1/db.backup.json')
    .then(response => response.json())
    .then(json =>{
console.log(json)
json.forEach((n)=>{
    data.push(n)
})
renderToast(null,null);

    } )
}