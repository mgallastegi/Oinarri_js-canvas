var total = 0;
function handitu(){
    total++;
    document.getElementById("total").innerHTML=total;
}
function txikitu(){
    total--;
    document.getElementById("total").innerHTML=total;
}
function esleitu(){
    total = document.getElementById("balioa").value;
    document.getElementById("total").innerHTML = total;

}