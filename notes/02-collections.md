# Arrays `[]`

Arrays can contain any data type or combination thereof.

```Javascript
> let myArr = []
> myArr
[]
> myArr.push(4)
> myArr
(1) [4]     // length and content of array
> myArr.push("monkey")
> myArr.push({})
> myArr.push(11, "demogorgon")
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
> myArr
(5) [4, "monkey", Object, 11, "Dart"]
```

## `shift` and `unshift`

`shift` removes the first item from the list and returns it.

```Javascript
> myArr.shift()
> myArr
(4) ["monkey", Object, 11, "Dart"]
```

`unshift` adds an item to the front of the list.

```Javascript
> myArr.unshift("Hopper")
> myArr
(5) ["Hopper", "monkey", Object, 11, "Dart"]
```

# Objects `{}`

#### Everything in Javascript is an object.

Unlike lists, which are lists of values, objects are collections of key-value pairs.

```Javascript
> let student = {
>     firstName: 'Kenzie',  // key: firstName; value: 'Kenzie'
>     lastName: 'Bottoms',
> }
> student
Object {firstName: "Kenzie", lastName: "Bottoms}
```

Object key-value pairs are called properties, and can be accessed with bracket notation or dot notation, but not with indices.

```Javascript
> student.firstName
"Kenzie"
> student["lastName"]
"Bottoms"
> let ln = "lastName"
> student[ln]
"Bottoms"
> student[0]
undefined
```

You can add new properties to an object after it has been declared.

```Javascript
> student.age = 23
23
> student.age
23
```