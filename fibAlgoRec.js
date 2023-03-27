let myArr = [0,1];

function fib(x){ 
    if (x === myArr.length) return null
    
    myArr.push(myArr[myArr.length-1] + myArr[myArr.length-2])
    fib(x)
}

fib(8)
console.log(myArr)
