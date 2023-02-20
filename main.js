const billAmount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given")
const cashGivenDiv=document.querySelector(".cash-given")
const checkButton=document.querySelector("#btn-check")
const message=document.querySelector("#message")
const notesDisplay=document.querySelectorAll(".notes")


cashGivenDiv.style.display="none"
billAmount.value=""

const notes=[2000,500,100,20,10,5,1]

const showMessage=(msg)=>{
    message.style.display="block"
    message.innerText=msg

}

const calculateChange = amount => {
    for (let i=0;i<notes.length;i++){
        const numberOfNotes=Math.trunc(amount/notes[i])
        notesDisplay[i].innerText=numberOfNotes
        amount=amount%notes[i]
    }
}

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

const billAmountEventListener=()=>{
    cashGivenDiv.style.display="block"
}

checkButton.addEventListener("click",checkButtonEventListener)
billAmount.addEventListener("change",billAmountEventListener)



