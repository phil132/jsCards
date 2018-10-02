var kartennamen = [
    "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Dame", "König", "Ass"
];

var farben = ["Herz", "Karo", "Pik", "Kreuz"];

var cards = [];

for (var i=0; i<kartennamen.length; i++){
    for(var j=0; j<farben.length; j++){
        var karte = kartennamen[i] + " " + farben[j];
        cards.push(karte);
    }
}

var test = new Array();

var newCards = [];
while (cards.length > 0){
    var zufall = Math.floor(Math.random() * cards.length);
    karte = cards[zufall];
    cards.splice(zufall, 1);
    newCards.push(karte)
}

function cardsort(a, b){
    var kartennamen = [
        "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Dame", "König", "Ass"
    ];

    var wert_a = (a.split(" ")[0]);
    var wert_b = (b.split(" ")[0]);

    var index_a = -1;  var index_b = -1;

    for(var i=0; i<kartennamen.length; i++){
        if(kartennamen[i] == wert_a) {
            index_a = i;
        }
        if(kartennamen[i] == wert_b) {
            index_b = i;
        }
    }
    if(index_a > index_b){
        return 1;
    }else if(index_a < index_b){
        return -1;
    }

    var farbe_a = (a.split(" "))[1];
    var farbe_b = (b.split(" "))[1];
    return (farbe_a > farbe_b) ? 1 : 0;
}

newCards.sort(cardsort);



console.log(newCards);
console.log(newCards.length);