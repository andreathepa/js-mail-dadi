//Creare uno spazio in cui l'utente possa scrivere la propria email

// fare in modo che ciò che ha scritto l'utente venga riconosciuto tra le email disponibili che sono: 
// tizio@gmail.com
// caio@gmail.com  
// semprogno@gmail.com
// vattelapesca@gmail.com


// elaborare il messaggio
let namemail = ['tizio@gmail.com', 'caio@gmail.com', 'semprogno@gmail.com', 'vattelapesca@gmail.com'];


let email = prompt("Per favore inserisci la tua email");

console.log(email);

let message = '';

let flag = false;

for(let i=0; i<namemail.length; i++){

    if(namemail [i].toLowerCase() === email.toLowerCase()){
        flag = true;
    }
}

if(flag === true){
    console.log("Complimenti l'email è presente nei nostri sistemi");
    message = "Complimenti l'email è presente nei nostri sistemi"
}

else{
    console.log("Spiacenti l'email inserita non è presente nei nostri sistemi");
}