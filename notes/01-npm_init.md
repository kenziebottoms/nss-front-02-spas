# Using Grunt

## Setup

### Initialize an `npm` project for use with Grunt

In the root of your project folder:

```shell
> npm init -y
```

`-y` say yes to every question `npm init` would otherwise ask you.

### Install necessary `npm` modules

```shell
> npm install grunt grunt-contrib-jshint grunt-contrib-sass grunt-contrib-watch matchdep grunt-browserify
```

### Configure `Gruntfile.js`

If using JSLint, SASS, and Browserify, clone sample [`Gruntfile.js`](https://gist.github.com/kenziebottoms/dc4a300447652b63a29bc489670992e8).

### Preempt your JS

If you've already written any Javascript, add this to the beginning of every file.

```Javascript
"use strict";
```

### Wing it

```shell
> grunt
```

## Troubleshooting

#### `sass:dist: The "path" argument must be of type string`

```shell
Running "sass:dist" (sass) task
Warning: The "path" argument must be of type string Use --force to continue.
```

Make sure your SASS file has the `.scss` extension.