# HTML and tags

> UMA PAGINA WEB UTILIZA DE <TAGS> DE MARCAÇÃO PARA MOSTRAR DE FORMA MAIS ORGANIZADA AS INFORMAÇÕES ALI DESTACADAS.

- em html podemos usar subtags dentro de tags

````html
<tag> <subtag> </subtag> <tag>
````

## TITULOS `<h1></h1>`
> existem 6 niveis de titulo.
tag "h1": heading

```HTML
<h1>Exemplo de um titulo</h1>
```
### NOTE QUE AO ABRIR UMA TAG, NECESSARIAMENTE PRECISAMOS TAMBEM FECHAR PARA DEFINIR O SEU FINAL.


## PARAGRAFOS `<p></p>`

```HTML
<p>Exemplo de um paragrafo</p>
<p>Exemplo de um paragrafo</p>
<p>Exemplo de um paragrafo</p>
```

## NEGRITO `<strong></strong>`

```HTML
<h1>Exemplo de um titulo</h1>
<p>Exemplo de um paragrafo em <strong>negrito</strong></p>
```

## ITALICO (ENFASE) `<em></em>`
```html
<p><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes".</strong></em></p>
```

# TAGS ESTRUTURAIS
## TAG DOCTYPE `<!DOCTYPE>`


```html
<!DOCTYPE HTML5>
```
- Ela vem no topo do arquivo.
- Visto que essa tag não carrega conteúdo, só passando uma informação, sendo assim ela não é fechada ao final.
- O "5" neste caso é opcional visto que é a ultima versão disponível do html.
- Visualmente não vemos mudança ... todavia, por houve uma mudança muito brusca no entendimento do navegador sobre esta pagina.


# TAG HTML `<HTML></HTML>`

````html
    <html>

    </html>
````
- Serve para definir o que vai ser renderizado no navegador
- Como é uma tag que vai levar conteúdo, precisamos abrir e fecha-la ao final.
- Identar as subtags de html.

# TAG meta charset
- Por padrão usamos:

```html
    <meta charset="UTF-8">
```
- A tag meta passa uma informação
    - Neste caso colocamos uma propriedade dentro.
        - charset = Conjunto de Caracteres UTF8
### Sendo assim podemos voltar a tag html para também definir o idioma principal da pagina.

````html
    <html lang ="pt-br">

    </html>
````
## TAG title `<title></title>`
````html
    <title> TITULO DO TOPO </title>
````
Olhando nosso index, além das definições e informações(html, doctype, meta, title) só declaramos o "cabeçalho"/h1 e "paragrafos"/p. 

![basicofinal](reademeprevia.png)

# informações -> na cabeça, elementos -> corpo

## abaixo da tag html precisa haver duas principais tags

- head (info)
- body (elementos)

Dentro da tag head ficaram outras tags (meta, title) e dentro de body (h1, p, em, strong e etc)

```html
<!DOCTYPE html>

<html lang="pt-br">
    <meta charset="UTF-8">
    <title>Barbearia Alura</title>

    <h1> Barbearia Alura</h1>

    <p>Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba.Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>

    <p><em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes".</strong></em></p>

    <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
</html>
```

## Caso use o live server(vscode) só a partido deste momento de definição da head e body ele vai conseguir atualizar o chrome sempre que algo novo for salvo.
