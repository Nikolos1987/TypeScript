function randomDate(date1, date2){
  function getRandomArbitrary(min, max) {
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

export function randomDate(date1:any, date2:any){
  function getRandomArbitrary(min, max) {
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

const data=[]
export function generarationGundomApi(){

for(i=0;i<10;i++){
data.push({name:`хатенка${i}`,
comDate:randomDate('02/13/2013', '01/01/2000'),
})

}
  

}