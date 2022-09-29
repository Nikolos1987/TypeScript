let x=10

let f=()=>{
x=20
return x
}



const p=new Promise(function(resolve,rej){
  f()

})
p.then(console.log(x))