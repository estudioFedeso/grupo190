//Función que cambia el tamaño a un texto
function cambiarStyle(){
  document.getElementById('pMensaje').style.fontSize = "45px";
}

//Función que suma un numero
//suma-> Booleano que indica si suma o no
function sumarRestar(suma){
  var arregloNumero= [5, 2];
  var resultado = 0;
  if(suma){
   resultado = arregloNumero[0] + arregloNumero[1];
  alert("Suma: " + suma + ": Resultado" + resultado);
}
  resultado++;
  alert(resultado);
  --resultado;
}

//Función que evalua el operador negacion y sus resultados
function operadorNegacion(){
  /*var visible = true;
  alert(!visible);  // Muestra "false" y no "true"
*/
var cantidad = 0;
var resultado = !cantidad;  // resultado = true
 alert(resultado);
cantidad = 2;
resultado = !cantidad;  // resultado = false
 alert(resultado);
var mensaje = "";
resultado = !mensaje;  // resultado = true
alert(resultado);
}

//Función que muestra funcionamiento de la compuerta  logica AND
function operadorAND(){
  var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2; // resultado = false
 alert(resultado);
valor1 = true;
valor2 = true;
resultado = valor1 && valor2; // resultado = true
alert(resultado);
}

//Función que muestra funcionamiento de la compuerta  logica OR
function operadorOR() {
  var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2; // resultado = true
 alert(resultado);
valor1 = false;
valor2 = false;
resultado = valor1 || valor2; // resultado = false
alert(resultado);
}

//Función que realiza las operaciones aritmeticas basicas
//suma1 Numero
//suma2 Segundo numero para realizar la suma
//resta Numero Entero
//Multiplicacion Numero para realizar la Multiplicacion
//division numero que realizar las operaciones modulo y division
function operadoresMatematicos (suma1, suma2, resta, multiplicacion, division) {
  var sumar = suma1 + suma2;
  var restar =sumar- resta;
  var multiplicar = sumar * multiplicacion;
  var dividir = sumar/division;
  var operacionModulo = sumar%division;
  alert("SUMA " + sumar + " Resta " + restar + " multiplicacion " + multiplicar + " dividir " + dividir + " muodulo " + operacionModulo);
}

//FUncion encargada de realizar comprobaciones de realcionales sobre numeros
//numero1 Entero a comparar
//numero2 Entero a comparar
function relacionales(numero1, numero2) {
var mayorQue = numero1 > numero2;
var menorQUE = numero1 < numero2;

var mayoroIgual = numero1 >= numero2;
var menorroIgual = numero1 <= numero2;
var validaIgual = numero1 == numero2;
var validasiDiferente = numero1 != numero2;
alert("Valida dos numeros " + numero1 + "  " + numero2 + "/n mayorQue "
      + mayorQue + " menorQUE " + menorQUE + " mayoroIgual " + mayoroIgual
     + " validaIgual " + validaIgual + " validasiDiferente " + validasiDiferente);
}

//FUncion encargada de realizar comprobaciones de realcionales sobre cadenas
//cadena1 String a comparar
//cadena2 String a comparar
function relacionesCadenas(cadena1, cadena2) {
  var compararCadena = cadena1 == cadena2;
  var diferente = cadena1 != cadena2;
var mayor = cadena1 >= cadena2;
alert("Igual " + compararCadena + " diferente  " + diferente + "/n mayor "
      + mayor );
}
//Funcion que valida si una persona es mayor de edad
function mayorEdad() {
  var edad =   document.getElementById('txtTexto').value;
  if(edad >=18){
    alert("Eres mayor de edad" );
  }
  else{
    alert("No Eres mayor de edad" );
  }
}

//Funcion Encargada de clasifgicar la edad
function clasificarEDAD(){
    var edad =   document.getElementById('txtTexto').value;
    if(edad < 12) {
    alert("Todavía eres muy pequeño");
  }
  else if(edad < 19) {
    alert("Eres un adolescente");
  }
  else if(edad < 35) {
    alert("Aun sigues siendo joven");
  }
  else {
    alert("Piensa en cuidarte un poco más");
  }

}

//Funcion encargada de realizar la operacion de potenciacion
function potenciacion(){
    var base =   document.getElementById('txtBase').value;
    var exponete =   document.getElementById('txtExponente').value;
    var resultado = base;
    for(var i = 1; i < exponete; i++) {
        resultado = resultado * base;
    }

    document.getElementById('txtResultado').value = resultado;
}

//Funcion encargada de mostrar los dias del año
function obtenerDias(){
  var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  for(dia in dias) {
  alert(dias[dia]);
}

}
