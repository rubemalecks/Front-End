# VARIAVEIS
Elas armazenam valores que são manipulados por nossos programas, permitindo que os algoritmos sejam implementados para dar a resposta esperada para o usuário.


exemplo em JS:
````javascript
var vaga1 = 'CARRO';
````

> em JavaScript o ";"(ponto e virgula) é opcional.

Em JS pode usar três tipos de aspas.


- 'simples'
- "duplas"
-  <pre>`crase`</pre>

### Há diferenças em cada uma.

## Cada variável tem seu nome, também chamados de IDENTIFICADORES

... e identificadores possuem regras proprias.

- Podem começar com:
    - Letras ["n", "x", "y" ...]
    - Cifrão ou underline ["$", "_"]
 - Podemos usar letras, números, acentos e simbolos
 - <p style="color:red"> Não podem ter espaços
  - <p style="color:red"> Não podem começar números
  - < style="color:red"> Não podem usar palavras reservadas


## Extras:
- O JavaScript é CaseSensitive

# TIPOS PRIMITIVOS
Os tipo primitivos incluem números, strings e valores booleanos. Os valores especiais null e undefined são valores primitivos mas não são números, nem string e nem booleanos. Qualquer valor em JavaScript que não seja número, string, booleano, null ou undefined é um objeto. 

## Tipos Primitivos Primordiais:

- number
  - ex: [5], [-12], [3.14], [42.0]
- string
  - ex: "Google", 'JavaScript', (ou entre crase)
- boolean
  - ex: true, false


## util:

usando ...
````javascript
var num = 42
typeof(num)
````
> 'number'


Podemos ver o tipo da variável.
Algo para se lembrar é que o js é dinamico, então se

````javascript
var num = 42
typeof(num) // 'number'
num = "quarenta e dois"
typeof(num) //  'string'
````
o tipo pode mudar de acordo com o conteúdo, caso não definimos o tipo primitivo da variável.