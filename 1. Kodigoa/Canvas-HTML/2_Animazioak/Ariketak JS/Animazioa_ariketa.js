var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var botoia = document.getElementById('botoia');
var animazio_mota = document.getElementById('animazioa').value;
var i = 0;
ctx.canvas.width = 360;
ctx.canvas.height = 100;
function ondaanimation(){
        setInterval(onda, 1);
        function onda() {
                ctx.beginPath();     
                ctx.moveTo(i*(360/360),50);
                ctx.lineTo(i*(360/360), 50-(20*(Math.sin(i * Math.PI / 180)))); 
                i = i + 1;
                ctx.stroke();
                
}
}

function laukiaanimation(){
        setTimeout(laukia, 3000)
        function laukia(){
                ctx.fillRect(25, 25, 50, 50);
                ctx.strokeRect();
        }

}

function aukeratu(){
        animazio_mota = document.getElementById('animazioa').value;
        if( animazio_mota==1){ondaanimation();}
        if( animazio_mota==2){laukiaanimation();}
}

botoia.onclick = function (){aukeratu()};    
        



