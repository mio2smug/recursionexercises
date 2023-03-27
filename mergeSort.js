let myArr = [-1, 7, 0, 1000, 2.5]   
//Should return [-1 , 0 , 2.5 , 7 ,1000] 
//DOesn't work with  arrays of odd number length because there is no direct comparative in the while loop e.g undefined cannot be compared to 2.5



function myPartition(myArr){
    let leftCopy = myArr.slice(0, myArr.length / 2)
    let rightCopy = myArr.slice(myArr.length/2)
    console.log(leftCopy, rightCopy)


    return mergeArr(leftCopy,rightCopy)
}

function mergeArr (leftCopy, rightCopy){
    let mergedCollection = []

    while (leftCopy.length > 0 && rightCopy.length > 0){
        let minValue = leftCopy[0] < rightCopy[0] ? leftCopy : rightCopy
        const mergeElement = minValue.shift();
        mergedCollection.push(mergeElement)
    }

    return mergedCollection.concat(leftCopy,rightCopy)
}


myPartition(myArr)
