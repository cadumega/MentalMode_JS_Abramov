# 8- Mutation

No módulo anterior sobre Propriedades, apresentamos o mistério da mudança de Sherlock Holmes para Malibu. Mas ainda não explicamos. Abra um aplicativo de desenho ou pegue um pedaço de papel e caneta. Desta vez, desenharemos os diagramas passo a passo juntos para que você possa verificar seu modelo mental. Embora você tenha tentado sozinho antes, a prática extra não pode machucar! No final deste módulo, discutiremos a lição maior por trás deste exemplo. 

# Etapa 1: Declarando a variável sherlock Começamos com esta declaração de variável:

Começamos com esta declaração de variável:

```jsx
let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};
```

Desenhe o diagrama para esta etapa agora.

Seu diagrama deve ficar assim:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled.png)

Há uma variável sherlock apontando para um objeto. 

Esse objeto tem duas propriedades. A propriedade do sobrenome aponta para o valor da string "Holmes". 

Sua propriedade de endereço aponta para outro objeto. Esse outro objeto possui apenas uma propriedade chamada cidade. 

Essa propriedade aponta para o valor da string "Londres". Dê uma olhada em meu processo de desenho deste diagrama:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%201.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%202.png)

# No Nested Objects (Sem objetos aninhados)

Observe que não temos um, mas dois objetos completamente separados aqui. 
Dois pares de chaves significam dois objetos. 
Os objetos podem aparecer “aninhados” no código, mas em nosso universo cada objeto é completamente separado. 
Um objeto não pode estar “dentro” de outro objeto! Se você ainda pensa em objetos como aninhados, tente se livrar dessa ideia agora. 

# Etapa 2: Declarando a variável john

Nesta etapa, declaramos outra variável:

```jsx
let john = {
  surname: 'Watson',
  address: sherlock.address
};
```

Edite o diagrama que você desenhou anteriormente para refletir essas mudanças.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%203.png)

Agora também existe uma variável john. Ele aponta para um objeto com duas propriedades. 

Sua propriedade address aponta para o mesmo objeto para o qual sherlock.address já está apontando. Sua propriedade de sobrenome aponta para a string "Watson". 

Dê uma olhada no meu processo com mais detalhes:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%204.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%205.png)

# Propriedades sempre apontam para valores

Quando você vê address: sherlock.address, é tentador pensar que a propriedade address de John aponta para a propriedade address de Sherlock. 

Isso é enganoso. Lembre-se: uma propriedade sempre aponta para um valor! 

Não pode apontar para outra propriedade ou variável. 

Em geral, todos os fios em nosso universo apontam para valores.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%206.png)

Quando vemos address: sherlock.address, devemos descobrir o valor de sherlock.address e apontar o fio da propriedade de endereço para esse valor. 

É o valor em si que importa, não como o encontramos (sherlock.address). Como resultado, agora existem dois objetos diferentes cujas propriedades de endereço apontam para o mesmo objeto. 

Você consegue identificá-los no diagrama? 

# Etapa 3: Alterar as propriedades

Agora, vamos relembrar a última etapa do nosso exemplo do módulo Propriedades. 

John tem uma crise de identidade e se cansa da garoa de Londres. Ele decide mudar seu nome e se mudar para Malibu. 

Fizemos isso definindo algumas propriedades: 

john.surname = 'Lennon';

john.address.city = 'Malibu'; 

Como alteramos o diagrama para refleti-lo?

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%207.png)

O objeto para o qual a variável john aponta agora tem sua propriedade de sobrenome apontando para o valor da string "Lennon". 

Mais interessante, o objeto para o qual as propriedades de endereço de john e sherlock estão apontando agora tem um valor de propriedade de cidade diferente. 

Agora ele está apontando para a string "Malibu". Em um estranho caso de sequestro de localização, Sherlock e John acabaram em Malibu. Siga os fios usando o diagrama e verifique se está correto:

```jsx
console.log(sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu" ***********
console.log(john.surname); // "Lennon"      *************
console.log(john.address.city); // "Malibu" ***************
```

Here is my process for the last series of changes:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%208.png)

Descobrimos o fio, depois o valor e, por fim, apontamos o fio para esse valor. O resultado deve fazer sentido agora, mas este exemplo é confuso em um nível mais profundo. 

Onde está o erro nisso? Como podemos corrigir o código para que John se mude sozinho para Malibu? Para entender, precisamos falar sobre mutação.

# Mutation

Mutação é uma maneira elegante de dizer “mudança”. 

Por exemplo, podemos dizer que alteramos a propriedade de um objeto, ou podemos dizer que alteramos esse objeto (e sua propriedade).

 Isso é a mesma coisa. As pessoas gostam de dizer “mutação” porque essa palavra tem um tom sinistro. Isso o lembra de ter cuidado extra. 

