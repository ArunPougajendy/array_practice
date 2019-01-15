var numbers = [ 10,15,20,30];
/*
function firstGreateThan( numbers ,num){
    var result;
    for ( i =0; i < numbers.length ; i ++)
    {
        if ( numbers[i] > num){
            result = numbers[i];
            break;
        }
    }
    return result;
}

console.log(firstGreateThan(numbers, 15));*/

function greaterThan(numbers, num){
    var result;
   /* es5
        result= numbers.find(function(n){
        return n > num;
    });
    return result;*/
    //es6
    result = numbers.find(n => n > num);
    return result;
}

console.log(greaterThan(numbers,15));