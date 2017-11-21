## Ternary Operator

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator):

```Javascript
condition ? expr1 : expr2
```

If the person is older than 21, they are a legal drinker (in the US).

```Javascript
let age = 19;
let legal = (age > 21) ? true : false;  // evals to false
```