class Pets {
    constructor(tutor, nomePet, especie, foto, dataNasciemnto) {
        this.tutor = tutor;
        this.nomePet = nomePet;
        this.especie = especie;
        this.foto = foto;
        this.foto = dataNasciemnto;

    }
}
class ListPet {
    constructor() {
        this.listpets = []
    }
    add(pets) {
        this.listpets.push(pets)
    }
}
const petsList = new ListPet();


//verificar inouts preeenchidos ou nao
function mostraCadasto() {
    let tutor = document.getElementById("tutor").value;
    let nomePet = document.getElementById("nomePet").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let dataNasciemnto = document.getElementById("dataNasciemnto").value;

    console.log(tutor);
    console.log(nomePet);
    console.log(especie);
    console.log(foto);
    console.log(dataNasciemnto);

    const pet = new Pets(tutor, nomePet, especie, foto, dataNasciemnto);
    petsList.add(pet)

    if (tutor == "" || nomePet == "" || especie == "" || foto == "" || dataNasciemnto == "") {
        msgErro("favor preencher todos os campos.", "erro")
    } else {
        return false
    }
console.log(petsList.listpets);
}

function dateinPTBR(dataNasciemnto) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = dataNasciemnto.split.reverse("-");
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

