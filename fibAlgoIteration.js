let myNum = 8 //Whatever User input goes here

function myVal (num){
    let myArray = [0,1];
    for (let i = 2; i<num; i++){
        myArray[i] = myArray[i-1] + myArray[i-2] 
    }
    console.log(myArray)
}

myVal(myNum)
//Works for any N positive number
