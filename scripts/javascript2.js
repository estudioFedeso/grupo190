
/* En este punto, se llama a la función que suma
    2 números y muestra el resultado */
function suma(numero1, numero2, idContenedor){
  var resultado = numero1 + numero2;
  document.getElementById(idContenedor).innerHTML = resultado;
}


function cadena(){
  var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
  var letras = cadena.split("");
  var resultado = "";

  for(i in letras) {
    if(letras[i] == 'a') {
      break;
    }
    else {
      resultado += letras[i];
    }
  }
  alert(resultado);
// muestra "En un lug"
}

function cambiarParrafos(){
  var parrafos = document.getElementsByTagName("p");
  var primerParrafo = parrafos[0];
  primerParrafo.style.fontSize = "45px";
  document.getElementById("prueba").innerHTML= "Bienvenido";
  document.getElementById("especial").style.backgroundColor= "#d32e12";
  for(var i=0; i<parrafos.length; i++) {
   if(i==0){
     continue;
   }if(i>=3){
     break;
   }else{
      parrafos[i].innerHTML = "Parrafo numero " + i;
   }
 }
}

function fechas(){
  var fechaISO = new Date("2018-03-25");
  alert("FECHA ISO "  + fechaISO);
  var fechaYYYYMM = new Date("2015-03");
  alert("FECHA Año mes "  + fechaISO);
  var fechaISOLarga = new Date("2015-03-25T12:00:00Z");
    alert("FECHA ISO larga "  + fechaISO);
    var fechaCorta = new Date("03/25/2015");
    alert("FECHA corta "  + fechaCorta);
    var fechaLarga = new Date("25 Mar 2015");
      alert("FECHA Larga "  + fechaCorta);
}

function dividir(dividendo, divisor){
var resultado = null;
  try {
    resultado = dividendo/divisor;
  } catch (e) {
    resultado = "NO SE ADMITE DIVISION POR 0";
  } finally {
    alert(resultado);
  }
}
