import {data} from "./index.js"
import { searchData } from "./searchData.js"
import { msg } from "./index.js"
export function favorites(){
     
       let a=document.querySelectorAll(".favorites")
       let datasets:number

       a.forEach(n=>{
        n.addEventListener("click",(event)=>{
             
            datasets=event.target.dataset.number
            let fnd= data.findIndex(n=>n.id==datasets)
       data[fnd].likes?data[fnd].likes=false:data[fnd].likes=true
       console.log(data[fnd]); 
       searchData() 
       favorites()    
          
        })
      
        
       })
    


  
 
}


   
    

