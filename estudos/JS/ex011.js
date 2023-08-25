var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!");
} else {
  if (hora <= 18) {
    console.log("Boa tarde!");
  } else {
    if (hora > 18) {
      console.log("Boa noite!");
    } else {
      if (hora > 0 || hora < 4) {
        console.log("Boa madrugada!");
      }
    }
  }
}
var hoje = new Date();
var diadasemana = hoje.getDay;

switch (diadasemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Erro. DATA INVÁLIDA");
    break;
}
