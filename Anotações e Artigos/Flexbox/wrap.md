# flex-wrap

O flexbox tenta deixar todos os itens na mesma linha.
Por padrão essa propriedade vem assim:

```CSS
    .container {
        flex-wrap: nowrap;
    }
```

Para fazer com que os itens que excederem o espaço disponível "caiam", fazemos:

```CSS
    .container {
        flex-wrap: wrap;
    }
```

No mesmo sentido, podemos usar wrap-reverse, para que os itens sejam distribuídos de forma contraria, ou seja... de baixo para cima.