Isso não significa que a mutação é “ruim” - é apenas programação! - mas você precisa ser muito intencional sobre isso. Vamos relembrar nossa tarefa original. 

Queríamos dar a John um sobrenome diferente e mudá-lo para Malibu. Agora, vamos dar uma olhada em nossas duas mutações:

```jsx
// Step 3: Changing the Properties
john.surname = 'Lennon';
john.address.city = 'Malibu';
```

Quais objetos estão sofrendo mutação aqui?

 A primeira linha altera o objeto para o qual john aponta - concretamente, sua propriedade de sobrenome. 

Isso faz sentido: na verdade, pretendemos mudar o sobrenome de John. Esse objeto representa os dados de John. Portanto, alteramos sua propriedade de sobrenome. 

No entanto, a segunda linha faz algo muito diferente. Não altera o objeto para o qual john aponta. Em vez disso, ele transforma um objeto completamente diferente - aquele que podemos alcançar via john.address. 

E se olharmos para o diagrama, sabemos que é o mesmo objeto que também podemos alcançar via sherlock.address! 

Ao transformar um objeto usado em outro lugar no programa, fizemos uma bagunça. 

# Solução possível: mutação de outro objeto

Uma maneira de corrigir isso seria evitar a mutação dos dados compartilhados:

```jsx
// Replace Step 3 with this code:
john.surname = 'Lennon';
john.address = { city: 'Malibu' };
```

A diferença na segunda linha é sutil, mas muito importante. Quando tínhamos john.address.city = "Malibu", o fio à esquerda era john.address.city. Estávamos alterando a propriedade city do objeto acessível por meio de john.address. 

Mas o mesmo objeto também era acessível por meio de sherlock.address. Como resultado, alteramos acidentalmente os dados compartilhados. 

Com john.address = {city: 'Malibu'}, o fio à esquerda é john.address. Estamos alterando a propriedade de endereço do objeto para o qual john aponta. 

Em outras palavras, estamos apenas alterando o objeto que representa os dados de John. É por isso que sherlock.address.city permanece inalterado:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%209.png)

Como você pode ver, um código visualmente semelhante pode produzir resultados muito diferentes. Sempre preste atenção a qual fio está do lado esquerdo de uma atribuição!

# Solução alternativa: sem mutação de objeto

Há também outra maneira de fazer john.address.city nos dar "Malibu" enquanto sherlock.address.city continua a dizer "London":

```jsx
// Replace Step 3 with this code:
john = {
  surname: 'Lennon',
  address: { city: 'Malibu' }
};
```

Aqui, não alteramos o objeto de John de forma alguma. Em vez disso, reatribuímos a variável john para apontar para uma "nova versão" dos dados de John.

 A partir de agora, john aponta para um objeto diferente, cujo endereço também aponta para um objeto completamente novo:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2010.png)

Você pode notar que agora há uma versão antiga "abandonada" do objeto John em nosso diagrama. Não precisamos nos preocupar com isso. O JavaScript irá eventualmente removê-lo automaticamente da memória se não houver fios apontando para ele. 

Observe que ambas as abordagens satisfazem todos os nossos requisitos: 
console.log (sherlock.surname); // "Sherlock" 
console.log (sherlock.address.city); // "Londres" 
console.log (john.surname); // "Lennon" 
console.log (john.address.city); // "Malibu" 

Compare seus diagramas. Você tem uma preferência pessoal por alguma dessas correções? 

Quais são, na sua opinião, as vantagens e desvantagens deles? 

# Aprenda com Sherlock

Sherlock Holmes disse uma vez: “Quando você elimina o impossível, o que quer que permaneça, por mais improvável que seja, deve ser a verdade”. 

À medida que seu modelo mental se torna mais completo, você achará mais fácil depurar problemas porque saberá quais as possíveis causas a procurar. 

Por exemplo, se você sabe que sherlock.address.city mudou depois de executar algum código, as ligações de nosso diagrama sugerem três explicações:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2011.png)

Talvez a variável sherlock tenha sido reatribuída. 

Talvez o objeto que poderíamos alcançar via sherlock tenha sofrido mutação e sua propriedade address tenha sido configurada para algo diferente. 

Talvez o objeto que poderíamos alcançar por meio de sherlock.address tenha sofrido mutação e sua propriedade city tenha sido definida como algo diferente.

Seu modelo mental fornece um ponto de partida a partir do qual você pode investigar bugs. 

Isso também funciona ao contrário. 

Às vezes, você pode dizer que um trecho de código não é a fonte de um problema - porque o modelo mental o prova! 

Digamos, se apontarmos a variável john para um objeto diferente, podemos ter certeza de que sherlock.address.city não mudará. Nosso diagrama mostra que mudar o fio de john não afeta nenhuma cadeia começando com sherlock:

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2012.png)

