
// VERIFICA JS COLLEGATO

console.log('JS OK');

/* 

1 Creare una variabile per contenere Nome del passeggero
2 Creare una variabile per contenere kilometri e chiedere all'utente il numero dei kilometri che vuole percorrere 
3 Calcolo il totale del viaggio senza sconto
4 Stampo il totale del viaggio senza sconto e inserisco html
5 Calcolo Sconti del 20 % e del 60%
6 Quando devo applicare lo sconto?
7 Stampo gli sconti sul doc e inserisco un nuovo div
8 Valdazione

*/


const generaBiglietti = document.getElementById('genera')
console.log(generaBiglietti)

const nomePasseggero = document.getElementById('nome')

const kilometri = document.getElementById('kilo')

// const stampoNome = document.getElementById('stamponomecompleto')

const età = document.getElementById("age")



generaBiglietti.addEventListener('click', function () {

    const nome = nomePasseggero.value


    console.log(nome)


    const kilo = (kilometri.value)
    console.log(kilo)


    let age = età.value
    console.log(age)


    // FASE 3
    const totaleViaggio = kilo * 0.21
    console.log(totaleViaggio)





    // FASE 5

    const saldoMinori = totaleViaggio - (totaleViaggio * 0.2)
    console.log(saldoMinori.toFixed(2))

    const saldoAnziani = totaleViaggio - (totaleViaggio * 0.4)
    console.log(saldoAnziani.toFixed(2))


    if (age == 'minorenni') { sconto = saldoMinori.toFixed(2) + " Euro" + " Hai diritto a uno sconto del 20% perchè sei minorenne" }

    else if (age == 'over65') {
        sconto = saldoAnziani.toFixed(2) + " Euro" + " Hai diritto a uno sconto del 40% perchè sei un over 65 Anni"

    }
    else {
        sconto = totaleViaggio + " Euro" + " Non puoi beneficiare di nessuno sconto"

    }
    console.log(sconto)






})



