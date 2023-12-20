
//Test 1. Returns an array of thank you messages for each name provided to the function

function writeCards(arrStr, event){
    const thankYouMsgs = []
    for(let i =0; i<arrStr.length; i++){
        let outputMesg = `Thank you, ${arrStr[i]}, for the wonderful ${event} gift!`
        thankYouMsgs.push(outputMesg)

        // console.log(thankYouMsgs)
        // debugger
    }

    return thankYouMsgs
}

//Test 2. Invokes console.log once for each number, counting down from the number provided to zero

function countDown(num){
    while(typeof num === 'number' && num >= 0){
        console.log(num--)
    }
}

