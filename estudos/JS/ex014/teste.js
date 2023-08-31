function carregar() {
  var msg = window.document.querySelector("div#msg");
  var img = window.document.querySelector("img#imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Agora são ${hora} horas, bom dia!`;
    img.src = "manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    msg.innerHTML = `Agora são ${hora} horas, boa tarde!`;
    img.src = "tarde.png";
    document.body.style.background = "#b9846b";
  } else {
    //BOA NOITE!
    msg.innerHTML = `Agora são ${hora} horas, boa noite!`;
    img.src = "noite.png";
    document.body.style.background = "#515154";
  }
}
