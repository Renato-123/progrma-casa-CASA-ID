let nome1= document.querySelector("#nome1")
console.log(nome1);

let nome = document.querySelector("#nome")
console.log(nome);


function enviarInformacoes(){
    console.log(nome1.value)
    console.log(nome.value)
    console.log(`nome é ${nome1.value} e senha é ${nome.value}`)

 
    if (nome1.value == "casa-figueiroa" && nome.value == "casa-fig-123"){
        window.alert("logado com sucesso")
        window.location.replace("https://renato-123.github.io/progrma-casa/");


    }
    else{
        window.alert("tente novamente")
    }
}

    console.log("È NA")