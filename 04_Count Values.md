Quando faço uma pergunta ao mundo do JavaScript, ele me responde com um valor. Certamente não venho com todos esses valores sozinho. As variáveis, os fios, os valores - todos eles povoam meu mundo. O mundo JavaScript ao meu redor é absolutamente real para mim - assim como o mundo em que você vive é real para você.

Mas às vezes, há um momento de silêncio antes da próxima linha de código. Um tique ocioso antes da próxima chamada de função. Uma falha na Matrix. Durante esses momentos, tenho visões de um mundo que é muito maior do que o meu.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49f24cad-92c3-4dd3-a029-77a469bd8e1b/Untitled.png)

In the world that appears to me, there are no variables and values. No expressions and no literals. Instead, there are quarks, and atoms, and electrons, and water, and life. Perhaps, you are familiar with this world?

This means there are two ways to study it. Como engenharia reversa.

# Studying From the Outside

Talvez você possa se concentrar em como uma simulação do meu mundo - um mecanismo JavaScript - funciona “realmente”. Por exemplo, você pode aprender que esta string de texto - um valor em meu mundo - é uma seqüência de bytes armazenados dentro de um chip de silício. Essa abordagem coloca nosso foco mental no mundo físico das pessoas e computadores. Alguns tutoriais usam essa abordagem. Mas minha abordagem é diferente.

# Studying From the Inside

Estaremos estudando o mundo JavaScript por dentro. Transporte-se mentalmente para o universo JavaScript e fique ao meu lado. Vamos observar suas leis e realizar experimentos, como os físicos fazem no universo físico.

Aprenderemos sobre o mundo do JavaScript pelo que ele é - sem pensar em como ele é implementado. Isso é semelhante a como os físicos podem falar sobre as propriedades das estrelas sem responder à pergunta se o mundo físico é real. Não importa! Ainda podemos descrevê-lo em seus próprios termos. 

Nosso modelo mental não tenta responder a perguntas como "Como um valor é representado na memória do computador?" A resposta muda o tempo todo! Na verdade, a resposta a essa pergunta muda mesmo enquanto o programa está em execução. Se você ouviu uma explicação simples sobre como o JavaScript “realmente” representa números, strings ou objetos na memória, provavelmente está errada. Para mim, cada string é um valor. Não é um “ponteiro” ou um “endereço de memória” - mas um valor. 

No meu universo, um valor é bom o suficiente. Não permita que "células de memória" e outras metáforas de baixo nível o distraiam da construção de um modelo mental preciso de alto nível de JavaScript. De qualquer forma, são tartarugas! Se você está vindo de um idioma de nível inferior, deixe de lado suas intuições sobre "passar por referência", "alocar na pilha", "copiar na escrita" e assim por diante. Esses modelos de como um computador funciona geralmente tornam mais difícil ter certeza do que pode ou não acontecer em um programa JavaScript. Veremos alguns dos detalhes de nível inferior, mas apenas onde realmente importa. 

Eles podem servir como um acréscimo ao nosso modelo mental, ao invés de sua base. Em vez disso, a base de nosso modelo mental é que nosso mundo está cheio de valores. Cada valor pertence a um dos poucos tipos integrados. Alguns deles são primitivos, o que torna os valores desses tipos imutáveis. Variáveis são “fios” que apontam de nomes em nosso código para valores. E vamos continuar a construir sobre essa base. Quanto a essas estranhas visões, não penso mais nelas. Tenho fios para apontar, perguntas para fazer e funções para ligar. É melhor eu ir lá! As estrelas brilham quando olho para elas. Eles ainda estão lá quando eu piscar? Eu encolho os ombros.

# Counting the Values

O conde von Count foi meu modelo de infância. Se você não conhece ele da Vila Sésamo, seu passatempo favorito é contar coisas. Hoje, Count von Count se juntará a nós na contagem de todos os valores do universo JavaScript. Você pode se perguntar: qual é o objetivo de contar valores? Não estamos em uma aula de aritmética, estamos? 

A essência da contagem é distinguir as coisas umas das outras. Você só pode dizer que há "duas maçãs" quando vê claramente que são duas maçãs distintas. Distinguir valores uns dos outros é a chave para entender a igualdade em JavaScript - que será nosso próximo tópico. Como Virgílio guiou Dante pelos nove círculos do Inferno, o Conde von Count nos acompanhará pelas “esferas celestes” do JavaScript para encontrar diferentes valores: booleanos, números, cordas e assim por diante. Considere isso um passeio turístico.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f9d7d8d-bd5b-463e-ac74-0261c47a7e98/Untitled.png)

