

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberSt = caseNumberField.value;
    const preCaseNumber = parseInt(caseNumberSt);

    let newCaseNumber;

    if (isIncrease == true) {
        newCaseNumber = preCaseNumber + 1;
    }
    else {
        newCaseNumber = preCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})


/*
it was the beginner step for me .
*/
// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberSt = caseNumberField.value;
//     const preCaseNumber = parseInt(caseNumberSt);

//     const newCaseNumber = preCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;


// })

// document.getElementById('btn-case-minus').addEventListener('click', function () {

//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberSt = caseNumberField.value;
//     const preCaseNumber = parseInt(caseNumberSt);

//     const newCaseNumber = preCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;

// })