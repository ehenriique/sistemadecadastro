var dataEvento = "";
var idadeDoParticipante= 0;
var quantidadePessoas=0;
var listaDeConvidados="";
var listaDePalestrante ="";

dataEvento = prompt ("Informe dia do Evento")
if (dataEvento != "Hoje"){
 console.log ("Evento Permitido")
} else {
 console.log("Dia Invalido")
}

idadeDoParticipante = prompt ("Qual sua idade ?")
if (idadeDoParticipante >= 18){
 console.log ("Permitido Cadastro")
} else{
 console.log ("Idade não permitida")
}

quantidadePessoas = prompt ("Quantidade de Pessoas?")
if (quantidadePessoas <= 100){
 console.log ("Permitido")
} else {
   console.log ("Quantidade Maxima de Pessoas Atingido.")
}


listaDeConvidados = prompt ("Você é Convidado ou Palestrante?")
if (listaDeConvidados == "Convidado"){
 console.log ("Bem-vindo Convidado")
} else {
 console.log ("Bem-vindo Palestrante")
}


   
