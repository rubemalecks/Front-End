# LINKS | ANCORAS

SINTAXE (básica):

```HTML
<a href="https://google.com.br"> Nome do Link <\a>
```

Outra(hreflag):

```HTML
<a href="https://google.com.br" hreflang="en"> Nome do Link <\a>
```

- Indicar idioma principal do site.

Outra(target):
Nome do Link

```html
<a href="https://google.com.br" target="_self"> Nome do Link <\a></a>
```

---

### Redirecionamento(target)

- \_self vai abrir o link na janela ou frame atual (padrão)

- \_blank vai abrir o link em uma nova janela em branco

- \_top vai desfazer todos os frames e abrir o destino no navegador completo

- \_parent similar ao uso do \_top em uma referência à janela mãe

- nome-do-frame caso esteja usando frames, indicar o nome da janela a abrir

## Relação entre documentos / paginas

Basicamente... O atributo "_rel_" especifica a relação entre o documento atual e o documento vinculado.

Os mecanismos de pesquisa podem usar esse atributo para obter mais informações sobre um link.

```html
<a href="https://google.com.br" target="_self" rel="next"> Nome do Link <\a></a>
```

- _next_ - indica que o link é para a próxima parte do documento atual.

- _prev_ - indica que o link é para a parte anterior do documento atual.

- _author_ - indica que é um link para o site do autor do artigo atual.

- _external_ - indica que é um link para outro site que não faz parte do site atual.

- _nofollow_ - indica que é um link para um site não endossado, como um link pago.

---

Exemplo **FINAL**:

```html
<a href="https://google.com.br" target="_blank" rel="external">
  Nome do Link <\a></a
>
```

- rel="_external" - Fora do meu site.
- target="\_blank" - Vai abrir o link em uma janela em branco.

---

https://www.youtube.com/watch?v=BNHR6IQJGZs
