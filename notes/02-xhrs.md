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

### Extra information about the request

```Javascript
function onLoadCallback() {
    // `{ "songs" : [ "title" : "Never Gonna Give You Up", ... ] }`
    let response = event.target.repsonseText;

    // interpreted object representation of above string
    let data = JSON.parse(response);

    // 200 (good), 404 (not found), etc.
    let status = event.target.status;

    // "OK", "Not Found", etc.
    let statusText = event.target.statusText;

    // 4: done, 3: loading, 2: received, 1: opened, 0: unsent
    let readyState = event.target.readyState;
}
```

### CRUD

`GET`, `POST`, `PUT`, `DELETE`, and `PATCH` requests make up a CRUD application: **Create, Retrieve, Update, Destroy**.