Ainda assim, tenha em mente que, a menos que você seja Sherlock Holmes, raramente pode estar totalmente confiante em algo. 

Essa abordagem é tão boa quanto o seu modelo mental! Os modelos mentais irão ajudá-lo a criar teorias, mas você precisa planejar experimentos para que possa confirmá-los com console.log ou um depurador. 

# Let vs Const

 É importante notar que você pode usar a palavra-chave const como alternativa para let:

```jsx
const shrek = { species: 'ogre' };
```

A palavra-chave const permite criar variáveis somente leitura - também conhecidas como constantes. Depois de declarar uma constante, não podemos apontá-la para um valor diferente:

```jsx
shrek = fiona; // TypeError
```

Mas há uma nuance crucial. Ainda podemos modificar os pontos const do objeto em:

```jsx
shrek.species = 'human';
console.log(shrek.species); // 'human'
```

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2013.png)

Neste exemplo, é apenas o próprio fio da variável shrek que é somente leitura (const). Ele aponta para um objeto - e as propriedades desse objeto podem sofrer mutação! A utilidade de const é um tópico muito debatido. 

Alguns preferem banir o let completamente e sempre usar const. Outros podem dizer que se deve confiar nos programadores para reatribuir suas próprias variáveis. Qualquer que seja sua preferência, lembre-se de que const impede a reatribuição de variáveis - não a mutação de objeto

# A mutação é ruim?

Quero ter certeza de que você não vai embora com a ideia de que a mutação é "ruim". Isso seria uma simplificação preguiçosa que obscurece o entendimento real. Se os dados mudam com o tempo, ocorre uma mutação em algum lugar. A questão é o que sofre mutação, onde e quando. Isso também é um assunto de muito debate. 

Mutação é “ação assustadora à distância”. Mudar john.address.city levou console.log (sherlock.address.city) a imprimir outra coisa. 

No momento em que você altera um objeto, as variáveis e propriedades podem já estar apontando para ele. Sua mutação afeta qualquer código que “siga” esses fios posteriormente. Isso é tanto benção quanto maldição. 

A mutação facilita a alteração de alguns dados e “vê” imediatamente a alteração em todo o programa. No entanto, a mutação indisciplinada torna mais difícil prever o que o programa faria. 

Existe uma escola de pensamento que diz que a mutação é melhor contida em uma camada muito estreita de sua aplicação. A desvantagem é que você provavelmente escreveria mais código clichê para “passar as coisas adiante”. Mas o benefício, de acordo com essa filosofia, é que o comportamento do seu programa se tornará mais previsível. 

É importante notar que a mutação de objetos recém-criados está sempre bem porque não há outros fios apontando para eles ainda. 

Em outros casos, aconselho você a ser muito intencional sobre o que está mudando e quando. 

A extensão em que você dependerá da mutação depende da arquitetura do seu aplicativo. 

# Recapitular

Os objetos nunca são “aninhados” em nosso universo. 

Preste muita atenção a qual fio está do lado esquerdo da atribuição. Alterar a propriedade de um objeto também é chamado de mutação desse objeto. 

Se você transformar um objeto, seu código “verá” essa mudança por meio de quaisquer fios que apontem para aquele objeto. 

Às vezes, pode ser isso que você deseja. No entanto, a mutação de dados compartilhados acidentalmente pode causar bugs. 

Transformar os objetos que você acabou de criar no código é seguro. Em termos gerais, o quanto você usará de mutação depende da arquitetura do seu aplicativo. 

Mesmo que você não use muito, vale a pena entender como funciona. Você pode declarar uma variável com const em vez de let. 
Isso permite que você imponha que o fio dessa variável sempre aponte para o mesmo valor. Mas lembre-se de que const não impede a mutação do objeto!

# Exercicios

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2014.png)

Temos duas variáveis apontando para o mesmo objeto: spreadsheet e copy. 

Nós alteramos a propriedade do título daquele objeto. 

Portanto, spreadsheet.title e copy.title nos fornecerão o valor atualizado. 

Observe que, embora tenhamos declarado ambas as variáveis com const, não é um erro transformar o objeto para o qual elas apontam. 

Const apenas impede a reatribuição de variáveis, não a mutação de objetos!

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2015.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2016.png)

Resposta: a última linha imprimirá "Gotham".

Quando declaramos robin, apontamos sua propriedade address para o valor de batman.address no momento dessa declaração. 

Esse era um objeto cuja propriedade da cidade era "Gotham". 

Desde aquele ponto, não reatribuímos a variável robin e não alteramos o objeto alcançável por robin.address. 

Portanto, robin.address.city ainda é "Gotham" no final. Se você tiver problemas para seguir isso, lembre-se de ler cada linha de código passo a passo enquanto desenha o diagrama.

