//function reverseArray

function reverseArray(array){
    return array.reverse()
}
console.log(reverseArray([1,2,3]))

function reverse(array){
    let newArray = []
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i])
    }
    return newArray
}

console.log(reverse([1,2,3,4,5]))

//function reverseArrayInPlace

let array = [1,2,4]

function reverse (array){
    let arrayLength = array.length;
    let newArray = [];

    while(arrayLength--) {
        newArray.push(array[arrayLength]);
    }

    return newArray
}
console.log(reverse(array))

//
function reverseArrayInPlace(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}


function every(array,func){

    for ( let i = 0; i < array.length; i++) {
        if( !func(array[i])) return false
    }

    return true
}

console.log(every([NaN, NaN, NaN], isNaN));

console.log(every([NaN, NaN, 4], isNaN));

function some (array,func) {
    for(let i = 0; i < array.length; i++){
        if(func(array[i])) return true;
    }

    return false
}

console.log(some([NaN, 3, 4], isNaN));

console.log(some([2, 3, 4], isNaN));