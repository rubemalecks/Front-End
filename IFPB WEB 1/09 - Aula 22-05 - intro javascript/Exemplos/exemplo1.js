/*Exercício 03: Faça uma função para verificar se um ano é bissexto ou não. 
Utilize a regra: Um ano bissexto é divisível por 4, mas não por 100, ou então se é divisível por 400.
Exemplo: 1988 é bissexto pois é divisível por 4 e não é por 100; 2000 é bissexto porque é divisível por 400.*/

function bissexto(ano){
    if ((ano%4==0 && ano%100!=0) || ano%400==0)
       return true;
    return false;   
}

let ano = window.prompt("Informe o ano: ")
window.confirm("Você está certo disso?")

if (bissexto(ano)){
    window.alert("Ano bissexto!")
} else {
    window.alert("Ano nao eh bissexto!")
}
