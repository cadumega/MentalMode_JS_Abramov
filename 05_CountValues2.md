![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7eb7b96f-b815-4467-8418-f870469a8c61/Untitled.png)

# Strings

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4acc286e-e02a-4fb2-962a-c166aea626a4/Untitled.png)

Strings represent text in JavaScript. There are three ways to write strings (single quotes, double quotes, and backticks), but the result is the same:

```jsx
console.log(typeof("こんにちは")); // "string"
console.log(typeof('こんにちは')); // "string"
console.log(typeof(`こんにちは`)); // "string"
```

An empty string is a string, too:

```jsx
console.log(typeof('')); // "string"
```

# Strings Aren’t Objects

All strings have a few built-in properties.

```jsx
let cat = 'Cheshire';
console.log(cat.length); // 8
console.log(cat[0]); // "C"
console.log(cat[1]); // "h"
```

Isso não significa que as strings são objetos! As propriedades de string são especiais e não se comportam da mesma forma que as propriedades do objeto. Por exemplo, você não pode atribuir nada a cat [0]. Strings são primitivos e todos os primitivos são imutáveis.

# A Value for Every Conceivable String

Em nosso universo, existe um valor distinto para cada string concebível. Sim, isso inclui o nome de solteira da sua avó, a fanfic que você publicou há dez anos com um pseudônimo e o roteiro de Matrix 5, que ainda não foi escrito. 

Claro, todas as strings possíveis não podem caber literalmente dentro de um chip de memória de computador. Mas a ideia de todas as cordas possíveis cabe na sua cabeça. Nosso universo JavaScript é um modelo para humanos, não para computadores! Isso pode levantar uma questão. Este código cria uma string?

```jsx
// Try it in your console
let answer = prompt('Enter your name');
console.log(answer); // ?
```

# Objects

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2709cabc-3b98-4e51-a3d2-5b264126e1e2/Untitled.png)

Por fim, chegamos aos objetos! Isso inclui arrays, datas, RegExps e outros valores não primitivos:

```jsx
console.log(typeof({})); // "object"
console.log(typeof([])); // "object"
console.log(typeof(new Date())); // "object"
console.log(typeof(/\d+/)); // "object"
console.log(typeof(Math)); // "object"
```

Ao contrário de tudo antes, os objetos não são valores primitivos. Isso também significa que, por padrão, eles são mutáveis. Podemos acessar suas propriedades com. ou []:

```jsx
let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice'; // Bracket notation
```

Não falamos sobre propriedades em detalhes ainda, então seu modelo mental sobre elas pode ser confuso. Voltaremos às propriedades em um módulo futuro.

# Making Our Own Objects

Podemos fazer nossos próprios objetos. Em nosso modelo mental, todos os valores primitivos que discutimos - nulos, indefinidos, booleanos, números e strings - "sempre existiram". 

Não podemos “fazer” uma nova string ou um novo número, só podemos “convocar” esse valor:

```jsx
let sisters = 3;
let musketeers = 3;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5f12b0a-50ba-4291-a499-c20c07dbcbac/Untitled.png)

O que torna os objetos diferentes é que podemos criar mais deles. Cada vez que usamos o {} literal de objeto, criamos um novo valor de objeto:

```jsx
let shrek = {};
let donkey = {};
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e1d8ee9-094c-4923-9f92-574e3ddd53c5/Untitled.png)

O mesmo vale para arrays, datas e quaisquer outros objetos. Por exemplo, o literal de array [] cria um novo valor de array - um valor que nunca existiu antes.

# Do Objects Disappear?

Você pode se perguntar: os objetos desaparecem ou permanecem para sempre? JavaScript é projetado de uma forma que não podemos dizer uma forma ou outra de dentro de nosso código. Por exemplo, não podemos destruir um objeto:

```jsx
let junk = {};
junk = null; // Doesn't necessarily destroy an object
```

Isso significa que, embora não possamos destruir um objeto, ele pode eventualmente "desaparecer" se não houver maneira de alcançá-lo seguindo os fios de nosso código.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/def53203-ee7c-4e4b-992a-41c1e03c9eb1/Untitled.png)

