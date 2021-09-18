# 3- Values and Variables

**But you can’t.**

Here’s an important bit that we need to add to our mental model. A string is a primitive value. And that means a great deal!

---

**All primitive values are immutable.** “Immutable” is a fancy Latin way to say “unchangeable”. Read-only. You can’t mess with primitive values. At all.

---

If you attempt to set a property on a primitive value, be it a number or a string or something else, JavaScript won’t let you do that. Whether it will silently refuse your request or error depends on [which mode](https://el2.convertkit-mail.com/c/27uv68g7pda9u7x7q6i3/38uphdu9zze92e/aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvU3RyaWN0X21vZGU=) your code is running in.

---

But stay assured that this will never work:

---

```jsx
let fifty = 50;
fifty.shades = 'gray'; // No!
```

Like any number, 50 is a primitive value, and you can’t set properties on it.

In my JavaScript universe, all primitive values exist in the outer circle further from my code — like distant stars. This reminds me that even though I can refer to them from my code, I can’t change them. They stay what they *are*.

---


---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7751c52a-32d2-4aa1-bd22-3acee582be06/Untitled.png)

# A Contradiction?

---

I have just demonstrated that primitive values are read-only — or, in the parlance of our times, immutable. Here’s a snippet to test your mental model.

---

```jsx
let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // The Kraken
```

If you thought I was trying to mess with your head, you were completely right! The answer is `"The Kraken"` — immutability of strings doesn’t play a role.

---

Don’t despair if you got it wrong and haven’t seen it coming! These two last examples may definitely seem like they’re contradicting each other.

---

*This is an important realization.*

---

When you’re new to a language, it might be tempting to ignore contradictions. After all, if you chase every contradiction, you’ll get into a rabbit hole too deep to learn anything. But now that you are committed to building a mental model, you need to question contradictions. They reveal gaps in mental models.

---

# Variables Are Wires

Let’s look at this example again.

```jsx
let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // The Kraken
```

We know that string values can’t change because they are primitive. But the pet variable does change to "The Kraken". What’s up with that?

This might seem like it’s a contradiction, but it’s not. We only said it’s the primitive values that can’t change. We didn’t say anything about variables!
Pode parecer uma contradição, mas não é. Nós apenas dissemos que são os valores primitivos que não podem mudar. Não dissemos nada sobre variáveis!

As we refine our mental model, we might need to untangle related concepts.

---

**Variables are not values.**

---

***Variables point to values.***

---

In my universe, a variable is a wire. It has two ends and a direction: it starts from a name in my code and it ends pointing at some value in my universe.

---

For example, I can point the `pet` variable at the `"Narwhal"` value:

---

