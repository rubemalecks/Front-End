# ID
- ID's são **ÚNICOS**!!!

No html, definimos um id para uma tag especifica:

````html
<h1 id="titVermelho">Título</h1>
````
No arquivo **CSS**:
````css
#titVermelho {
    color: red;
}
````
~ Usando o "#" para demarcar o id como seletor.


# Classe

- Classes **NÃO** são únicas!
    - É possível usar a mesma classe para vários elementos.
    - Também é possível usar várias classes para o mesmo elemento.
        ````html
        <div class="primeira_classe segunda_classe"></div>
        ````
        - Separar as classes por espaço.

Exemplo da Sintaxe no HTML:
````html
<h1 class="textoSite">Texto Site</h1>
````
Sintaxe no arquivo **CSS**:
````css
.textoSite {
    font-size: 15px;
}
````
