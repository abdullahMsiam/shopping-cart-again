function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalSt = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalSt);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {

    //calculate total 
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountF = parseFloat.taxAmount;
    setTextElementValueById('tax-amount', taxAmount);


    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);




}