# Undefined

Começaremos nosso tour com o tipo Undefined. O conde von Count ficará satisfeito em saber que existe apenas um valor desse tipo - indefinido.

```jsx
console.log(typeof(undefined)); // "undefined"
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/be2f2432-6c5b-4a5c-9b0c-63c5609db027/Untitled.png)

É chamado de indefinido, então você pode pensar que não está lá - mas é um valor muito real! Como um buraco negro, undefined é mal-humorado e muitas vezes pode significar problemas. Por exemplo, ler uma propriedade dele quebrará seu programa:

```jsx
let person = undefined;
console.log(person.mood); // TypeError!
```

Ah bem. Felizmente, existe apenas um indefinido em todo o universo JavaScript. Você pode se perguntar: por que ele existe? Em JavaScript, ele representa o conceito de um valor ausente involuntariamente. 

Você pode usá-lo em seu próprio código escrevendo undefined - como você escreve 2 ou "hello". No entanto, indefinido também comumente “ocorre naturalmente”. Ele aparece em algumas situações em que o JavaScript não sabe o valor que você queria. Por exemplo, se você esquecer de atribuir uma variável, ela apontará para indefinido:

```jsx
let bandersnatch;
console.log(bandersnatch); // undefined
```

Em seguida, você pode apontá-lo para outro valor ou indefinido novamente, se desejar. Não se preocupe muito com seu nome. É tentador pensar em indefinido como algum tipo de status variável, por exemplo, “Esta variável ainda não está definida”. Mas essa é uma maneira completamente enganosa de pensar sobre isso! Na verdade, se você ler uma variável que realmente não foi definida (ou antes da declaração let), receberá um erro:

```jsx
console.log(jabberwocky); // ReferenceError!
let jabberwocky;
```

Isso não tem nada a ver com indefinido. Na verdade, undefined é um valor primitivo regular, como 2 ou "hello". Manuseie-o com cuidado.

# Null

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2baea37e-02ed-43ba-b98c-a1a8eaacbfc0/Untitled.png)

Você pode pensar em null como a irmã de undefined. Ele se comporta de maneira muito semelhante. Por exemplo, ele também causará confusão quando você tentar acessar suas propriedades:

```jsx
let mimsy = null;
console.log(mimsy.mood); // TypeError!
```

Da mesma forma que undefined, null é o único valor de seu próprio tipo. No entanto, null também é mentiroso. Devido a um bug no JavaScript, ele finge ser um objeto:

```jsx
console.log(typeof(null)); // "object" (a lie!)
```

Você pode pensar que isso significa que null é um objeto. Não caia nesta armadilha! É um valor primitivo e não se comporta de forma alguma como um objeto. Infelizmente, typeof (null) é um acidente histórico com o qual teremos que conviver para sempre. 

Na prática, nulo é usado para valores omissos intencionalmente. Por que nulo e indefinido? Isso pode ajudá-lo a distinguir um erro de codificação (que pode resultar em indefinido) de dados ausentes válidos (que você pode expressar como nulos). No entanto, esta é apenas uma convenção, e JavaScript não impõe esse uso. Algumas pessoas evitam os dois tanto quanto possível! Eu não os culpo.

# Booleans

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/02b17017-144a-441b-bcdd-648ba5e07747/Untitled.png)

Like day and night, there are only two boolean values: true and false.

```jsx
console.log(typeof(true)); // "boolean"
console.log(typeof(false)); // "boolean"
```

We can perform logical operations with them:

```jsx
let isSad = true;
let isHappy = !isSad; // The opposite
let isFeeling = isSad || isHappy; // Is at least one of them true?
let isConfusing = isSad && isHappy; // Are both true?
```

Abra um aplicativo de desenho ou pegue um pedaço de papel e esboce as variáveis, os valores e os fios entre eles para o trecho de código acima.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f056afb7-5d36-477b-9c13-341d55ed9b8f/Untitled.png)

Primeiro, verifique se isHappy aponta para falso, isFeeling aponta para verdadeiro e isConfusing aponta para falso. (Se você obteve respostas diferentes, há um erro em algum lugar ao longo do caminho - percorra cada linha passo a passo.) Em seguida, verifique se há apenas um valor verdadeiro e um falso em seu esboço. Independentemente de como os booleanos são armazenados na memória, em nosso modelo mental existem apenas dois deles.

Nos baseamos no true de isSad, logo isFeeling só preciso de um "ou" que seja true para se tornar true. Já com && preciso dos dois para ser true e não somente uma variável declarada como true. 

# Numbers

```jsx
console.log(typeof(28)); // "number"
console.log(typeof(3.14)); // "number"
console.log(typeof(-140)); // "number"
```

À primeira vista, os números podem parecer normais. Vamos olhar mais de perto! 

# Uma matemática para computadores

Os números do JavaScript não se comportam exatamente da mesma maneira que os números matemáticos regulares. Aqui está um snippet que demonstra isso:

```jsx
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true
```

Isso pode parecer muito surpreendente! Ao contrário da crença popular, isso não significa que os números do JavaScript estejam corrompidos. Esse comportamento é comum em diferentes linguagens de programação. Ele ainda tem um nome: matemática de ponto flutuante. 

Veja, o JavaScript não implementa o tipo de matemática que usamos na vida real. A matemática de ponto flutuante é “matemática para computadores”. Não se preocupe muito com esse nome ou como ele funciona exatamente. Muito poucas pessoas sabem sobre todas as suas sutilezas, e esse é o ponto! Funciona bem o suficiente na prática para que na maioria das vezes você nem pense nisso. Ainda assim, vamos dar uma olhada rápida no que o torna diferente.

# Colors and Numbers

Você já usou um scanner para transformar uma foto física ou um documento em um digital? Essa analogia pode nos ajudar a entender os números do JavaScript. Os scanners geralmente distinguem no máximo 16 milhões de cores. 

Se você desenhar uma imagem com um giz de cera vermelho e digitalizá-la, a imagem digitalizada também deve sair vermelha - mas terá a cor vermelha mais próxima que nosso scanner escolheu entre esses 16 milhões de cores. Portanto, se você tiver dois lápis vermelhos com cores ligeiramente diferentes, o scanner pode ser enganado e pensar que a cor deles é exatamente a mesma! Podemos dizer que um scanner trata as cores como tendo uma precisão limitada. 

A matemática de ponto flutuante é semelhante. Na matemática real, existe um conjunto infinito de números. Mas em matemática de ponto flutuante, existem apenas 18 quintilhões deles. Portanto, quando escrevemos números em nosso código ou fazemos cálculos com eles, o JavaScript escolhe os números mais próximos que conhece - assim como nosso scanner faz com as cores. 

Em outras palavras, o JavaScript trata os números como tendo uma precisão limitada. Podemos imaginar todos os números do JavaScript em um eixo. Quanto mais perto estamos de 0, mais precisão os números têm e mais próximos eles “se sentam” uns dos outros:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/def302df-e020-4dc7-b4ab-b75a6cf90f72/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/95833508-4a05-42cc-bae9-4205f31fbcc1/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0d3017b-19bc-4c78-bc41-007bc4a19e81/Untitled.png)

Conforme nos movemos de 0 em qualquer direção, começamos a perder a precisão. Em algum ponto, mesmo dois números de JavaScript mais próximos ficam mais separados do que em 1:

# Special Numbers

É importante notar que a matemática de ponto flutuante inclui alguns números especiais. Você pode ocasionalmente encontrar NaN, Infinity, -Infinity e -0. Eles existem porque às vezes você pode executar operações como 1/0, e o JavaScript precisa representar seu resultado de alguma forma. O padrão matemático de ponto flutuante especifica como eles funcionam e o que acontece quando você os usa. Veja como números especiais podem aparecer em seu código:

```jsx
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
```

Destes números especiais, NaN (NOT A NUMBER)é particularmente interessante. NaN, que é o resultado de 0/0 e alguma outra matemática inválida, significa “não é um número”. Você pode se confundir com o motivo pelo qual ele afirma ser um número: 

```jsx
console.log(typeof(NaN)); // "number"
```

No entanto, não há truque aqui. Da perspectiva do JavaScript, NaN é um valor numérico. Não é nulo, indefinido, uma string ou algum outro tipo. Mas, na matemática do ponto flutuante, o nome desse termo “não é um número”. 

Portanto, é um valor numérico. É chamado de “não é um número” porque representa um resultado inválido. É incomum escrever código usando esses números especiais. No entanto, eles podem surgir devido a um erro de codificação. Portanto, é bom saber que eles existem.