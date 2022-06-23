// VERIFICA JS COLLEGATO

console.log('JS OK');

// START

// CREO Variabili utilizzabili nel button e collego button alla listener
//FORM ELEMENTS

const generaBiglietti = document.getElementById('genera')
console.log(generaBiglietti)

const resetButton = document.getElementById('annulla')
console.log(resetButton)

const nomePasseggero = document.getElementById('nome')

const kilometri = document.getElementById('kilo')

const eta = document.getElementById("age")


generaBiglietti.addEventListener('click', function () {

    // RECUPERO I VALORI DEL FORM
    const nome = nomePasseggero.value
    console.log(nome)

    const kilo = parseInt((kilometri.value))
    console.log(kilo)


    //VALIDAZIONE KILOMETRI
    if (!isNaN(kilo) && (kilo > 0 & kilo > 0)) { }
    else {
        alert("Inserisci un coretto formato , puoi inserire solo numeri e maggiori di zero")

    }

    let age = eta.value
    console.log(age)

    // FASE  COSTO VIAGGIO
    const totaleViaggio = kilo * 0.21
    console.log(totaleViaggio)


    // FASE   SCONTO

    const saldoMinori = totaleViaggio - (totaleViaggio * 0.2)
    console.log(saldoMinori.toFixed(2))

    const saldoAnziani = totaleViaggio - (totaleViaggio * 0.4)
    console.log(saldoAnziani.toFixed(2))

    let sconto

    if (age == 'minorenne') { sconto = saldoMinori.toFixed(2) + " Euro" }

    else if (age == 'over65') {
        sconto = saldoAnziani.toFixed(2) + " Euro"

    }
    else {
        sconto = "0"

    }
    console.log(sconto)

    // FASE 
    // Generazione Random  Numero

    const random = Math.floor(Math.random() * 8) + 1
    console.log(random)

    // GENERAZIONE ALFANUMERICA CODICE
    const n = 5;
    var T = [];
    var pop = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < n; i++)
        T.push(pop.charAt(Math.floor(Math.random() * pop.length)));

    OT.innerHTML = T;

    // FASE 7 STAMPO

    const total = document.getElementById('costodelbliglietto')
    total.innerText = totaleViaggio
    console.log(total);


    const carro = document.getElementById('generaCarozza')
    carro.innerText = random
    console.log(carro);


    const totalname = document.getElementById('nometotale')
    totalname.innerText = nome
    console.log(totalname);


    const scontototale = document.getElementById('offerta')
    scontototale.innerText = sconto
    console.log(scontototale);
})

// ANNULLA  

resetButton.addEventListener('click', function () {

    nomePasseggero.value = ''
    kilometri.value = ""
    eta.value = ''
})