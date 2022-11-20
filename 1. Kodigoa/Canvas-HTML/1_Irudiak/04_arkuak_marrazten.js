function init (){
    var c = document.getElementById("nireCanvas");
    c.height=window.innerHeight;
    c.width=window.innerWidth;

    var ctx = c.getContext("2d");
    ctx.beginPath();
      ctx.moveTo(200,200);
      ctx.lineWidth = 40
      ;
      ctx.lineCap = "round"; 
      ctx.strokeStyle = "Teal";
      ctx.lineTo(200,100);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(250, 100, 50, 0, 1 * Math.PI, true);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(300,200);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.lineTo(300,100);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(350, 100, 50, 0, 1 * Math.PI, true);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(400,150);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.lineTo(400,100);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(450, 140, 50, 0, 1 * Math.PI, false);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = '#Teal';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(500,150);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.lineTo(500,100);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(550, 100, 50, 0, 1 * Math.PI, true);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(600,200);
      ctx.lineWidth = 40
      ;
      ctx.strokeStyle = 'Teal';
      ctx.lineTo(600,100);
      ctx.stroke();

}
window.onload=init;


