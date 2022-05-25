function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.dio.me/"); //nova aba
    //window.location.href = "https://www.dio.me/"; //mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}











/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/


/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão" , "Brasil"));
*/

//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());


/*estrutura de repetição
var count;
for(count=0; count <=5; count++){
   alert(count); 
};
*/

/* estrutura de repetição
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
};
*/

/* laços condicionais
var idade = prompt("Qual sua idade?");
//var idade = 18;
if(idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta.nome);
//console.log(fruta.cor);
//alert(fruta.cor);

//var lista = ["maça","pera","laranja"];
//lista.push("uva");  //adicionar elemento
//console.log(lista); //imprimir no console
//lista.pop();    //remover ultimo elemento
//console.log(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));
//console.log(lista.join(" * "));

//var nome="Jeferson Pereira";
//var n1=5;
//var n2=3;
//var frase="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos!");
//alert(idade+idade2);
//console.log(nome);
//console.log(n1 - n2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());