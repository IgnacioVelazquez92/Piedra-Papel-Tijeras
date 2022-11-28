// let namePlayer = prompt(`Ingresa tu nombre`,"Player");
// let userPlayer = document.getElementById("namePlayer").innerHTML=`${namePlayer} :`;

const options=["Piedra", "Papel", "Tijera"];
let bot = null;
let player = null;
let contadorBot = 0;
let contadorPlayer =0;
let resultadoBot= null;

const userChoice = () => {
  player=parseInt(prompt(`Seleccione un valor del cero al 2 siendo:
  Piedra -> [0]
  Papel  -> [1]
  Tijera -> [2]`))
  bot = Math.round(Math.random()*2);
  resultadoBot = options[bot];
  // console.log(resultadoBot);
  if ((!isNaN(player) && player>=0 && player<3)) {
    switch (true) {
      case (options[player]==resultadoBot):
        resultado= (`<h1>Empate 🥴!!</h1> Elegiste ${options[player]} y la maquina dijo ${resultadoBot}`)
        document.getElementById("result").innerHTML=resultado;        
        break;

      case (options[player]=="Piedra" && resultadoBot=="Tijera"):
        resultado= (`<h1>Ganaste😁🎉!!</h1> Elegiste ${options[player]} y la maquina dijo ${resultadoBot}`)
        document.getElementById("result").innerHTML=resultado;
        contadorPlayer=contadorPlayer +1
        document.getElementById("count-win-player").innerHTML=contadorPlayer       
        break;
        
      case (options[player]=="Papel" && resultadoBot=="Piedra"):
        resultado= (`<h1>Ganaste😁🎉!!</h1> Elegiste ${options[player]} y la maquina dijo ${resultadoBot}`)
        document.getElementById("result").innerHTML=resultado;
        contadorPlayer=contadorPlayer +1
        document.getElementById("count-win-player").innerHTML=contadorPlayer       
        break;

      case (options[player]=="Tijera" && resultadoBot=="Papel"):
        resultado= (`<h1>Ganaste😁🎉!!</h1> Elegiste ${options[player]} y la maquina dijo ${resultadoBot}`)
        document.getElementById("result").innerHTML=resultado;
        contadorPlayer=contadorPlayer +1
        document.getElementById("count-win-player").innerHTML=contadorPlayer       
        break;

      default:
      resultado= (`<h1>Perdiste 😓!!</h1> Elegiste ${options[player]} y la maquina dijo ${resultadoBot}`)
      document.getElementById("result").innerHTML=resultado;
      contadorBot=contadorBot +1
      document.getElementById("count-win-bot").innerHTML=contadorBot 
        break;
    }

    
  } else {
    alert("❌❗ ingresaste un dato incorrecto, vuelve a intentar.")
  }
}