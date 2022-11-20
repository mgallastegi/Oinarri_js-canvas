var zenbakiSekretua = parseInt(Math.random()*100)+1;
var zenb;

zenbakiaAurkitu(zenbakiSekretua);

function zenbakiaAurkitu(zenbakiSekretua){
    while(zenbakiSekretua != zenb){
        zenb = prompt("Eman zenbaki bat");

        if (zenbakiSekretua == zenb){
            console.log("Zorionak, zenbakia asmatu duzu");
        }else{
            if(zenbakiSekretua<zenb){
                console.log("Txikiagoa da zenbaki sekretua");
            }else console.log("Handiagoa da zenbaki sekretua");
        }
    }
}