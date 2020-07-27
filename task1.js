// function range
function range (a,b){
    let array = []
    for(let i = a; i <= b; i++){
        array.push(i)
    }
    return array
}

console.log(range(1,10))

//function sum first version
function sum (array){
    let summary = 0
    for (arr of array){
        summary += arr
    }
    return summary
}

console.log(sum([1,2,3,4,5]))

//function sum second version

function sum(array) {
    let summary = array.reduce((a,b) => {
        return a + b;
    }, 0)
    return summary
}

console.log(sum([1,2,3,4,5]))

//function sum third version

let summary = [1,2,3,4,5].reduce((a,b)=> a+b )
console.log (summary)

//range2
function range (a,b,c = 1){
    let array = []
    for(let i = a ; i <= b; i += c){
        array.push(i)
    }
    return array
}


console.log(range(1,10,2))