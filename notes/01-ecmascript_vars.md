## `var`

```Javascript
> var x = 4;        // This variable is global.
undefined
> x
4
```

```Javascript
> {
>     var x = 4;    // So is this one.
> }
undefined
> x
4
```

## `let`

If you use `let`, `x` is still 4 outside these braces.
```Javascript
> {
>     let x = 3;    // This is not global.
> }
undefined
> x
4
```

## `const`

`const` affects mutability rather than scope.

```Javascript
> const name = "Joe";
undefined
> name = "Larry";
```
<aside class="warning">
    Uncaught TypeError: Assignment to constant variable.
</aside>