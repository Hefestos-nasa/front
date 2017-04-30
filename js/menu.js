  // ABRIR MENU
  abreMenu.onclick = function() {
    var abre = document.getElementById('painelResp');
    if (abre.style.display !== 'block') {
      abre.style.display = 'block';
    } else {
      abre.style.display = 'none';
    }
  };
  // /ABRIR MENU
  // FECHAR MENU
  fechaMenu.onclick = function() {
    var fecha = document.getElementById('painelResp');
    if (fecha.style.display !== 'block') {
      fecha.style.display = 'block';
    } else {
      fecha.style.display = 'none';
    }
  };
  // /FECHAR MENU



  fechaBot.onclick = function() {
  var abrebot = document.getElementById('espBot');
  if (abrebot.style.display !== 'none') {
    abrebot.style.display = 'none';
  } else {
    abrebot.style.display = 'block';
  }
};