Parecido com os 1° exemplos, já que iremos ter 2 objetos, e o robin continua apontando para o value de "Gotham" que era o apontamento que batman tinha declarado anteriormente.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2017.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2018.png)

Resposta: a última linha imprimirá "Disneyland". 

Quando declaramos **dale**, apontamos dale.address.city como "Disneyland", porque esse era o valor de **chip.address.city** naquela época. 

**Alteramos o objeto do chip alterando sua propriedade de endereço posteriormente**, mas nenhum dos fios na cadeia dale.address.city foi afetado por essa alteração. 

Portanto, dale.address.city ainda é "Disneyland". 

Observação: você provavelmente também terá um segundo objeto "abandonado" apontando para "Disneylândia". Não há como alcançá-lo seguindo os fios, então o omitimos do diagrama.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2019.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2020.png)

Resposta: O Diagrama B é a resposta correta. 

O diagrama A está errado porque mostra a música e a cebola apontando para objetos diferentes. No entanto, sabemos que eles devem estar apontando para o mesmo objeto, já que a mutação de onion.taste afetou music.taste.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2021.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2022.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2023.png)

Resposta: a última linha imprimirá "New York". 

Neste exemplo, **nenhum objeto sofreu mutação e a variável ilana não foi reatribuída.** 

Portanto, ilana.address.city permanece o mesmo em todo o trecho de código, com seu valor original sendo "New York".

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2024.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2025.png)

Resposta: a última linha imprimirá "C-137". 

Neste exemplo, morty.address aponta inicialmente para o mesmo objeto que o objeto para o qual rick.address aponta. 

A propriedade da cidade desse objeto aponta em "C-137". 

Posteriormente, alteramos o objeto para o qual rick aponta e alteramos sua propriedade de endereço. 

No entanto, esse objeto não faz parte da cadeia morty.address.city, então morty.address.city ainda nos dá o valor inicial "C-137".

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2026.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2027.png)

Resposta: O Diagrama A é a resposta correta. 

O diagrama B está errado porque mostra o hambúrguer e o rapper apontando para o mesmo objeto antes da execução do código. 

No entanto, se fosse esse o caso, atribuir hambúrguer = rapper não faria nada. 

Mas sabemos que burger.beef mudou após a reatribuição da variável. Portanto, essas variáveis devem ter apontado para objetos diferentes no início.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2028.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2029.png)

Resposta: a última linha imprimirá "L. A." 

Inicializamos a variável local para apontar para o mesmo objeto que daria.address já estava apontando. 

Em seguida, alteramos esse objeto definindo sua propriedade city como 'L. UMA.' Como resultado, daria.address.city nos dá 'L. UMA.' no fim.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2030.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2031.png)

Resposta: a última linha imprimirá "Albuquerque" 

Inicializamos gustavo.address para apontar para o mesmo objeto que walter.address estava apontando inicialmente, que é {city: 'Albuquerque'}. 

Mais tarde, mudamos para onde aponta o fio variável de walter. 

No entanto, isso não afeta a variável gustavo e não é uma mutação de objeto, então gustavo.address.city ainda é 'Albuquerque'.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2032.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2033.png)

Resposta: a última linha imprimirá "Land of Ooo" 

Quando declaramos mabel, apontamos mabel.address para o mesmo objeto para o qual dipper.address estava apontando. 

Em seguida, alteramos esse objeto - definimos sua propriedade city como {name: 'Land of Ooo'}. 

Então, quando lemos [mabel.address.city.name](http://mabel.address.city.name/), isso nos dá o valor da propriedade de nome desse objeto, que é 'Land of Ooo'.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2034.png)

Três teorias sobre como era o universo antes da execução desse código. Duas dessas teorias são plausíveis. Um deles provavelmente está errado. Escolha qual dessas teorias provavelmente está errada. Prepare-se para explicar o porquê também. Dica: use os logs do console como pistas para resolver seu caso.

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2035.png)

![Untitled](8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d/Untitled%2036.png)

Resposta: o diagrama B provavelmente está errado. 

Mudamos charlotte.mother.age e vimos a mudança refletida em charlotte.child.age. 

A explicação mais provável é que charlotte.mother e charlotte.child apontam para o mesmo objeto. 

Ambos os diagramas A mostram C tinha charlotte.mother e charlotte.child apontando para o mesmo objeto. 

No entanto, o diagrama B mostra-os apontando para objetos diferentes. 

Portanto, o diagrama B é provavelmente o errado. 

Lembre-se de que nossas teorias são tão boas quanto nossos modelos mentais. Não é impossível que o diagrama B esteja correto, mas ainda não cobrimos os casos relativamente incomuns em que isso poderia acontecer.