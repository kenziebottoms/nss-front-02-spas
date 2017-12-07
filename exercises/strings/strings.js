function reversal(str) {
    return str.split("").reverse().join("");
}

function alphabits(str) {
    return str.split("").sort().join("");
}

function palindrome(str) {
    return str == reversal(str);
}

function print(string, divId) {
    let output = document.getElementById("output");
    document.getElementById(divId).innerHTML = string;
}

function activateEvents() {
    document.getElementById("submit").addEventListener("click", e => {
        let input = document.getElementById("textInput");
        if (input.checkValidity()) {
            print(reversal(input.value), "reversal");
            print(alphabits(input.value), "alphabits");
            print(palindrome(input.value), "palindrome");
        } else {
            alert("Please enter only letters.");
        }
    });
}

activateEvents();