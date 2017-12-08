# `XMLHttpRequest()`

### Sending the smoke signal

```Javascript
let request = new XMLHttpRequest();
request.open("GET", "data.json", true);
// GET can also be POST, PUT, DELETE, PATCH
request.send();
```

### Watching for a response and using the info

```Javascript
request.addEventListener("load", onLoadCallback);
request.addEventListener("error", errorCallback);

function onLoadCallback() {
    let data = JSON.parse(event.target.responseText);
}
function errorCallback() {
    console.log("oh shit");
}
```

### CRUD

`GET`, `POST`, `PUT`, `DELETE`, and `PATCH` requests make up a CRUD application: **Create, Retrieve, Update, Destroy**.