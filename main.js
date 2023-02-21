const billAmount=document.querySelector("#bill-amount")              //bill amount input field

const cashGiven=document.querySelector("#cash-given")                //cash given input field

const cashGivenDiv=document.querySelector(".cash-given")            // both cash given label and input field

const checkButton=document.querySelector("#btn-check")              // check button

const message=document.querySelector("#message")                    // message element

const notesDisplay=document.querySelectorAll(".notes")             // elements where number of notes will be shown in change returned

// all available notes' buttons

const twoThousand =document.querySelector("#btn-twothousand")
const fiveHundred=document.querySelector("#btn-fivehundred")
const hundred=document.querySelector("#btn-hundred")
const twenty=document.querySelector("#btn-twenty")
const ten=document.querySelector("#btn-ten")
const five=document.querySelector("#btn-five")
const one=document.querySelector("#btn-one")

const availableNotes={}                          //object to store notes selected by user as key with corresponding notes display element as value

cashGivenDiv.style.display="none"                //to hide cash-given until user adds a bill amount

billAmount.value=""                               // to reset bill amount when page is refreshed

const showMessage=(msg)=>{
    message.style.display="block"
    message.innerText=msg
}

const calculateChange = amount => {
    const notes=Object.keys(availableNotes).sort(function(a,b){return b-a})  //storing all notes selected by using in an array and sorting it in descending order
    let totalAmountReturned=0
    for (let i=0;i<notes.length;i++){
        const numberOfNotes=Math.trunc(amount/notes[i])
        totalAmountReturned=totalAmountReturned+(numberOfNotes*notes[i])
        availableNotes[notes[i]].innerText=numberOfNotes
        amount=amount%notes[i]
    }
    const remainingChange=(Number(cashGiven.value)-Number(billAmount.value)-totalAmountReturned)
    if (remainingChange>0){
        showMessage(`With the available notes you couldn't return the total change. Remaining change to be returned: ${remainingChange}`)
    }
    
}


// event listeners for notes' buttons (Note: tried for loop but callback function didn't recognize 'i')

twoThousand.addEventListener("click",(event)=>{
    twoThousand.style.display="none"
    availableNotes[Number(twoThousand.innerText)]=notesDisplay[0]

})
fiveHundred.addEventListener("click",()=>{
    fiveHundred.style.display="none"
    availableNotes[Number(fiveHundred.innerText)]=notesDisplay[1]

})
hundred.addEventListener("click",()=>{
    hundred.style.display="none"
    availableNotes[Number(hundred.innerText)]=notesDisplay[2]

})
twenty.addEventListener("click",()=>{
    twenty.style.display="none"
    availableNotes[Number(twenty.innerText)]=notesDisplay[3]

})
ten.addEventListener("click",()=>{
    ten.style.display="none"
    availableNotes[Number(ten.innerText)]=notesDisplay[4]

})
five.addEventListener("click",()=>{
    five.style.display="none"
    availableNotes[Number(five.innerText)]=notesDisplay[5]

})
one.addEventListener("click",()=>{
    one.style.display="none"
    availableNotes[Number(one.innerText)]=notesDisplay[6]

})

// event listener for check button

const checkButtonEventListener=()=>{
    message.style.display="none"
    if (Number(billAmount.value)>0){
        if (Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned=Number(cashGiven.value)-Number(billAmount.value)
            calculateChange(amountToBeReturned)
        }else{
            showMessage("Cash given is less than bill amount.")
        }
    }else{
        showMessage("Please enter valid bill amount")
    }
}

checkButton.addEventListener("click",checkButtonEventListener)

//event listener for bill amount(bonus part)

const billAmountEventListener=()=>{
    cashGivenDiv.style.display="block"
}

billAmount.addEventListener("change",billAmountEventListener)








