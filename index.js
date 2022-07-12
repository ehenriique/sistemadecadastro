var dataEvento = "";
var idadeDoParticipante= 0;
var listaParticipantes= ["Convidado 1", "Convidado 2 ", "Convidado 3", "Convidado 4"]
var palestrante= "Henrique";

var hoje = new Date();
var diaEvento= prompt ("Qual é o Dia para realizar o Evento ? (dd)");
var mesEvento= prompt ("Qual o mês do Evento ? (mm)");
var anoEvento= prompt ("Qual é o ano do Evento ?(aaaa)");
var dataEvento= new Date (anoEvento, mesEvento -1 , diaEvento)

if (dataEvento <=hoje){
   console.log ("Data do Evento Invalida")
} else {
   console.log ("Evento Permitido")
}

idadeDoParticipante = prompt ("Qual a idade do Participante ?")
if (idadeDoParticipante >= 18){
 console.log ("Permitido Cadastro")
}  else{
   if (listaParticipantes < 100){
      console.log ("Lista de Participantes ")
   } else {
      console.log ("Lista Cheia")
   }
   
      console.log ("Idade não permitida")
}


console.log ("O palestrante do Evento é " + palestrante );
console.log ("Quantidade de Participantes Cadastrados é ", listaParticipantes.length,)
   for ( let i = 0; i<listaParticipantes; i++){
      console.log (listaParticipantes[i]);
   }