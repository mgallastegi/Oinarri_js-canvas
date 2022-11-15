function egiaztatu(){
    let balioa1 = document.getElementById("balioa1").value;
    let balioa2 = document.getElementById("balioa2").value;

    if(balioa1>balioa2){
        document.getElementById('h').innerHTML="true";
        document.getElementById('hb').innerHTML="true";
        document.getElementById('t').innerHTML="false";
        document.getElementById('tb').innerHTML="false";
    }

    if(balioa2>balioa1){
        document.getElementById('h').innerHTML="false";
        document.getElementById('hb').innerHTML="false";
        document.getElementById('t').innerHTML="true";
        document.getElementById('tb').innerHTML="true";
    }

    if(balioa1==balioa2){
        document.getElementById('h').innerHTML="false";
        document.getElementById('hb').innerHTML="true";
        document.getElementById('t').innerHTML="false";
        document.getElementById('tb').innerHTML="true";
    }
}