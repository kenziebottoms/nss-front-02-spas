// addition
document.getElementById("add").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").value = parseFloat(num1) + parseFloat(num2);
});

// subtraction
document.getElementById("sub").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").value = parseFloat(num1) - parseFloat(num2);
});

// division
document.getElementById("div").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").value = parseFloat(num1) / parseFloat(num2);
});

// multiplication
document.getElementById("mult").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("answer").value = parseFloat(num1) * parseFloat(num2);
});