const cardNumber = document.querySelector("#number");
const cardValidity = document.querySelector("#valid");
const cardCVV = document.querySelector("#cvv");

cardNumber.addEventListener("input", formatCardNumber);
cardValidity.addEventListener("input", formatCardValidity);
cardCVV.addEventListener("input", formatCVV);

function formatCardNumber(e) {
    cardNumber.maxLength = "19";
    e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/[^\da-z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
        if(cardNumber.value.length == 19) {
            formatCardValidity();
        }
}

// Format Validity
function formatCardValidity(e) {
    cardValidity.focus();
    cardValidity.maxLength = "5";

    if(cardValidity.value.length < 5) {
        cardValidity.value = cardValidity.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/[^\da-z]/g, "")
        .replace(/(.{2})/g, "$1/")
        .trim();
    }

    if(cardValidity.value.length == 5) {
        formatCVV();
    }
}

// Format CVV
function formatCVV() {
    cardCVV.focus();
    cardCVV.maxLength = "3";
    cardCVV.value = cardCVV.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
        .trim();

}

