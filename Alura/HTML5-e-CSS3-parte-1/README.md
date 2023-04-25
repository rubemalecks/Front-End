# CSS  (Cascading Style Sheet, ou Folha de Estilo em Cascatas)

#### Para mexer na apresentação visual dos elementos usamos CSS


## CSS inline 
Exemplo se quisermos alterar um paragrafo.
- Primeiro iremos na abertura da escolhida dentro do body
- Adicionamos a propriedade style:
```html
<h1 style="text-align: center"> Sobre a Barbearia Alura</h1>
```
- Alinhou o texto ao centro

outro exemplo com um paragrafo especifico:

```html
<p style="font-size:20px; text-align: center">
```
- Aumentou a fonte; alinhou ao centro.
    - ( ; ) funcionando como separador.

>> "Legal", porém pouco usual pois se tivesse 100x paragrafos teriamos que repetir 100x os comandos de style. Tem jeito melhor! ...

# TAG style (dentro da passagem de informação/ dentro da head)
syntax:
````html
<style>
    subtag {
        propriedade: param_propried
    }
</style>
````
exemplo:
````html
<style>
    p {
        text-align: center; font-size:20px
    }
</style>
````
A propriedade definida no CSS vai ser aplicada em todos os paragrafos.

# OUTRA FORMA É COM UM ARQUVO CSS EXTERNO PERSONALIZADO

````html
<head>
    <meta charset="UTF-8">
    <title>Barbearia Alura</title>
    <link rel="stylesheet" href="style.css">
    <style>
    </style>
</head>
````
- usando a tag link e no arquivo "CSS" passaremos a propriedade e seus parametro, da mesma forma.

**style.css** :
````css
    p {
        text-align: center; 
    }
````

- mudar propriedades em elementos especificos:
````css
    em strong {
        color: red;
    }
````
Alterou somente "nos strong que estão dentro da tag em".
