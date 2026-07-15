function* numbersGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = numbersGenerator();
//console.log(gen()) gives error
//console.log(numbersGenerator()) gives Generator object as output
let genTwo = numbersGenerator();

console.log(gen.next().value) //1
console.log(gen.next().value) //2
console.log(gen.next().value) //3
console.log(gen.next().value) //undefined, as there are no more values to yield

console.log(genTwo.next().value) //1
console.log(genTwo.next().value) //2

