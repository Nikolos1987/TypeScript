export function randomDate(date1:any, date2:any){
    function getRandomArbitrary(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  
  
    }
  }

  import {data} from "./index.js"
  export function generarationGundomApi(){
let i:number
for(i=0;i<100;i++){
data.push({
    name:`Хатенка${i}`,
    comeDate:randomDate('02/01/2022', '01/12/2022'),
    exitDate:randomDate('02/13/2022', '01/01/2022'),
    price: (Math.floor(Math.random() * 10))*1000,
    location:(Math.random() * 10)*1000,
    likes:false,
    id:i
})
} 

  }