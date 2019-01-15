var players = ['virat', 'rahul', 'dravid'];

function deleteAt(players, index)
{
    players.splice(index,1);
    //players.splice(index,2); \\[ 'virat' ]
    return players;
}

console.log(deleteAt(players,1));


var cities = ['Bangalore', 'hosur', 'mangalore', 'tumkur'];

function deleteCity(cities ,city)
{
    var index = cities.indexOf(city);
    if ( index >= 0 )
    {
        cities.splice(index,1);
    }
    return cities;
}

console.log(deleteCity(cities,'tumkur'));