# MANIPULANDO E TRATANDO DADOS (number e string)

dentro do body do html:
````javascript
var m = window.prompt("msg: ")
````
Ao usar esta forma de input o JS retorna o valor como string e para fazer o casting usamos o Number.parseInt(m).Caso fosse Float, seria Number.parseFloat(m). Também podemos deixar que o JS decida o tipo, usando somente a palavra Number(m) e ele vai decidir o tipo numerico apartir da entrada.

````javascript
m = Number.parseInt(window.prompt("msg: ")) // ou só parseInt
````
Também podemos converter para String:

````javascript
String(m)
````
ou 
````javascript
m.toString()
````

# FORMATANDO STRINGS

- Concatenação:
````javascript
var s = 'JavaScript'
'Curso de ' + s // 'Curso de JavaScript'
````
- Template String:
````javascript
var s = 'JavaScript'
'Curso de ${s}' // // 'Curso de JavaScript'
````
tendo em mente que "s" é uma String pode usar atributos ou métodos.
````javascript
s.length 
````
ou jogar tudo pra maiúsculas ...
````javascript
s.toUpperCase() 
````
e outras ...

# Extra:


````javascript
var n = 1545.50 
n.toFixed(2)
````
o .toFixed(2) vai fixar o numero com 2 casas decimais. Junto disso podemos usar o replace para substituir o '.' por ','. Todavia isso é uma forma pouco usual, uma mais interessante para trabalhar com valores monetários é ...

````javascript
n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // 'R$ 1.545,50'
````

Já retorna o valor formatado para reais.