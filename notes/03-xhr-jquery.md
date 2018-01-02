These two code snippets are practically identical.

### Vanilla JS:

```Javascript
let req = new XMLHttpRequest();
req.addEventListener("load", function() {
    let data = JSON.parse(this.responseText);
});
req.open("GET", "json.json");
req.send();
```

### jQuery

```Javascript
$.ajax({
    // type: "GET",
    url: "json.json"
}).done(parseResponse);

const parseResponse = data => {
    console.log(data);
};
```

This can also be done with the shorthand method `$.get()`.

```Javascript
$.get("json.json", parseResponse);
```