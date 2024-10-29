
// Obter o nome e a XP do herói 
let nomeHeroi = ["Merlin","Gowther", "Diane", "King", "Ban", "Escanor", "Meliodas" , "Elizabeth"] 
let xpHeroi = 8000 ;

// Determinar o nível com base na XP
let nivel;

if (xpHeroi < 1000) {
  nivel = "Ferro";
  console.log(`O heiroi de nome ${nomeHeroi[0]} está no nível de ${nivel} ainda é aprendiz`);
} else if (xpHeroi <= 2000) {
  nivel = "Bronze";
  console.log(`O heiroi de nome ${nomeHeroi[2]} está no nível de ${nivel} ainda é iniciante`);
} else if (xpHeroi <= 5000) {
  nivel = "Prata";
  console.log(`O heiroi de nome ${nomeHeroi[1]} está no nível de ${nivel}  é.... ta pegando o jeito`);
} else if (xpHeroi <= 7000) {
  nivel = "Ouro";
  console.log(`O heiroi de nome ${nomeHeroi[3]} está no nível de ${nivel} ainda é intrmediario`);
} else if (xpHeroi <= 8000) {
  nivel = "Platina";
  console.log(`O heiroi de nome ${nomeHeroi[5]} está no nível de ${nivel}  já da pro gasto`);
} else if (xpHeroi <= 9000) {
  nivel = "Ascendente";
  console.log(`O heiroi de nome ${nomeHeroi[4]} está no nível de ${nivel} é... ta ficando bom`);
} else if (xpHeroi <= 10000) {
  nivel = "Imortal";
  console.log(`O heiroi de nome ${nomeHeroi[6]} está no nível de ${nivel}  é exelente`);
} else {
  nivel = "Radiante";
  console.log(`O heiroi de nome ${nomeHeroi[7]} está no nível de ${nivel} de GOD`);
}

// Exibir o resultado
console.log("Os herois são sensacionais");



