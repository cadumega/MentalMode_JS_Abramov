# JS MentalMode

# 1- What’s a Mental Model?

[2-Code and Values](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/2-Code%20and%20Values%205d3d48956ae24a478cf0b9be41415982.md)

[3-Values and Variables](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/3-Values%20and%20Variables%207cb66d9b60064d049d15eda0c39842cc.md)

[4- Counting the Values](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/4-%20Counting%20the%20Values%20d2e82fda95df4347815eb97597494fcc.md)

[5 - Count Values part 2](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/5%20-%20Count%20Values%20part%202%20a1111a8b7174489b813febe172085dd0.md)

[6-Equality of Values](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/6-Equality%20of%20Values%20389afc487bf94781864f3784b1a9352f.md)

[7-Properties](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/7-Properties%209480a5d274ed475a87d3f68769756401.md)

[8- Mutation](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/8-%20Mutation%20ea5b9d62e66341689fe6d96cf9b4d84d.md)

[9- Prototypes](JS%20MentalMode%20bbe447436d2641ef9046237a0cf1eb44/9-%20Prototypes%206d4513b168264366b549b3d094775b09.md)

1-What’s a Mental Model?

- `let a = 10;`
    - Declare a variable called `a`. Set it to `10`.
- `let b = a;`
    - Declare a variable called `b`. Set it to `a`.
    - Wait, what’s `a` again? Ah, it was `10`. So `b` is `10` too.
- `a = 0;`
    - Set the `a` variable to `0`.
- So `a` is `0` now, and `b` is `10`. That’s our answer.

(A propósito, a sendo 0 e b sendo 10 é a resposta correta, devido a atribuição que foi definida para "a" e para "b" continuou com a atribuição anterior.)

Talvez seu monólogo seja um pouco diferente. Talvez você diga “atribuir” em vez de “definir”, ou talvez você leia em uma ordem ligeiramente diferente. Talvez você tenha chegado a um resultado diferente. Preste atenção em como exatamente era diferente. Observe como mesmo este monólogo não captura o que realmente está acontecendo em sua cabeça. Você pode dizer “definir b para a”, mas o que significa definir uma variável?

Você pode descobrir que, para cada conceito de programação fundamental familiar (como uma variável) e operações sobre ele (como definir seu valor), existe um conjunto de analogias arraigadas que você associa a ele. Alguns deles podem vir do mundo real. Outros podem ser reaproveitados de outros campos que você aprendeu primeiro, como os números da matemática. Essas analogias podem se sobrepor e até mesmo se contradizer, mas ainda ajudam você a entender o que está acontecendo no código.

Por exemplo, muitas pessoas aprenderam primeiro sobre variáveis como “caixas” nas quais você pode colocar coisas. Mesmo que você não imagine mais as caixas vividamente ao ver uma variável, elas ainda podem se comportar como "quadradas" em sua imaginação. Essas aproximações de como algo funciona em sua cabeça são conhecidas como “modelos mentais”. Pode ser difícil se você já programa há muito tempo, mas tente perceber e introspectar seus modelos mentais. Eles são provavelmente uma combinação de atalhos mentais visuais, espaciais e mecânicos.

Identificar e corrigir esses problemas é o objetivo do Just JavaScript. Iremos construir gradualmente (ou, possivelmente, reconstruir) seu modelo mental de JavaScript para ser preciso e útil. Um bom modelo mental o ajudará a encontrar e corrigir bugs mais rápido, entender melhor o código de outras pessoas e se sentir confiante no código que você escreve. 

“Thinking, Fast and Slow” de Daniel Kahneman é um livro de não ficção amplamente popular. Sua tese central é que os humanos usam dois “sistemas” diferentes para pensar. Sempre que possível, contamos com o sistema “rápido”. Compartilhamos esse sistema com muitos animais, e isso nos dá poderes incríveis, como andar sem cair o tempo todo. Este sistema “rápido” é bom em correspondência de padrões (necessário para a sobrevivência!) . Mas não é bom em planejamento.

Exclusivamente, graças ao desenvolvimento do lobo frontal, os humanos também possuem um sistema de pensamento “lento”. Este sistema “lento” é responsável por um raciocínio passo a passo complexo. Permite-nos planejar eventos futuros, entrar em discussões ou seguir provas matemáticas.

Como usar o sistema “lento” é tão desgastante mentalmente, tendemos a optar pelo “rápido” - mesmo quando lidamos com tarefas intelectuais como codificação. Imagine que você está no meio de muito trabalho e deseja identificar rapidamente o que essa função faz. Dê uma olhada rápida nele:

```jsx
function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.');
  }
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata,
  };
  copy.metadata.title = 'Copy of ' + original.metadata.title;
  return copy;
}
```

You’ve probably noticed that:

---

- This function duplicates a spreadsheet.
- It throws an error if the original spreadsheet isn’t saved.
- It prepends “Copy of” to the new spreadsheet’s title.

(Você provavelmente já percebeu que: Esta função duplica uma planilha. Ele gera um erro se a planilha original não for salva. Ele precede "Cópia de" no título da nova planilha.)

Erros ausentes como esse acontecem com todos os programadores, todos os dias. Mas agora que você sabe que existe um bug, vai ler o código de maneira diferente? Se você tem lido o código no modo “rápido”, é provável que mude para o modo “lento” mais trabalhoso para encontrá-lo. No modo “rápido”, adivinhamos o que o código faz com base na nomenclatura, comentários e sua estrutura geral. No modo “lento”, repassamos o que o código faz passo a passo. 

É por isso que ter um modelo mental correto é tão importante. Simular um computador em nossas cabeças já é difícil - e esse esforço é desperdiçado com modelos mentais errados. Não se preocupe se você não conseguir encontrar o bug. Isso significa que você aproveitará ao máximo este curso! 

Nos próximos módulos, vamos reconstruir nosso modelo mental de JavaScript juntos para que você veja esse bug tão claro quanto o dia. No próximo módulo, começaremos a construir modelos mentais para alguns dos conceitos mais fundamentais do JavaScript - valores e variáveis.

_____