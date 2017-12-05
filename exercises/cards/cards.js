const createButton = document.getElementById("createButton")
const textarea = document.getElementById("content");
const mainContent = document.getElementById("main-content");

addCreateListener();

function getCard(content) {
    let card = `<div class="card">
        <p>${content}</p>
        <input class="deleteButton" type="button" value="Delete">
    </div>`;
    return card;
}
function addCard(content, location) {
    let card = getCard(content);
    location.innerHTML += card;
    addDeleteListeners();
}

function addCreateListener() {
    createButton.addEventListener("click", e => {
        e.preventDefault();
        let content = textarea.value;
        addCard(content, mainContent);
    });
}
function addDeleteListeners() {
    mainContent.addEventListener("click", event => {
        let clickedEl = event.srcElement;
        clickedEl.parentElement.remove();
    });
}