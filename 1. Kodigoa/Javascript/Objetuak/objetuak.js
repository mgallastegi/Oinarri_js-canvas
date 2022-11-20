var ikaslea = {
    izena: "Maialen",
    abizenak: "Gallastegi Pagaldai",
    adina: 20,
    media: function(){
        let media, mate=5, fisika=5, oinarri=5;
        media = mate+fisika+oinarri/3

        return media;
    }
}

ikaslea.kurtsoa = 1;
ikaslea.ordezkariaDa = false;

delete ikaslea.kurtsoa;

"izena" in ikaslea
"tutorea" in ikaslea

for(var i in ikaslea){
    alert(i);
    alert(ikaslea[i]);
}

