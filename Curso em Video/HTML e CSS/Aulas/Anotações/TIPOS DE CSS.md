# TIPOS DE IMPLEMENTAÇÃO DO CSS

## INLINE:

- O estilo é aplicado diretamente na tag especifica dentro do documento html. (css na linha).
  ex:

```css
<p style="font-family: sans-serif;">CSS Inline</p>
```

## Interna

- regras CSS dentro do arquivo HTML, usando a tag <_style_> que deve estar dentro da tag <_head_>. É útil apenas quando deseja-se uma formatação diferenciada em uma única página de todo site.

```html
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mensagens</title>
    <style>
      body {
        background-color: blue;
      }

      h1 {
        color: red;
        padding: 60px;
      }
    </style>
  </head>
  <h1>H1 de teste</h1>
  <p>Paragrafo de teste</p>
  <body></body>
</html>
```

## Externo

- Com um arquivo .css separado.

Usando... no arquivo .html colo a tag link para ligar a pagina ao arquivo .css.

```html
<link rel="stylesheet" type="txt/css" href="csexterno.css" />
```

e no arquivo .css escreva as configurações.

```css
h1 {
  color: blue;
}
```
