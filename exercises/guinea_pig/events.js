let output = document.getElementById("output-target");

// step 1
let article = document.getElementsByTagName('article')[0];
article.addEventListener("click", function(event) {
    output.innerHTML = `You clicked on ${event.target.innerHTML}.`;
});

// step 2
let pageTitle = document.getElementById('page-title');
pageTitle.addEventListener("mouseenter", function() {
    output.innerHTML = `You moved your mouse over the header.`;
});
// step 3
pageTitle.addEventListener("mouseleave", function() {
    output.innerHTML = `You left me!!!`;
});

// step 4
let textInput = document.getElementById("keypress-input");
textInput.addEventListener("keyup", function() {
    output.innerHTML = this.value;
});

let guineaPig = document.getElementById("guinea-pig");

// step 5
document.getElementById("add-color").addEventListener("click", function() {
    guineaPig.className += ' blue';
});
// step 6
document.getElementById("make-large").addEventListener("click", function() {
    guineaPig.className += ' hulked';
});
// step 7
document.getElementById("add-border").addEventListener("click", function() {
    guineaPig.className += ' captured';
});
// step 8
document.getElementById("add-rounding").addEventListener("click", function() {
    guineaPig.className += ' rounded';
});