function recursiveFactorial(n){
    if(n === 0) return 1; //base case when n is 0, return 1
    return n * recursiveFactorial(n-1); //recursive case (n! = n * (n-1)!)
}

console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(1)); //1
console.log(recursiveFactorial(5)); //120
console.log(recursiveFactorial(10)); //3628800

//Big O analysis
//time complexity = O(n) linear time complexity due to n recursive calls
//space complexity = O(n) linear space complexity due to the call stack in recursion










// -----------------------------------------------------
// tamtin


let secretNumber = Math.trunc(Math.random() *20) +1;
document.querySelector('.number').textContent = number;

let score = 20;


if(!guess){
document.querySelector('.message').textContent = "no";
}else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'num';

}else if(guess > secretNumber) {
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('score').textContent = score;
}
else if(guess < secretNumber){
    document.querySelector('.message').textContent = "too low";
    score-- ;
    document.querySelector('score').textContent = score;
}


document.querySelector('body').style.backgroundColor= '#60b347';
document.querySelector('.number').style.width = '30rem'

const againbtn = document.querySelector('.again') ;

againbtn.addEventListener("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message')


})
if(score < highScore){
    highScore = score;

}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// SPREAD, because on RIGHT side of = 
const arr = [1,2,3,...[5,6]]; 

// REST, because on LEFT side of =
const [a, b,...others] = [1,3,4,5,6,7,8];

const add = function(...num) {
    let sum = 0;
    for(let i = 0; i<num;i++) sum += num[i]

}

const restaurant = new Map()


(function(){ //clouser and iifi
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color  = 'blue'
    })();
})