JavaScript não oferece garantias sobre quando a coleta de lixo acontece. A menos que você esteja tentando descobrir por que um aplicativo está usando muita memória, você não precisa se preocupar com a coleta de lixo com muita frequência. Menciono isso aqui apenas para que você saiba que podemos criar objetos - mas não podemos destruí-los. Em meu universo, objetos e funções flutuam mais perto de meu código. Isso me lembra que posso manipulá-los e até mesmo fazer mais deles.

# Functions

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/382e8a6c-e546-4576-8016-b87c0e81738d/Untitled.png)

É particularmente estranho pensar nas funções como valores separados do meu código. Afinal, eles são meu código. Ou não são?

## Functions Are Values

Definimos funções para que possamos chamá-las mais tarde e executar o código dentro delas. No entanto, para realmente entender as funções em JavaScript, precisamos esquecer por um segundo por que elas são úteis. 

Em vez disso, pensaremos nas funções como mais um tipo de valor: um número, um objeto, uma função. Para entender as funções, iremos compará-las a números e objetos. Primeiro, considere este loop for que executa console.log (2) sete vezes:

```jsx
for (let i = 0; i < 7; i++) {
  console.log(2);
}
```

Quantos valores diferentes ele passa para console.log? Para responder a isso, vamos lembrar o que 2 significa quando o anotamos. É um número literal. Um literal é uma expressão - uma pergunta ao nosso universo. Há apenas um valor para cada número em nosso universo, então ele “responde” nossa pergunta “convocando” o mesmo valor para o número 2 todas as vezes. 

Portanto, a resposta é um valor. Veremos o log sete vezes - mas estamos passando o mesmo valor em cada chamada. Agora vamos revisitar os objetos brevemente. Aqui está outro loop for que executa console.log ({}) sete vezes:

```
for (let i = 0; i < 7; i++) {
  console.log({});
}
```

Quantos valores diferentes ele passa para console.log agora? Aqui, também, {} é um literal - exceto que é um literal de objeto. Como acabamos de aprender, o universo JavaScript não "responde" a um objeto literal invocando qualquer coisa. Em vez disso, ele cria um novo valor de objeto - que será o resultado do {} literal do objeto. Portanto, o código acima cria e registra sete valores de objeto completamente distintos. Deixe isso penetrar. Agora vamos dar uma olhada nas funções.

```jsx
for (let i = 0; i < 7; i++) {
  console.log(function() {});
}
```

How many different values does this code pass to console.log?

Cada vez que executamos uma linha de código que contém uma expressão de função, um novo valor de função aparece em nosso universo.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4a7b349-0434-4ba3-9039-43c7b4ee3e43/Untitled.png)

Aqui, também, function () {} é uma expressão. Como qualquer expressão, uma expressão de função é uma “pergunta” para nosso universo JavaScript - que nos responde criando um novo valor de função toda vez que perguntamos. Isso é muito semelhante a como {} cria um novo valor de objeto quando é executado. 

As funções são como objetos! Tecnicamente, funções são objetos em JavaScript. Continuaremos tratando-os como um tipo fundamental separado, porque eles têm recursos exclusivos em comparação com objetos regulares. Mas, de modo geral, se você pode fazer algo com um objeto, também pode fazer isso com uma função. Eles são objetos muito especiais.

# Chamando uma função

O que este código imprime?

```jsx
let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves);
```

Você pode pensar que ele imprime 7, especialmente se você não estiver olhando muito de perto. Agora verifique este trecho no console! A coisa exata que ele imprime depende do navegador, mas você verá a própria função em vez do número 7 lá. Se você seguir nosso modelo mental, este comportamento deve fazer sentido: 

Primeiro, criamos um novo valor de função com uma expressão function () {} e apontamos a variável countDwarves para esse valor. 

Em seguida, apontamos a variável anões para o valor para o qual countDwarves está apontando - que é o mesmo valor de função. 

Finalmente, registramos o valor para o qual os anões estão apontando no momento. Em nenhum momento, chamamos nossa função! 

