import { searchData } from "./searchData.js";
import {favorites } from "./favorites.js"
export function addsearchData(){
   const data=document.querySelector('.addData').addEventListener("click",()=>{
searchData()
favorites()
})

}
 
   
   