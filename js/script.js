
// VERIFICA JS COLLEGATO

console.log('JS OK');

// START

// CREO Variabili utilizzabili nel button e collego button alla listener

const generaBiglietti = document.getElementById('genera')
console.log(generaBiglietti)




const nomePasseggero = document.getElementById('nome')

const kilometri = document.getElementById('kilo')

// const stampoNome = document.getElementById('stamponomecompleto')

const eta = document.getElementById("age")



generaBiglietti.addEventListener('click', function () {


    const nome = nomePasseggero.value


    console.log(nome)


    const kilo = parseInt((kilometri.value))
    console.log(kilo)


    let age = eta.value
    console.log(age)


    // FASE 3
    const totaleViaggio = kilo * 0.21
    console.log(totaleViaggio)





    // FASE 5

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

    // FASE 6
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


