import { searchData } from "./searchData.js";
import { msg } from "./index.js";
import {favorites } from "./favorites.js"
export function addsearchData(){
   const data=document.querySelector('.addData').addEventListener("click",()=>{
     
      fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data =>{
console.log(data)
searchData(data)
favorites(data)

      } )


})

}
 
   
   