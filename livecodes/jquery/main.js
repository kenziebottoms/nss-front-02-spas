$("#result").html("Hello world");

$("#result").click(event => {
    alert("bitch");
});

$.ajax({
    url: "songs.json"
}).done(parse);

$.get("songs.json", parse);

function parse (response) {
    console.log(response);
}