# 6-Equality of Values

É hora de falar sobre igualdade em JavaScript! 

É por isso que é importante. Imagine negociar negócios em um carnaval mascarado. Você pode falar com duas pessoas e não perceber que realmente falou com a mesma pessoa duas vezes. Ou você pode pensar que falou com uma pessoa, mas eram duas pessoas diferentes!

Se você não tem um modelo mental claro de igualdade em JavaScript, todos os dias é como um carnaval - e não no bom sentido. 

Você nunca tem certeza se está lidando com o mesmo valor ou com dois valores diferentes. Como resultado, você frequentemente cometerá erros - como alterar um valor que não pretendia alterar. 

Felizmente, já fizemos a maior parte do trabalho para estabelecer o conceito de igualdade em JavaScript. Ele se encaixa em nosso modelo mental de uma maneira muito natural.

# Kinds of Equality

In JavaScript, there are several kinds of equality. If you’ve been writing JavaScript for a while, you’re probably familiar with at least two of them:

---

- **Strict Equality:** `a === b` (triple equals).
- **Loose Equality:** `a == b` (double equals).
- **Same Value Equality:** `Object.is(a, b)`.

---

Most tutorials don’t mention the *Same Value Equality* at all. We’ll take a road less traveled, and explain it first. We can then use it to explain the other kinds.

---

# Same Value Equality: `Object.is(a, b)`

---

In JavaScript, `Object.is(a, b)` tells us if `a` and `b` are the same value:

---

```jsx
console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false
```

This is called **Same Value Equality**.

---

What does “same value” means, exactly, in our mental model? You might already know this intuitively, but let’s verify your understanding.

---

# Check Your Intuition

---

Consider this example from the *Counting the Values* exercises:

---

```jsx
let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;
```

Como um lembrete, nosso esboço para este snippet era assim:

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled.png)

```jsx
console.log(Object.is(dwarves, continents)); // ?
console.log(Object.is(continents, worldWonders)); // ?
console.log(Object.is(worldWonders, dwarves)); // ?

//Write down your answers and think about how you would explain them.
```

Esta não era uma pergunta capciosa! Aqui estão as respostas:

