//DOM CONTENT LOADED - SEZIONE PRINCIPALE
document.addEventListener('DOMContentLoaded', () => {

    //--------------------------- PAGINE --------------------------------
    let homepage = document.querySelector("#homepage");
    let search = document.querySelector("#search");
    let write = document.querySelector("#write");
    let activity = document.querySelector("#activity");
    let account = document.querySelector("#account");

    // ---------------------- PULSANTE FOR YOU ---------------------------
    let foryou = document.querySelector("#foryou");

    //--------------------------- DI DEFAULT (si apre la pagina di homepage) --------------------------------
    homepage.style.display = "block";
    search.style.display = "none";
    write.style.display = "none";
    activity.style.display = "none";
    account.style.display = "none";


    // -------------------------- PULSANTI DELLA NAV BAR -------------------
    let threadIcon = document.querySelector("#iconT");
    let clickHomepage = document.querySelector("div:nth-child(2) li:nth-child(1)");
    let clickSearch = document.querySelector("div:nth-child(2) li:nth-child(2)");
    let searchWrite = document.querySelector("div:nth-child(2) li:nth-child(3)");
    let clickActivity = document.querySelector("div:nth-child(2) li:nth-child(4)");
    let clickAccount = document.querySelector("div:nth-child(2) li:nth-child(5)");

    // ------------------------ PULSANTE CHE AVVIA LA MODALE (nuovo thread) ---------------------------
    // Ottieni la modal
    let modal = document.querySelector("#myModal");


    // Quando l'utente clicca sul testo "Avvia un thread..."
    let avviaUnThread = document.querySelector("#avviaUnThread");
    avviaUnThread.addEventListener("click", function() {
        modal.style.display = "block"; // Mostra la modal
    });

    // Quando l'utente clicca fuori dalla modal, chiudi la modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Nascondi la modal
        }
    });



    //------------------------------- EVENTI CLICK ---------------------------
    threadIcon.addEventListener('click', iconThreads);
    clickHomepage.addEventListener('click', HPGeneretor);
    clickSearch.addEventListener('click', SGenerator);
    searchWrite.addEventListener('click', WGenerator);
    clickActivity.addEventListener('click', ActivityGenerator);
    clickAccount.addEventListener('click', AccountGenerator);

    foryou.addEventListener('click', switchPage);
})

let forYouClicked = false;

// ------------------------- FUNZIONI ----------------------------
function iconThreads () {
    homepage.style.display = "block";
    search.style.display = "none";
    write.style.display = "none";
    activity.style.display = "none";
    account.style.display = "none";
}

//funzione che genera l'homepage
function HPGeneretor () {
    homepage.style.display = "block";
    search.style.display = "none";
    write.style.display = "none";
    activity.style.display = "none";
    account.style.display = "none";
}


//funzione che genera la pagina di ricerca
function SGenerator () {
    search.style.display = "block";
    homepage.style.display = "none";
    write.style.display = "none";
    activity.style.display = "none";
    account.style.display = "none";
}


//funzione che genera la pagina per scrivere un post
function WGenerator () {
    write.style.display = "block";
    homepage.style.display = "none";
    search.style.display = "none";
    activity.style.display = "none";
    account.style.display = "none";
}

//funzione che genera la pagina di attività
function ActivityGenerator () {
    activity.style.display = "block";
    homepage.style.display = "none";
    search.style.display = "none";
    write.style.display = "none";
    account.style.display = "none";
}

//funzione che genera la pagina account
function AccountGenerator () {
    account.style.display = "block";
    homepage.style.display = "none";
    search.style.display = "none";
    write.style.display = "none";
    activity.style.display = "none";
}

//funzione che avvia la modale
/* function newThread () {
    
} */

//funzione che cambia la pagina da "per te" a "seguiti"
function switchPage() {
    if (!forYouClicked) {
        foryou.innerHTML = `Seguiti <img src="assets/img/icons/flip.png" alt="frecce">`;
        forYouClicked = true;
    } else {
        foryou.innerHTML = `Per Te <img src="assets/img/icons/flip.png" alt="frecce">`;
        forYouClicked = false;
    }
}