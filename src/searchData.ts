
import { favorites} from "./favorites.js"
import { renderSearchStubBlock,renderEmptyOrErrorSearchBlock,renderSearchResultsBlock } from "./search-results.js";
export function searchData(data){
const city:string=document.getElementById('city').value;
const commingEnter:number=document.getElementById('check-in-date').value;
const commingExit:number=document.getElementById('check-out-date').value;
const price:number=document.getElementById('max-price').value;

 const find=data.filter((n)=>n.price==price)



if(find.length>0){
    renderSearchResultsBlock(find)    
}
else{
    renderSearchResultsBlock(data)  
}
}