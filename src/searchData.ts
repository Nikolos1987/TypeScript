export function searchData(){
const city:string=document.getElementById('city').value;
const commingEnter:number=document.getElementById('check-in-date').value;
const commingExit:number=document.getElementById('check-out-date').value;
const price:number=document.getElementById('max-price').value;
console.log(city,":город пользователя");
console.log(commingEnter,":Дата заезда");
console.log(commingExit,":Дата выеда"); 
console.log(price,":цена суток");   
}