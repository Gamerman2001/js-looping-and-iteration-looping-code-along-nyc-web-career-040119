// Code your solutions in this file
function writeCards(array) {
    let shop = []
        for (let i = 0; i < array.length; ++i) {
            shop.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
        }
    return shop
}

function countdown(number) {
    let countdown = 0;
    while (number >= countdown) {
        console.log(number)
        number--
    }
}