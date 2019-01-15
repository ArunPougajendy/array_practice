var players = ['virat', 'rahul', 'dravid'];

function insertAt(players, index, ele)
{
    players.splice(index,0,ele);
    //players.splice(index,1,ele);
    //players.splice(index,2,ele);
    return players;
}

console.log(insertAt(players,1,'dhoni'));