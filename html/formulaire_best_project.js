function selection_niveau_maths(){
    if (document.getElementById("Mathematique").checked == true){
        document.getElementById("container_maths").style.visibility="visible";
    } else{
        document.getElementById("container_maths").style.visibility="hidden";
    }
}


function selection_niveau_francais() {
    if (document.getElementById("Francais").checked == true){
        document.getElementById("container_francais").style.visibility="visible";
    } else{
        document.getElementById("container_francais").style.visibility="hidden";
    }

}

function selection_niveau_histoire() {
    if (document.getElementById("Histoire").checked == true){
        document.getElementById("container_histoire").style.visibility="visible";
    } else{
        document.getElementById("container_histoire").style.visibility="hidden";
    }

}


function selection_niveau_chimie() {
    if (document.getElementById("Chimie").checked == true){
        document.getElementById("container_chimie").style.visibility="visible";
    } else{
        document.getElementById("container_chimie").style.visibility="hidden";
    }
}

function verif_formulaire() {
    // definit un RegExp pour le telephone
    var Regegex_tel = new RegExp("^(0|\\+33|0033)[1-9][0-9]{8}$")
    if (Regegex_tel.test(document.getElementById("tel").value)) {
        document.getElementById("numero_incorrect").style.visibility="hidden";
    } else {document.getElementById("numero_incorrect").style.visibility="visible";}
    // affiche le message d'erreur du tel
    
    var Regegex_mail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$")
    if ((Regegex_mail.test(document.getElementById("email").value)) || (document.getElementById("email").value === null)) {
        document.getElementById("email_incorrect").style.visibility="hidden";
    } else {document.getElementById("email_incorrect").style.visibility="visible";}
    // le || permet de faire un OR? bref ça marche pas si l'email est vide
    
// pour le mot de passe je verifie qu'il y ai 1 minuscule (score_pass + 1), 1 majuscule, 1 nombre et 8 caractères    
    score_pass=0
    var pass = document.getElementById("pass").value
    if (pass.match(/[a-z]/)){
        score_pass +=1
    }if (pass.match(/[A-Z]/)){
        score_pass +=1
    }if (pass.match(/[0-9]/)){
        score_pass +=1
    }if (pass.length > 7){
        score_pass +=1
    }
    if (score_pass == 4){
        document.getElementById("password_incorrect").style.visibility="hidden";
    } else {document.getElementById("password_incorrect").style.visibility="visible";}

    d1= new Date()
    d2= new Date(document.querySelector('input[type="date"]').value)
    if (Number((d1.getTime() - d2.getTime()) / 31536000000).toFixed(0) < 18 ||Number((d1.getTime() - d2.getTime()) / 31536000000).toFixed(0) >100) {
        document.getElementById("age_incorrect").style.visibility="visible";
    } else {
        document.getElementById("age_incorrect").style.visibility="hidden";
    }
}