{
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();//xaguak canvasekiko koordenatuak jasotzeko.
var x=0,y=0,marrazten=false,kolorea="black",zabalera=1;

function defkolorea(c){ //jasotako kolorea erabiltzeko
    kolorea=c;
}

function defzabalera(g){
    zabalera=g;
}

//Gertaerak//

canvas.addEventListener("mousedown",function(e){
    x=e.clientX - rect.left; 
    y=e.clientY - rect.top;
    marrazten=true;
});

canvas.addEventListener("mousemove",function(e){ 
    if(marrazten===true){
        marraztu(x, y, e.clientX-rect.left, e.clientY-rect.top);
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
    }
});

canvas.addEventListener ("mouseup",function(e){
    if(marrazten===true){
        marraztu(x, y, e.clientX-rect.left, e.clientY-rect.top)
        x=0;
        y=0;
        marrazten=false;
    }

});

///Funtzioa///

function marraztu(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.strokeStyle=kolorea;
    ctx.lineWidth=zabalera;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
}

