# Media Query - (Simples)

```CSS
@media (max-width: 600px) {
    body {
        background-color: black;
    }
}
```

O media query deve ser a ultima propriedade do arquivo .css, mas caso não seja, podemos usar o "!important" para dar destaque e aplicar o estilo. E também podemos usar vários em um só documento.

Exemplo mais completo:

```CSS
body {
    background-color: darkgray;
    }

@media (max-width: 800px) {
    body {
        background-color: black;
        }
    }

@media (max-width: 600px) {
    body {
        background-color: blue;
        }
}


```

A cor padrão é cinza, mas dependendo do tamanho, ela fica preta ou azul.
