# O que é o Reset CSS?


Usando o mesmo layout de nossos projetos em navegadores diferentes alguns espaços e margens podem aparecer diferentes. O código html vai ser o mesmo, po´rem o próprio navegador aplicou algumas margens e outras configurações definidas pelo próprio. E cada navegador coloca a margem que "ele quis".


Precisando padronizar isso, usamos o reset CSS.
BAsicamente removendo todas essas propriedades que podem ou não terem sido editadas pelo navegador.
Isso é chamado de Cross Browser.

Existem varios "reset css" podemos usar este => https://meyerweb.com/eric/tools/css/reset/



O reset css tem de ser colocado antes do style css, para zerar as propriedades e depois colocar as que nós definimos.


```html
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

