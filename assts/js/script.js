class Pets {
    constructor(tutor, nomePet, especie, foto, dataNascimento) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.foto = foto;
        this.dataNascimento = dataNascimento;
        this.age = this.getAge(dataNascimento)

    }

    getAge(birthdate) {
        let today = new Date();
        let niver = new Date(birthdate);
        let age = today.getFullYear() - niver.getFullYear();
        console.log("Today: ", today);
        console.log("Niver: ", niver);
        console.log("age: ", age);

        let month = today.getMonth() - niver.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < niver.getDate())) {
            age--;
        }
       
        return age < 0 ? 0 : age;

    }
}


class ListPet {
    constructor() {
        this.listpets = []
    }
    add(pets) {
        if (isAnyInputEmpty()) {
            msgErro("ainda a inputs em branco", "erro")
        } else if (!isURLValida(pets.foto)) {
            msgErro("coloque uma img valida", "erro")
        }else {
            this.listpets.push(pets);
            linpainputs();
            exibirPets();
        }
}
}

const petsList = new ListPet();  



//verificar inouts preeenchidos ou nao
function mostraCadasto() {
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nomePet").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let dataNascimento = document.getElementById("dataNascimento").value;

    const pet = new Pets(tutor, nomePet, especie, foto, dataNascimento);
    petsList.add(pet);
    }
    


function exibirPets() {
    let exibir = document.getElementById("exibir");
    let cardDiv = "";

    petsList.listpets.forEach(pets => {
        cardDiv += `
            <div class="card">
                <img src="${pets.foto}" alt="${pets.foto}">
                <p> nome do pet:${pets.nomePet}<p>
                <p>especie: ${pets.especie}</p>
                <p>tutor: ${pets.tutor}</p>
                <p>data de nascimento: ${pets.dataNascimento}</p>
                <p>idade: ${pets.age}</p>

            </div>
        `

    });

    exibir.innerHTML = cardDiv;
}


function dateinPTBR(dataNasciemento) {

    let dateArray = dataNasciemento.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function msgErro(msg, tipomsg) {
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
function linpainputs() {
    document.getElementById("tutor").value = "";
    document.getElementById("nomePet").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("dataNascimento").value ="";

}
function isAnyInputEmpty(){
    const tutor = document.getElementById("tutor").value;
    const nomePet= document.getElementById("nomePet").value;
    const especie= document.getElementById("especie").value;
    const foto = document.getElementById("foto").value;
    const dataNascimento =document.getElementById("dataNascimento").value;


    if(tutor == "" || nomePet == "" || especie== "" || foto == "" || dataNascimento== ""){
        return true;
    } else {
        return false;
    }
}


function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function mostrarExibir(){
    const petHTML = document.getElementById("exibir");
    exibir.innerHTML ="";
    let caixa = petsList.listpets;
    caixa.forEach(animal => {
        const animalPet = `
        
        <div class="card">
        <img src="${animal.foto}" alt="${animal.foto}">
        <p> nome do pet:${animal.nomePet}<p>
        <p>especie: ${animal.especie}</p>
        <p>tutor: ${animal.tutor}</p>
        <p>data de nascimento: ${animal.dataNascimento}</p>
        <p>idade: ${animal.age}</p>
    </div>; 

    petHTML.innerHTML += animal
        `
    }
         )

}