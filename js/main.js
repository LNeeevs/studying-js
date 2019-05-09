/*THE PRINCIPAL JS*/

var texto1 = "Be welcome! In this type we gonna study a little bit about JS. I'm facinated about that and want to learn more about this daily and if U want to do the same, come on with me!";
var texto2 = "In first we gonna see about IF statments:"

document.getElementById("textoA").innerHTML = texto1;
document.getElementById("textoB").innerHTML = texto2;

/*IF STATMENT : DIRECT MODE*/
var analise1 = (10 >= 100) ? 
    document.getElementById("resultado1").innerHTML = "10 é menor que 100" : 
    document.getElementById("resultado1").innerHTML = "10 é maior que 100";

/*IF STATMENT : INLINE MODE*/
var analise2 = (10 + 40); 
if(analise2 === '50') document.getElementById("resultado2").innerHTML = "O resultado é '50'";
else document.getElementById("resultado2").innerHTML = "O resultado é 50";

/*IF STATMENT :COMMON MODE*/
var analise3 = "João";
var analise4 = "20 anos";
if(analise3 === "João" && analise4 == "20 anos"){
    document.getElementById("resultado3").innerHTML = "Nome e idade corretos!";
}
else{
    document.getElementById("resultado3").innerHTML = "Nome e idade não convergem..."
}