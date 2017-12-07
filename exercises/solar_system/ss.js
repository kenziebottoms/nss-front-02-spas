let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

// Use forEach() method to add the name of each planet to #planets
const el = document.getElementById("planets");
planets.forEach(planet => {
    el.innerHTML += `${planet}<br>`;
})

// Use map() to create an array where the first letter of each planet is capitalized
let caps = planets.map(capitalize);
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(caps);

// Use filter() to create an array with planets with the letter 'e'
let esOnly = planets.filter(str => str.indexOf("e") >= 0);
console.log(esOnly);

// Use reduce() to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let sentence = words.reduce((x, y) => `${x} ${y}`);
console.log(sentence);