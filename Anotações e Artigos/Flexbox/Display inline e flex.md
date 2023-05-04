# Flexbox

~ é uma solução para alinhar e distribuir itens em um container.
Principalmente quando o tamanho da pagina é desconhecido ou dinâmico.

Para usar o FLEXBOX precisamos de um container, e o elemento mais utilizado para isso é a div.

![Alt text](../img/flexboxdevm1.jpg)

Por padrão o html deixa os itens do container assim:
![Alt text](../img/defaultdp.jpg)

E se no container colocamos a propriedade display como flex, fica assim:

```CSS
    .container {
    display: flex;
}
```

![Alt text](../img/displayflex.jpg)

Flex: Deixa a linha flexível, caso haja muitos elementos ele vai dar um jeito para caber tudo, mesmo que mexa na proporção dos elementos.
Exemplo:
![Alt text](../img/displayflexvariositens.jpg)

Já o inline-flex:
![Alt text](../img/displayinlineflex.jpg)

Faria com que tivesse que "ir mais pro lado" para ver o restante dos itens.