[Object.is](http://object.is/) (anões, continentes) é falso porque anões e continentes apontam para valores diferentes. [Object.is](http://object.is/) (continents, worldWonders) é falso porque continents e worldWonders apontam para valores diferentes. 
[Object.is](http://object.is/) (worldWonders, anões) é verdadeiro porque worldWonders e anões apontam para o mesmo valor.

Se dois valores são representados por uma única forma em nosso diagrama, isso significa que eles não são realmente dois valores diferentes. Eles têm o mesmo valor! 

E esse é o caso para o qual [Object.is](http://object.is/) (a, b) retorna true. No módulo anterior, “contamos” os valores. Mas, na verdade, estávamos aprendendo o que diferencia os valores uns dos outros. 

E, como resultado, também aprendemos o oposto - o que significa os valores serem iguais. Se você tem dificuldade com essa ideia, pode querer revisitar Contando os Valores e trabalhar com os exercícios para isso novamente. Vai fazer sentido, eu prometo!

# Mas e os objetos?

A esta altura, você pode estar preocupado com os objetos. Você deve ter ouvido que a igualdade não funciona com objetos, ou que compara "referências". Se você já possui intuições como essas, deixe-as de lado completamente por um momento. Em vez disso, observe este snippet de código:

```jsx
let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};
```

Abra um bloco de notas ou um aplicativo de desenho e desenhe um diagrama de variáveis e valores. Você vai querer desenhar passo a passo, pois é difícil de fazer na sua cabeça. 

Lembre-se de que {} sempre significa “criar um novo valor de objeto”. Lembre-se também de que = significa "conecte o fio do lado esquerdo ao valor do lado direito". 

Depois de terminar de desenhar, anote suas respostas a estas perguntas:

```jsx
console.log(Object.is(banana, cherry)); // ?
console.log(Object.is(cherry, chocolate)); // ?
console.log(Object.is(chocolate, banana)); // ?
```

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%201.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%202.png)

1. **`let banana = {};`**
    - Declare a `banana` variable.
    - Create a new object value `{}`.
    - Point `banana` variable’s wire to it.
2. **`let cherry = banana;`**
    - Declare a `cherry` variable.
    - Point `cherry`’s wire to where `banana` is pointing.
3. **`let chocolate = cherry;`**
    - Then, we declare a `chocolate` variable.
    - Point `chocolate`’s wire to where `cherry` is pointing.
4. **`cherry = {};`**
    - Create a new object value `{}`.
    - Point `cherry`’s wire to it.

    Now let’s check your answers:

    ---

    1. `Object.is(banana, cherry)` is **`false`** because `banana` and `cherry` **point at different values**.
    2. `Object.is(cherry, chocolate)` is **`false`** because `cherry` and `chocolate` **point at different values**.
    3. `Object.is(chocolate, banana)` is **`true`** because `chocolate` and `banana` **point at the same value**.

    ---

    Como você pode ver, não precisamos de nenhum conceito adicional para explicar como a Igualdade de Mesmo Valor funciona para objetos. Isso naturalmente sai do nosso modelo mental. E isso é tudo que há para saber sobre isso!

    # Strict Equality: a === b

    You have probably used the Strict Equality operator before:

    ```jsx
    console.log(2 === 2); // true
    console.log({} === {}); // false
    ```

    Também existe um operador oposto! == correspondente. 

    Igualdade de mesmo valor vs igualdade estrita 

    Então, qual é a diferença entre [Object.is](http://object.is/) and ===? 

    (Same Value Equality)Igualdade de mesmo valor - [Object.is](http://object.is/) (a, b) - tem um significado direto em nosso modelo mental. 

    Corresponde à ideia de “o mesmo valor” em nosso universo. Em quase todos os casos, a mesma intuição também funciona para a igualdade de valor estrito. Por exemplo, 2 === 2 é verdadeiro porque 2 sempre “convoca” o mesmo valor:

    ![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%203.png)

    Conversely, {} === {} is false because each {} creates a different value:

    ![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%204.png)

    Nos exemplos acima, a === b se comporta da mesma maneira que [Object.is](http://object.is/) (a, b). 

    No entanto, existem dois casos raros em que o comportamento de === é diferente. 

    Considere os casos abaixo como exceções à regra - assim como você teve que memorizar os verbos irregulares quando estava aprendendo inglês. 

    Ambos os casos incomuns envolvem "números especiais" que discutimos no passado: 

    1. NaN === NaN é falso, embora tenham o mesmo valor. 

    Primeiro Caso Especial: NaN Como vimos em Contando os Valores, NaN é um número especial que aparece quando fazemos matemática inválida como 0/0:

    ```jsx
    let width = 0 / 0; // NaN
    ```

    Outros cálculos com NaN fornecerão NaN novamente:

    ```jsx
    let height = width * 2; // NaN
    ```

    Você provavelmente não fará isso intencionalmente, mas pode acontecer quando você trabalha com dados incorretos em primeiro lugar, ou se o seu cálculo contém um erro. Lembre-se de que NaN === NaN é sempre falso:

    ```jsx
    console.log(width === height); // false
    ```

    No entanto, NaN tem o mesmo valor que NaN:

    ```jsx
    console.log(Object.is(width, height)); // true
    ```

    ![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%205.png)

    Isso é confuso. A razão para NaN === NaN ser falso é amplamente histórica, então eu sugiro aceitá-la como um fato da vida. Você pode se deparar com isso se tentar escrever algum código que verifique se um valor é NaN (por exemplo, para imprimir um aviso).

    ```jsx
    function resizeImage(size) {
      if (size === NaN) {
        // Doesn't work: the check is always false!
        console.log('Something is wrong.');
      }
      // ...
    }
    ```

    Instead, here’s a few ways (they all work!) to check if `size` is `NaN`:

    ---

    - **`Number.isNaN(size)`**
    - **`Object.is(size, NaN)`**
    - **`size !== size`**

    ---

    O último pode ser particularmente surpreendente. Espere alguns minutos. Se você não vê como ele detecta NaN, tente reler esta seção e pensar novamente. (Haverá uma resposta no final deste módulo.) 

    # Segundo Caso Especial: -0

    Na matemática regular, não existe o conceito de “menos zero”, mas existe na matemática de ponto flutuante por razões práticas. 

    Aqui está um fato interessante sobre isso. Ambos 0 === -0 e -0 === 0 são sempre verdadeiros:

```jsx
let width = 0; // 0
let height = -width; // -0
console.log(width === height); // true
```

However, 0 is a different value from -0:

```jsx
console.log(Object.is(width, height)); // false
```

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%206.png)

Isso também é confuso. 

Na prática, não encontrei um caso em que isso importasse em toda a minha carreira. 

# Exercício de Codificação

Agora que você sabe como [Object.is](http://object.is/) and === funcionam, tenho um pequeno exercício de codificação para você. 

Você não tem que concluí-lo, mas é um quebra-cabeça divertido. Escreva uma função chamada strictEquals (a, b) que retorna o mesmo valor que a === b. 

Sua implementação não deve usar os operadores === ou! ==. Aqui está minha resposta se você quiser verificar a si mesmo. 

Esta função é totalmente inútil, mas escrevê-la ajuda a compreender ===. Não entre em pânico Ouvir sobre esses números especiais e como eles se comportam pode ser opressor. 

Não se estresse muito com esses casos especiais! Eles não são muito comuns. Agora que você sabe que eles existem, você os reconhecerá na prática. E na maioria dos casos, nossa intuição sobre o que “mesmo valor” significa é útil para [Object.is](http://object.is/) (a, b) e a === b. 

# Loose Equality

Finalmente, chegamos ao último tipo de igualdade. Loose Equality (duplo igual) é o bicho-papão do JavaScript. Aqui estão apenas alguns exemplos para fazer sua pele arrepiar:

```jsx
console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true
```

Espere o que?! As regras de Loose Equality (também chamadas de “igualdade abstrata”) são misteriosas e confusas. Eles são amplamente reconhecidos como uma má decisão inicial de design. Muitos padrões de codificação proíbem o uso de == e! = 

No código. Embora o Just JavaScript não tenha opiniões firmes sobre quais recursos você deve ou não usar, não vamos cobrir o Loose Equality por enquanto. É incomum em bases de código modernas, e suas regras não desempenham um papel maior na linguagem - ou em nosso modelo mental. 

Se você está curioso, veja como funciona, mas não se sinta pressionado a memorizá-lo. Você vai precisar de memória para outros tópicos! Há um uso dela que é relativamente comum e vale a pena conhecer:

```jsx
if (x == null) {
  // ...
}
```

This code is equivalent to writing:

```jsx
if (x === null || x === undefined) {
  // ...
}
```

o entanto, mesmo esse uso de == pode ser controverso em algumas equipes. É melhor discutir como uma equipe quanto == é tolerado em sua base de código primeiro.

# Recap

- JavaScript has several kinds of equality. They include **Same Value Equality**, **Strict Equality**, and **Loose Equality**.
- **Same Value Equality**, or `Object.is(a, b)`, matches the concept of the *sameness of values* that we introduced in the previous module.
    - Understanding this kind of equality helps prevent bugs! You will often need to know when you’re dealing with the same value, and when you’re dealing with two different values.
    - When we draw a diagram of values and variables, the *same value* cannot appear twice on it. `Object.is(a, b)` is `true` when variables `a` and `b` point to the same value on our diagram.
    - **Same Value Equality** is the easiest to explain, which is why we started with it. However, it’s verbose and a bit annoying to write.
- In practice, you will use **Strict Equality**, or `a === b`, most often. It is equivalent to the **Same Value Equality** except for two rare special cases:
    - `NaN === NaN` is `false`, even though they are the same value.
    - `0 === -0` and `0 === 0` is `true`, but they are different values.
- You can check whether `x` is `NaN` using `Number.isNaN(x)`.
- **Loose Equality** (`==`) is a set of arcane rules and is often avoided.

---

Finally, you might still be wondering why `size !== size` works as a way to detect when `size` is `NaN`. We said we’d revisit this question at the end of this module. This works because `NaN === NaN` is `false`, as we already learned. So the reverse (`NaN !== NaN`) must be `true`. Since `NaN` is the only value that’s not equal to itself, `size !== size` can only mean that `size` is `NaN`.

---

In fact, ensuring you can detect `NaN` this way was [one of the original reasons](https://el2.convertkit-mail.com/c/38uwel4q0rbdu79o07br/pmsehqu5px3d4d/aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1NzM3MTUvNDU4MTkz) for making `NaN === NaN` return `false`! This was decided before JavaScript even existed. This is a purely historical anecdote, but interesting nonetheless.

---

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%207.png)

# **Answer: B is the correct diagram.***"mustache"*

None of the other diagrams match our mental model because they show more than one *"mustache"* string value. In our universe, every distinct string only exists once.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%208.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%209.png)

# **Answer: all of these examples print*true***

1. **fingernails === toes**: This is ***true*** because *fingernails* and *toes* point at the same string.2. **toes === nose**: This is ***true*** because *toes* and *nose* point at the same string.3. **nose === fingernails**: This is ***true*** because *nose* and *fingernails* point at the same string.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2010.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2011.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2012.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2013.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2014.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2015.png)

The author of this code expects it to print a message. Will the message appear?

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2016.png)

Resposta: não, a mensagem não aparecerá. Quando “pedimos” tíquete === {id: 0}, precisamos descobrir qual valor está em cada lado de ===. Do lado esquerdo, temos o ticket, cujo valor é o objeto que criamos na primeira linha escrevendo {id: 0}. No lado direito, temos um literal de objeto {id: 0} - que também cria um valor completamente novo! Temos diferentes valores de objeto em cada lado de ===. Portanto, a verificação não será aprovada e a função não imprimirá nossa mensagem.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2017.png)

resposta: sim, a mensagem aparecerá. Quando “pedimos” ticketId === 0, precisamos descobrir qual valor está em cada lado de ===. No lado esquerdo, temos ticketId, que aponta para o valor numérico 0. No lado direito, temos o literal 0 - que também resulta no valor numérico 0. Existe apenas um valor numérico 0 em nosso universo, e temos o mesmo valor em ambos os lados de ===. A verificação será aprovada e a função imprimirá nossa mensagem.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2018.png)

Resposta: o outro valor que faria com que a mensagem fosse impressa é -0. Mesmo que 0 e -0 sejam dois valores diferentes, === os considera iguais.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2019.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2020.png)

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2021.png)

Resposta: D é o diagrama correto. Ele mostra chá e café apontando para dois valores de função diferentes, enquanto matcha e latte estão apontando para o mesmo valor NaN. 

O diagrama A está errado porque mostra matcha e latte apontando para dois valores diferentes de NaN. Em nosso universo, existe apenas um valor NaN. 

Os diagramas B e C estão errados porque mostram chá e café apontando para o mesmo valor. Cada definição de função cria um novo valor, portanto, chá e café devem apontar para dois valores diferentes. Como um lembrete, NaN é um valor numérico especial que representa um resultado inválido - como quando você tenta calcular 0/0.

![Untitled](6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f/Untitled%2022.png)

# **Answer: Only*Object.is(matcha, latte)*is*true,*all the other answers are*false***

1. **tea === coffee** — This is ***false*** because *tea* and *coffee* point at two different function values.///
2. **Object.is(tea, coffee)** — This is ***false*** because *tea* and *coffee* point at two different function values.
3. **matcha === latte** — This is ***false*** because both of them point at *NaN*, and *NaN === NaN* is always *false*. (If you forgot about this, you can re-read the section about special cases of Strict Equality.)
4. **Object.is(matcha, latte)** — This is ***true*** because *matcha* and *latte* point at the same NaN number value.