let array = ["You are the best", "You rock", "The success is coming", "You are beautiful", "After the rain come the sun", "rustbestservers.com is the best rust servers listing"]

const giveItToMeBaby = () => {
    let currentValue
    do {
        currentValue = array[Math.floor(Math.random() * array.length)]
    }
    while (currentValue === giveItToMeBaby.last)
    giveItToMeBaby.last = currentValue
    return currentValue
}

module.exports = giveItToMeBaby