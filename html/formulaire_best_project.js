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
