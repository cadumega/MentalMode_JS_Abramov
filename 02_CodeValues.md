# 2- Code and Values

Números e strings são valores. Objetos e funções também são valores.

# Primitive Values

---

**Primitive Values** are numbers and strings, among other things. Open your browser's console and print these primitive values using `console.log()`:

```
console.log(2);
console.log("hello");
console.log(undefined);
```

All primitive values have something in common. **There’s nothing I can do in my code that would affect them.** This sounds a bit vague, so we’ll explore what this means concretely in the next module. For now, I’ll say that primitive values are like stars — cold and distant, but always there when I need them.

---

*That’s the first kind of values.*

---

---

# Objects and Functions

---

**Objects and Functions** are also values, but they are not primitive. This makes them very special. Go ahead and log a few of them to the browser console:

```
console.log({});
console.log([]);
console.log(x => x * 2);
```

---

Notice how the browser console displays them differently from the primitive values. Some browsers might display an arrow before them, or do something special when you click them. If you have a few different browsers installed (e.g. Chrome and Firefox), compare how they visualize objects and functions.

---

Objects and functions are special because **I can manipulate them from my code**. For example, I can connect them to other values. This is rather vague — so we’ll refine this idea in a later module. For now, I can say that if primitive values are like distant stars, then objects and functions are more like rocks floating nearby my code. They’re close enough that I can manipulate them.

---

*And that’s the second kind of values.*

---

---

# Expressions

---

There are many questions JavaScript can’t answer. If you want to know whether it’s better to confess your true feelings to your best friend or to keep waiting until you both turn into skeletons, JavaScript won’t be of much help.

---

But there are some questions that JavaScript would be *delighted* to answer. These questions have a special name — they are called *expressions*.

---

If we “ask” the expression `2 + 2`, JavaScript will “answer” with the value `4`.

---

console.log(2 + 2); // 4

Expressions are questions that JavaScript can answer. JavaScript answers expressions in the only way it knows how — with values.

If the word “expression” confuses you, think of it as a piece of code that *expresses* a value. You might hear people say that `2 + 2` “results in” or “evaluates to” `4`. These are all different ways to say the same thing.

---

We ask JavaScript `2 + 2`, and it answers with `4`. **Expressions always result in a single value.** Now we know enough about expressions to be dangerous!

---

I previously said that there are many types of JavaScript values: numbers, strings, objects, and so on. How do we know any particular value’s type?

---

*This sounds like a question. Do we dare to ask it?*

---

# Checking a Type

---

At first, all values in the JavaScript cosmos might look the same — bright dots in the sky. But if you look closely, you’ll realize there are fewer than ten different types of values. Values of the same type behave in similar ways.

---

If we want to check a value’s type, we can ask it with the `typeof` operator. JavaScript will answer our question with one of the predetermined string values, such as `"number"`, `"string"`, or `"object"`.

```
console.log(typeof(2)); // "number"
console.log(typeof("hello")); // "string"
console.log(typeof(undefined)); // "undefined"
```

---

Here, `typeof(2)` is an expression — and it results in the `"number"` value.

---

Strictly saying, using parens isn’t required with `typeof`. For example, `typeof 2` would work just as fine as `typeof(2)`. However, sometimes parens are required to avoid an ambiguity. One of the cases below would break if we omitted the parens after `typeof`. Try to guess which one it is:

---

```
console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(x => x * 2)); // "function"
```

Now take another look at the last three examples — this time with close attention to their results. Did you find any of these results surprising? Why?

---

# Types of Values

---

As an aspiring astronomer, you might want to know about *every* type of value that can be observed in the JavaScript sky. After almost twenty five years of studying JavaScript, the scientists have only discovered nine such types:

---

# Primitive Values

---

- **Undefined** (`undefined`), used for unintentionally missing values.
- **Null** (`null`), used for intentionally missing values.
- **Booleans** (`true` and `false`), used for logical operations.
- **Numbers** (`100`, `3.14`, and others), used for math calculations.
- **Strings** (`"hello"`, `"abracadabra"`, and others), used for text.
- **Symbols** (uncommon), used to hide implementation details.
- **BigInts** (uncommon and new), used for math on big numbers.

# Objects and Functions

---

- **Objects** (`{}` and others), used to group related data and code.
- **Functions** (`x => x * 2` and others), used to refer to code.

---

---

# No Other Types

---

You might ask: “But what about other types I have used, like arrays?”

---

**In JavaScript, there are no other fundamental value types other than the ones we have just enumerated.** The rest are all objects! For example, even arrays, dates, and regular expressions fundamentally *are* objects in JavaScript:

---

```
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/(hello|goodbye)/)); // "object"
```

“I see,” you might reply, “this is because *everything* is an object!” Alas, this is a popular urban legend, but it’s not true. Although code like `"hi".toUpperCase()` makes `"hi"` seem like an object, this is nothing but an illusion. JavaScript creates a wrapper object when you do this, and then immediately discards it.

---

It’s fine if this mechanism doesn’t quite click yet. **For now, you only need to remember that primitive values, such as numbers and strings, are *not* objects.**

# Recap

---

Let’s recap what we know so far:

---

1. **There are values, and then there’s everything else.** We can think of values as different things “floating” in our JavaScript universe. They don’t exist *inside* our code, but we can refer to them from our code.
2. **There are two categories of values: there are *Primitive Values*, and then there are *Objects and Functions*.** In total, there are nine separate types. Each type serves a specific purpose, but some are rarely used.
3. **Some values are lonely.** For example, `null` is the only value of the Null type, and `undefined` is the only value of the Undefined type. As we will learn later, these two lonely values are quite the troublemakers!
4. **We can ask questions with expressions.** JavaScript will answer to us with values. For example, the `2 + 2` expression is answered with `4`.
5. **We can inspect the type of something by wrapping it in a `typeof` expression.** For example, `typeof(4)` is the string value `"number"`.

---

---

Answer: typeof(value) === "date" is always false. 

This is because "date" is not one of the possible typeof results. Dates are not one of the primitive types (unlike numbers and booleans), and they are also not functions. So typeof for a date is always going to be "object".

null is the value that "lies" about its type. 

Concretely, typeof(null) is "object" even though null is not an object. Null is a primitive value. (Here’s a historical note on how that happened.) This is a very old bug in JavaScript. It cannot be fixed because it would break existing websites. 

You might ask: isn’t typeof([]) === "object" a bug? No. Arrays aren’t primitive, so they are objects! Unlike null, they’re telling the truth.

typeof(typeof(value)) is always "string". 

Here’s why. We know typeof(value) always gives us one of the predetermined strings: "undefined", "boolean", "number", and so on. Predetermined strings. So typeof any of them is "string". Because they’re strings!