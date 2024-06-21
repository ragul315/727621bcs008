const express = require('express');
const { type } = require('os');
const app = express();
const port = 3000;
const window=10;

let nums = [];

const genRand=()=>Math.floor(Math.random()*100)+1;

const genNumbers =(type) =>{
    switch(type){
        case 'p':
            return genPrime();
        case 'f':
            return genFib();
        case 'e':
            return genEven();
        case 'r':
            return genRand();
        default:
            return null;
    }
}

const calAvg = (nums) =>{
    if (nums.length ===0)
        return 0;
    const sum = nums.reduce((acc,num)=>acc +num , 0);
    return sum/nums.length;
}

const genPrime = (function(){
    let lastPrime =1;
    return function(){
        let c=lastPrime+1;
        while(true){
            if(isPrime(c)){
                lastPrime=c;
                return c;
            }
            c++;
        }
    };
})();

function isPrime(num) {
    for(let i=2,sqrt = Math.sqrt(num);i<=sqrt;i++){
        if(num % i ===0) return false;
    }
    return num>1;
}

const genFib = (function(){
    let a =0,b=1;
    return function(){
        let next = a+b;
        a=b;
        b=next;
        return a;
    };
})();

const genEven = (function(){
    let lastEven =0;
    return function(){
        lastEven+=2;
        return lastEven;
    };
})();

app.get('/numbers/:id', async (req,res)=>{
    const id=req.params.id;
    const mode =['p','f','e','r'];

    if(!mode.includes(id)){
        return res.status(400).json({error: "Invalid number ID"});
    }

    const number = genNumbers(id);

    const bnumber = [...nums];

    if(number!==null&&!nums.includes(number)){
        if (nums.length>=window){
            nums.shift();
        }
        nums.push(number);
    }
    const anumber = [...nums];
    const avg = calAvg(nums);

    res.json({
        bnumber,
        anumber,
        avg
    });

} );

app.listen(port,()=>{
    console.log("listening to port 3000");
})
