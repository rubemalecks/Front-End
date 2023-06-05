// Função para escalar um jogador
function addPlayer() {
    var positionSelect = document.getElementById("position");
    var nameInput = document.getElementById("name");
    var numberInput = document.getElementById("number");
  
    var position = positionSelect.value;
    var name = nameInput.value;
    var number = numberInput.value;
  
    if (confirm("Deseja confirmar a escalação de " + name + " como " + position + " número " + number + "?")) {
      var teamList = document.getElementById("team-list");
  
      var listItem = document.createElement("li");
      listItem.textContent = position + " - " + name + " (" + number + ")";
      teamList.appendChild(listItem);
  
      // Limpar campos de texto
      nameInput.value = "";
      numberInput.value = "";
    }
  }
  
  // Função para remover um jogador
  function removePlayer() {
    var numberToRemoveInput = document.getElementById("numberToRemove");
    var numberToRemove = numberToRemoveInput.value;
  
    if (confirm("Deseja confirmar a remoção do jogador com número " + numberToRemove + "?")) {
      var teamList = document.getElementById("team-list");
      var players = teamList.getElementsByTagName("li");
  
      for (var i = 0; i < players.length; i++) {
        var player = players[i];
        var playerNumber = player.textContent.split("(")[1].replace(")", "");
  
        if (playerNumber === numberToRemove) {
          teamList.removeChild(player);
          break;
        }
      }
  
      // Limpar campo de texto
      numberToRemoveInput.value = "";
    }
  }
  