```jsx
let pet = 'Narwhal';
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a1a1da5e-1b87-4413-bbe3-7c2e79d9353c/Untitled.png)

There are two things I can do to a variable after that.

# Assigning a Value to a Variable

---

One thing I can do is to *assign* some other value to my variable:

Uma coisa que posso fazer é atribuir algum outro valor à minha variável

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6991d830-f81f-4174-8fea-c187046e3fb8/Untitled.png)

All I am doing here is instructing JavaScript to point the “wire” on the left side (my `pet` variable) at the value on the right side (`'The Kraken'`). It will keep pointing at that value unless I re-assign it again later.

---

Note that I can’t just put *anything* on the left side:

---

The left side of an assignment must be a “wire”. For now, we only know that variables are “wires”. But there is another kind of “wire” we’ll talk about in a later module. Perhaps, you can guess what it is? (Hint: it involves square brackets or a dot, and we’ve already seen it a couple of times.)

The right side of an assignment must be an expression. It can be something simple, like 2 or 'hello', or a more complicated expression — for example:

```jsx
pet = count + ' Dalmatians';
```

Here, count + ' Dalmatians' is an expression — a question to JavaScript. JavaScript will answer it with a value (for example, "101 Dalmatians"). From now on, the pet “wire” will start pointing to that value.
Aqui, count + 'Dálmatas' é uma expressão - uma pergunta para JavaScript. JavaScript responderá com um valor (por exemplo, "101 Dálmatas"). A partir de agora, o “fio” de estimação começará a apontar para esse valor.

If the right side must be an expression, does this mean that numbers like 2 or strings like 'The Kraken' written in code are also expressions? Yes! Such expressions are called literals — because we literally write down their values.

# Reading a Value of a Variable

I can also read the value of variable — for example, to log it:

```jsx
console.log(pet);
```

That’s hardly surprising.

---

But note that it is not the `pet` *variable* that we pass to `console.log`. We might say that colloquially, but we can’t really pass *variables* to functions. We pass the current *value* of the `pet` variable. How does this work?

---

It turns out that a variable name like `pet` can serve as an expression too! When we write `pet`, we’re asking JavaScript a question: “What is the current value of `pet`?” To answer our question, JavaScript follows the `pet`’s “wire”, and gives us back the value at the end of this “wire”.

---

So the same expression can give us different values at different times!

---

# Nouns and Verbs

---

Who cares if you say “pass a variable” or “pass a value”? Isn’t the difference hopelessly pedantic? I certainly don’t encourage interrupting your colleagues to correct them — or even yourself. That would be a waste of everyone’s time.

---

But in your mind you need to have clarity on *what you can do* with each concept. You can’t skate a bike. You can’t fly an avocado. You can’t sing a mosquito. And you can’t pass a variable — at least, not in JavaScript.

---

Here’s a small example of why these details matter.

---

```jsx
function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money); // ?
```

If we thought double(money) was passing a variable, we could expect that x = x * 2 would double that variable. But that’s not how it works. We know that double(money) means “figure out the value of money, and then pass that value to double”. So the answer is 10. What a scam!

What are the different JavaScript nouns and verbs in your head? How do they relate to each other? Write down a short list of the ones you use most often.

# Putting It Together

---

Now let’s revisit the first example from *Mental Models*:

---

I suggest that you take a piece of paper or a [drawing app](https://el2.convertkit-mail.com/c/27uv68g7pda9u7x7q6i3/r9f8h9uvxxgvev/aHR0cHM6Ly93d3cuZXhjYWxpZHJhdy5jb20v) and sketch out a diagram of what happens to the “wires” of the `x` and `y` variables step by step.

---

**The first line doesn’t do much:**

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db270dce-31e7-4fa6-abe9-22ded0e3d5bf/Untitled.png)

- Declare a variable called `x`.
    - *Make a wire for the `x` variable.*
- Assign to `x` the value of `10`.
    - ***Point `x`’s wire to the value `10`.***

    The second line is short, but it does quite a few things:

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85ae7024-b311-496f-94ba-c4794058a5ec/Untitled.png)

- Declare a variable called `y`.
    - *Make a wire for the `y` variable.*
- Assign to `y` the value of `x`.
    - Evaluate the expression: `x`.
        - *The “question” we want to answer is `x`.*
        - ***Follow the `x`’s wire — the answer is the value `10`.***
    - The `x` expression resulted in the value `10`.
    - Therefore, assign to `y` the value of `10`.
    - ***Point `y`’s wire to the value `10`.***

    Finally, we get to the third line:

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a58649fd-fb73-4718-9c51-46a8fb812b1c/Untitled.png)

    - Assign to `x` the value of `0`.
        - ***Point `x`’s wire to the value `0`.***

        At the end, the x variable points to the value 0, and the y variable points to the value 10. Note that y = x did not mean point y to x”. We can’t point variables to each other! Variables always point at values. When we see an assignment, we “ask” the right side’s value, and point the left side’s “wire” at it.

        Observe que y = x não significa apontar y para x ”. Não podemos apontar variáveis uns para os outros! As variáveis sempre apontam para valores. Quando vemos uma atribuição, "pedimos" o valor do lado direito e apontamos o "fio" do lado esquerdo para ele.

        I mentioned in *Mental Models* that it is fairly common to think of variables as boxes. The universe we’re building is not going to have any boxes at all. **It only has wires!** This might seem a bit annoying. Why can’t we just “put `0` and `10` values *into* the variables rather than *pointing* variables to them?

        ---

        Using wires is going to be very important for explaining numerous other concepts, like strict equality, object identity, and mutation. We’re going to stick with wires, so you might as well start getting used to them now!

        ---

        # Recap

        ---

        - **Primitive values are immutable.** There’s nothing we can do in our code to affect them or change them in any way. They stay what they are. For example, we can’t set a property on a string value because it is a primitive value. Arrays are *not* primitive, so we *can* set their properties.
        - **Variables are not values.** Each variable *points to* a particular value. We can change *which* value it points to by using the `=` assignment operator.
        - **Variables are like wires.** A “wire” is not a JavaScript concept — but it helps us imagine how variables point to values. There’s also a different kind of “wire” that’s not a variable, but we haven’t discussed it yet.
        - **Look out for contradictions.** If two things that you learned seem to contradict each other, don’t get discouraged. Usually it’s a sign that there’s a deeper truth lurking underneath.
        - **Nouns and verbs matter.** We’re building a mental model so that we can be confident in what *can* or *cannot* happen in our universe. It’s fine to be sloppy in casual speech, but our thinking needs to be precise.

        ---

        ```jsx
        let numberOfTentacles = 10;
        numberOfTentacles = 'eight';
        console.log(typeof(numberOfTentacles));
        ```

        // Answer: Yes, it’s valid. It prints "string" to the console. Variables don’t have types in JavaScript — only values do. The answer to typeof(numberOfTentacles) depends on which value the variable was pointing to at that time. The numberOfTentacles variable was pointing to "eight" string value at the time we asked about its type. So we got "string" as a result.

        ```jsx
        let numberOfTentacles = 10;
        console.log(typeof(numberOfTentacles));
        numberOfTentacles = 'eight';
        ```

        // Answer: Yes, there is a difference. It prints "number" to the console. Variables don’t have types in JavaScript — only values do. The answer to typeof(numberOfTentacles) depends on which value the variable was pointing to at that time. The numberOfTentacles variable was pointing to 10 number value at the time we asked about its type. So we got "number" as a result.

        ```jsx
        let answer = true;
        answer.opposite = false;
        console.log(answer.opposite);
        ```

        // Answer: this code won’t be able to set a property. Booleans are primitive. And primitive values are immutable. We can’t change them — and setting a property on a value is a change. If our code runs in the strict mode, assigning a property on a primitive value would lead to an error. Otherwise, it will silently do nothing. In either case, we can’t set a property on a boolean value like true.

        ```jsx
        null = 10;
        console.log(null); 
        ```

         *//*Answer: this code produces an error. It is an error because the left side of assignment must always be a “wire”. Variables are “wires”, so they can appear on the left side. A literal like null is not a “wire”, so trying to assign something to it is meaningless.

        ```jsx
        let it = 'be';
        let them = 'eat cake';
        it = them
        ```

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b628057-9b1f-4ab1-a4ae-4f6c20600a08/Untitled.png)

        ```jsx
        let pets = ['Tom', 'Kerry'];
        // feed(pets);
        console.log(pets[0]);
        ```

        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9d64e47-f148-4529-b0f6-a846fb14c466/Untitled.png)