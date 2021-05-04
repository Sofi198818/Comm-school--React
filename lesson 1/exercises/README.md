# ვალიდატორი - ex1.js

დაწერეთ ფუნქცია რომელსაც ექნება 2 პარამეტრი `x` და `y`, ფუნქცია უნდა აბრუნებდეს `boolean`-ს

- `true` იმ შეთხვევაში თუ `x` და `y` მნიშვნელობა ერთმანეთს ემთხვევა
- `false` იმ შემთხვევაში თუ ზემოთ აღწერილი პირობა არ სრულდება

```js
function equals(x, y) {
  // იმპლემენტაცია
}
```

მაგალითად:

```js
equals(5, 5); // true
equals(5, "5"); // false
equals(NaN, NaN); // true
equals(0, -0); // false
equals(-0, -0); // true
```

შეზღუდვები:

1. შეეცადეთ არ გამოიყენოთ `Object.is()`
   hint: `js`-ში `1 / 0 = Infinity`

2. შეეცადეთ არ გამოიყენოთ `Number.isNan()`