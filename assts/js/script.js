console.log("js ok");

//verificar inouts preeenchidos ou nao
function mostraCadasto(){
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nomePet").value;
    let especie = document.getElementById("especie").value;
    let foto= document.getElementById("foto").value;
    let dataNasciemnto= document.getElementById("dataNasciemnto").value;

    console.log(tutor);
    console.log(nomePet);
    console.log(especie);
    console.log(foto);
    console.log(dataNasciemnto);


    if( tutor == "" || nomePet == "" || especie == "" || foto == "" || data == "" ){
       msgErro("favor preencher todos os campos.", "erro")
    }else{
        return false
    }

}

function msgErro(msg,tipomsg){
let msgError = document.getElementById("msgErro");
msgErro.innerHTML = '';

let mostrarMSG = `
<p class='${tipomsg}'>${msg}</p>
`
msgError.innerHTML = mostrarMSG

setTimeout(function () {
    msgErro.innerHTML = '';
}, 3000)
}


