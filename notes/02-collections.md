# Arrays `[]`

Arrays can contain any data type or combination thereof.

```Javascript
> let myArr = []
undefined
> myArr
[]
> myArr.push(4)
1           // length of array
> myArr
(1) [4]     // length and content of array
> myArr.push("monkey")
2
> myArr.push({})
3
> myArr.push(11, "demogorgon")
5
> myArr
(5) [4, "monkey", Object, 11, "demogorgon"]
```

Array values can be accessed by indices.

```Javascript
> myArr[0]
4
> myArr[4]
"demogorgon"
```

Array values can be changed with the following methods.

## `pop` and `push`

`pop` removes the last item in the list and returns it.

```Javascript
> myArr
(5) [4, "monkey", Object, 11, "demogorgon"]
> myArr.pop()
"demogorgon"
> myArr
(4) [4, "monkey", Object, 11]
```

`push` adds an item to the end of the list.

```Javascript
> myArr.push("Dart")
5
> myArr
(5) [4, "monkey", Object, 11, "Dart"]
```

## `shift` and `unshift`

`shift` removes the first item from the list and returns it.

```Javascript
> myArr.shift()
4
> myArr
(4) ["monkey", Object, 11, "Dart"]
```

`unshift` adds an item to the front of the list.

```Javascript
> myArr.unshift("Hopper")
5
> myArr
(5) ["Hopper", "monkey", Object, 11, "Dart"]
```

# Objects `{}`

<big>
    Everything in Javascript is an object.
</big>

Objects, rather than being a one-dimensional list of values, is a collection of key-value pairs.