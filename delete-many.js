var cities = ['Bangalore', 'hosur', 'mangalore', 'tumkur'];

function deleteMany(cities,names)
{
    debugger;
    names.forEach(function(name){
       index = cities.indexOf(name);
       debugger;
       if ( index >= 0)
       {
            cities.splice(index,1);
            debugger;
       }
    })
    return cities;
}

console.log(deleteMany(cities,['hosur', 'tumkur']));