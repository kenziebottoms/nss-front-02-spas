document.getElementById("createButton").addEventListener("click", e => {
    e.preventDefault();
    let textarea = document.getElementById("content");
    let content = textarea.value;
    let mainContent = document.getElementById("main-content");
    addCard(content, mainContent);
});

function addCard(content, location) {
    let card = `<div class="card">
        <p>${content}</p>
        <input class="deleteButton" type="button" value="Delete">
    </div>`;
    location.innerHTML += card;
    let allDeleteButtons = document.getElementsByClassName("deleteButton");
    let deleteButton = allDeleteButtons[allDeleteButtons.length-1];
    deleteButton.addEventListener("click", () => {
        console.log(allDeleteButtons.length-1);
        // this only works on the most recently added button; why????
    });
}