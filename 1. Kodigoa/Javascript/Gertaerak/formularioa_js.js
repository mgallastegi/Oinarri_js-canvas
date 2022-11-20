const form = document.getElementById("formularioa");

// Izenaren eremua betearazteko
function konprobatuIzena(e){
    if(form.izena.value==0){
        alert("Bete izena eremua, mesedez.");
        e.preventDefault();
    }
}
// Emailaren eremua betearazteko
function konprobatuEmaila(e){
    if(form.email.value==0){
        alert("Bete email eremua, mesedez.");
        e.preventDefault();
    }
}
// Generoaren eremua betearazteko
function konprobatuGeneroa(e){
    if(form.generoa[0].checked==false&&form.generoa[1].checked==false&&form.generoa[2].checked==false){
        alert("Bete generoa eremua, mesedez.");
        e.preventDefault();
    }
}
// Pasahitzaren eremua betearazteko
function konprobatuPasahitza(e){
    if(form.pasahitza.value==0){
        alert("Bete pasahitza eremua, mesedez.");
        e.preventDefault();
    }
}
// Funtzio guztiak bateratzeko
function konprobaketa(e){
    konprobatuIzena(e);
    konprobatuEmaila(e);
    konprobatuGeneroa(e);
    konprobatuPasahitza(e);
}
form.addEventListener("submit", konprobaketa);