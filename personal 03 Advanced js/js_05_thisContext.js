const anything = {
    name : "Ojas",
    greet(){
        console.log(`Hello , i am ${this.name}`)
    }
}

anything.greet()

let greetFunction = anything.greet();
greetFunction() // this will be undefined because the context of this is lost when the function is called without an object

let greetFunction2 = anything.greet.bind({name : "Chai"}) // bind creates a new function with the specified this context
greetFunction2() // this will log "Hello , i am Chai" because the context of this is bound to the new object