**Como resultado, tanto countDwarves quanto anões apontam para o mesmo valor, o que por acaso é uma função. Veja, funções são valores. Podemos apontar variáveis para eles, assim como podemos fazer com números ou objetos. Claro, se quisermos chamar uma função, também podemos fazer isso:**

```jsx
let countDwarves = function() { return 7; };
let dwarves = countDwarves(); // () is a function call
console.log(dwarves);
```

Observe que nem a declaração let nem a atribuição = têm nada a ver com nossa chamada de função. É () que executa a chamada de função - e sozinho! Adicionar () muda o significado do nosso código: 

let dwarves = countDwarves significa “Aponte os anões para o valor para o qual countDwarves está apontando.” 

let dwarves = countDwarves () significa “Aponte anões em direção ao valor retornado pela função para a qual countDwarves está apontando.” 

Na verdade, countDwarves () também é uma expressão. É chamado de expressão de chamada. Para "responder" a uma expressão de chamada, JavaScript executa o código dentro de nossa função e nos entrega o valor retornado como resultado (neste exemplo, é 7). Veremos as chamadas de função com mais detalhes nos módulos futuros.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c52f92a-9167-4be1-ad38-52a400b9cb6f/Untitled.png)

Objetos: um valor para cada literal de objeto que executamos. 

Função: um valor para cada expressão de função que executamos.

escrever 2 ou "hello" sempre “invoca” o mesmo número ou um valor de string. Mas escrever {} ou function () {} sempre cria um valor totalmente novo e diferente. Essa ideia é crucial para entender a igualdade em JavaScript, que será o tópico do próximo módulo.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b8505e80-6801-4224-883a-671f1b17b1b7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f80aabc1-01c0-46c3-8cc2-fdfab73f00c5/Untitled.png)

Answer: Diagram A is correct. It shows dwarves and worldWonders pointing to the 7 number value, and continents variable pointing to the "7" string value.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86b37873-8e07-413f-9332-57b8b2200589/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e76ce09-4862-425d-a93a-ca366c47c1b1/Untitled.png)

Answer: Diagram D is correct. It shows bees and peas pointing to one object value, and knees variable pointing to another object value.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/746b11b7-8cff-418a-a033-110feaa20bf6/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7cb8289-3624-403f-8528-ea2c06101925/Untitled.png)

Answer: Diagram D is correct. It shows banana and result pointing to the same function value.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/474a55ec-6418-4eda-9c7f-dfe39a3a79be/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2643db86-e0f4-43ff-95b7-544e451d365b/Untitled.png)

Answer: Diagram B is correct. It shows the ask variable pointing to a function value, and halves and weeks variables pointing at the value 2.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58dbc940-383c-43cd-ad90-06ba3ca60d6f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7576b0d-ca94-4843-b50a-9060150f4bb4/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e91e97e-0ca8-421b-bf97-47c332fa865c/Untitled.png)

Answer: Diagram C is correct. It shows the plant variable pointing a function value, while tree and flower point to two different object values.

Diagram B is wrong because it shows tree and flower pointing to the same object. However, return {} runs twice — once for each function call — and so two different objects get created.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a774e523-9369-43c1-8fca-3a843f37e4e0/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b973e1c-df1a-42f3-b1ce-9d0f470d7382/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/008bdc15-49e5-4b4c-89c4-02f7dd670106/Untitled.png)

Answer: Diagram A is correct. It shows the cook and make variables pointing to two different function values, while food and fuel variables are pointing to the same string value.

Diagram D doesn’t match our mental model because it shows two different "tofu" string values. However, in our mental model there is only one value for every distinct string.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31b40aba-4aa4-4eb7-9df6-f14fee3c7eb0/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce947929-64af-45ea-8c3a-79e70bbed4ab/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e6f8b6d-08b6-4831-908f-9d1628be2dc4/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fbb96d0-6301-415a-bcd3-761196d4cca2/Untitled.png)

Answer: Diagram B is correct. It shows the spaghetti and fettucine variables pointing to the same function value, and gnocchi pointing to another function value.

Diagram D is wrong because it shows all the variables pointing to the same function. However, each function() {} creates a new function value. So spaghetti and gnocchi should point at different function values.