// Crie uma imagem em HTML com o ID "change-image" e defina uma imagem de sua escolha. Em JavaScript, adicione um evento de clique à imagem para que, quando o usuário clique nela, a imagem seja alterada para outra imagem de sua escolha.

var imgF = document.getElementById("imagemSite");

if (imgF.getAttribute("src") == "https://cdna.artstation.com/p/assets/images/images/042/667/046/large/jeroen-cloosterman-bob-parr-rendercam-v001.jpg?1635149214") {

imgF.addEventListener("click", function () {
    imgF.setAttribute("src", "https://i.imgflip.com/5unh82.png")
})
} else {
    

    imgF.addEventListener("click", function () {
        imgF.setAttribute("src", "https://i.imgflip.com/5unh82.png")
    })

    
}