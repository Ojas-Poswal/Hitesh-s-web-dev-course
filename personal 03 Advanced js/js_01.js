function sayHello(){
    console.log("I would like to say hello")
}

setTimeout(()=>{
    sayHello();
},4000)

console.log("chai")
for(let i=0;i<10;i++){
    console.log(i);
}