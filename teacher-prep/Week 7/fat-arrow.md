### 1. JavaScript scope

#### Global scope

```js
var a = 1;

console.log(window.a === a); // true
```

#### Function scope

```js
function foo() {
  var a = 2;
}

console.log(a); // throws reference error
```

```js
var a = 1;

function foo() {
  var a = 2;
  console.log(a);
}

console.log(a); // 1
foo(); // 2
```

#### Block scope (let, var)

```js
if (true) {
  const a = 1;
}

console.log(a); // throws reference error
```

### 2. What is lexical scope?

> Lexical scope is scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.

- Kyle Simpson

### 3. What is dynamic scope?

> Dynamic scope, by contrast, doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from. In other words, the scope chain is based on the call-stack, not the nesting of scopes in code.

- Kyle Simpson

### 4. Javascript does not have dynamic scope

```js
var a = 2;

function foo() {
  console.log( a ); // 2
}

function bar() {
  var a = 3;
  foo();
}

bar(); // prints 2; not 3
```

### 5. Except JavaScript has `this` which can be used as dynamic scope

When you call a function, you do the equivalent of `function.call(thisArg, arg1, arg2, ...)`.

```js
function foo () {
  console.log(this);
}

foo();
foo.call(window); // same as above
```

```js
function sum (a, b) {
  return a + b;
}

sum(1, 2); // prints 3
sum.call(window, 1, 2); // same as above
```

```js
var obj = {
  a: 1,
  sum: function(b) {
    return this.a + b;
  }
}

obj.sum(2); // prints 3
obj.sum.call(obj, 2); // same as above

var a = 2;
obj.sum.call(window, 2); // oups
```

```js
function Dawg() {
  this.angerLevel = Math.floor(Math.random() * 10);
  
  setInterval(function () {
    if (!this.angerLevel) {
      console.log('Nice doggie ❤');
    } else {
      console.log('Angry dog! G' + Array(this.angerLevel).fill('r').join('')); 
    }
  }, 1000)
}

new Dawg();
```

```js
function Dawg() {
  this.angerLevel = Math.floor(Math.random() * 10);
  
  setInterval(() => {
    if (!this.angerLevel) {
      console.log('Nice doggie! ❤');
    } else {
      console.log('Angry dog! G' + Array(this.angerLevel).fill('r').join('')); 
    }
  }, 1000)
}

new Dawg();
```

#### [Source](https://gist.github.com/jmike/a10507cfc607c3ad6da0cc11ea13b212)