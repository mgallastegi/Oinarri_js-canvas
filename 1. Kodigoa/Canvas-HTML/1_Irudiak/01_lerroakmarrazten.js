function init (){
    var c = document.getElementById("nireCanvas");

      var ctx = c.getContext("2d");
    //   1. Lerro berdea marrazteko
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineWidth = 20;
      ctx.strokeStyle = 'green';
      ctx.lineTo(400,200);
      ctx.stroke();
      
     //   2. Lerro berdea marrazteko
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineWidth = 20;
      ctx.strokeStyle = 'green';
      ctx.lineTo(400,0);
      ctx.stroke();

    //   Lerro zuri horizontala marrazteko
      ctx.beginPath();
      ctx.moveTo(0,100);
      ctx.lineWidth = 25;
      ctx.strokeStyle = 'white';
      ctx.lineTo(400,100);
      ctx.stroke();

    //   Lerro zuri bertikala marrazteko
      ctx.beginPath();
      ctx.moveTo(200,0);
      ctx.lineWidth = 25;
      ctx.strokeStyle = 'white';
      ctx.lineTo(200,200);
      ctx.stroke();

}
window.onload=init;


