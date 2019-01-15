var numbers = [10,20,30,45,65];

function findEvens(numbers)
{
    var even = [];
    numbers.forEach(function(num){
        if(num % 2 == 0)
        {
            even.push(num);
        }
    });
    return even;
}

function filterEvens(numbers)
{   //es5 
    var results = numbers.filter(function(num){
        return num % 2 ==0 ;    
    });
    return results;
}

function filterEvenES6(numbers)
{
    //es6 () => {}
    var results = numbers.filter(num => num % 2 == 0);
    return results;
}

console.log(findEvens(numbers));
console.log(filterEvens(numbers));
console.log(filterEvenES6(numbers));