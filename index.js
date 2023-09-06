const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts)



function writeCards(names, eventName) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`); 
    }
    return newArray
}


function countDown(positiveInteger) {
    let i = positiveInteger
    while (i >= 0) {
        console.log(i--)
    }
    return positiveInteger
}

countDown(69)
