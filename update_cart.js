var cartLineItems = [{
    id: 1,
    name: 'marker',
    quantity: 1
    },
    {
        id: 2,
        name: 'duster',
        quantity: 2
    },
    {
        id: 3,
        name: 'scale',
        quantity: 2
    }
];


function updateCart(cartLineItems, id, prop, quantity){
    var item;
    item = cartLineItems.find(function(n){
        return n.id == id;   
    });
    console.log(item);

    item[prop] = quantity; //shld not use item.prop = quantity;
    //item.quantity = quantity;
    //console.log(item);

    return cartLineItems;
}

function updateCartES6(cartLineItems, id, prop, quantity){
    var item;
    item = cartLineItems.find(n => n.id == id);
    console.log(item);

    item[prop] = quantity; //shld not use item.prop = quantity;
    //item.quantity = quantity;
    //console.log(item);

    return cartLineItems;
}

//console.log(updateCart(cartLineItems,2,'quantity',4));
console.log(updateCartES6(cartLineItems,2,'quantity',4));
//console.log(updateCart(cartLineItems,2,'name','pen'));