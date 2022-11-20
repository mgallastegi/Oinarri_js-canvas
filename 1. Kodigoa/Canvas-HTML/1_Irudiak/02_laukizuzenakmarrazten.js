function init (){

    var c = document.getElementById("nireCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle="brown";
        // Adreiluaren zabalera, altuera eta tartea definitu
        const bh = 20,
            bw = 50,
            espazioa = 5;
    
        // Hormaren lerro eta zutabe kopurua kalkulatu
        const rows = Math.ceil(c.height / (bh + espazioa));
        const columns = Math.ceil(c.width / (bw + espazioa));
    
        // zutabeak marratu
        for (let r = 0; r < rows; r++) {
            //  lerroak marraztu
            for (let c = 0; c < columns; c++) {
                if (r % 2) {
                    c == 0 ? ctx.fillRect(c * (bw + espazioa), r * (bh + espazioa), bw / 2, bh) :
                        ctx.fillRect(c * (bw + espazioa) - bw / 2, r * (bh + espazioa), bw, bh);
                } else {
                    ctx.fillRect(c * (bw + espazioa), r * (bh + espazioa), bw, bh);
                }
            }
        }
}
window.onload=init;


