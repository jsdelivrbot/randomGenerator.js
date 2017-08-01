//try executing this code using nodejs 
//or follow the example in 'colorful.html'

//linear congruential generator
function randomGenerator(){

    let seed = new Date().getSeconds();
    let a = 13.2;
    let b = 21.5;
    let m = 32.7;
    let x0 = 23.236  + seed;
    let output = x0;

    function next(){

        output = ((a * output) + b) % m;

        return output;
    }

    return {
        next: next
    };
}
/*
//how to use?
let someRandomNumber = randomGenerator();

for(let i = 0; i < 10; i++)
    console.log(someRandomNumber.next());
*/