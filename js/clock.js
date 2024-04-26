var table = document.getElementById("table");

var L = [];

init();

function init() {
    for(var y = 0; y < 10; y++) {
        for(var x = 0; x < 11; x++) {
            getCell(x, y).setAttribute("class", "disable");
        }
    }

    setL();

    update();
    setInterval(update, 1000);
}

function setL() {
    L = [];
    for(var x = 0; x < 11; x++) {
        var l = [];
        for(var y = 0; y < 10; y++) {
            l.push(0);
        }
        L.push(l);
    }
}

function update() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();

    setL();

    print_IL_();
    print_EST_();
    
    if(((hours == 1 || hours == 13) && min < 35) || ((hours == 0 || hours == 12) && min >= 35)) {
        print_HEURE_();
    }else if(((hours == 0 || hours == 12) && min < 35) || (hours == 11 || hours == 23) && min >= 35) {
    }else {
        print_HEURES_();
    }


    if(min < 35) {
        if(hours == 1 || hours == 13)
            print_UNE_();
    
        if(hours == 2 || hours == 14)
            print_DEUX_();
    
        if(hours == 3 || hours == 15)
            print_TROIS_();
        
        if(hours == 4 || hours == 16)
            print_QUATRE_();
        
        if(hours == 5 || hours == 17)
            print_CINQ_();
        
        if(hours == 6 || hours == 18)
            print_SIX_();
        
        if(hours == 7 || hours == 19)
            print_SEPT_();
        
        if(hours == 8 || hours == 20)
            print_HUIT_();
        
        if(hours == 9 || hours == 21)
            print_NEUF_();
    
        if(hours == 10 || hours == 22)
            print_DIX_();
    
        if((hours == 11 || hours == 23))
            print_ONZE_();
        
        if(hours == 12)
            print_MIDI_();

        if(hours == 0)
            print_MINUIT_();
    }else {   
        if(hours == 0 || hours == 12)
            print_UNE_();
        
        if(hours == 1 || hours == 13)
            print_DEUX_();

        if(hours == 2 || hours == 14)
            print_TROIS_();

        if(hours == 3 || hours == 15)
            print_QUATRE_();

        if(hours == 4 || hours == 16)
            print_CINQ_();

        if(hours == 5 || hours == 17)
            print_SIX_();

        if(hours == 6 || hours == 18)
            print_SEPT_();

        if(hours == 7 || hours == 19)
            print_HUIT_();

        if(hours == 8 || hours == 20)
            print_NEUF_();

        if(hours == 9 || hours == 21)
            print_DIX_();

        if(hours == 10 || hours == 22)
            print_ONZE_();

        if(hours == 11)
            print_MIDI_();

        if(hours == 23)
            print_MINUIT_();
    }



    if((min >= 5 && min < 10) || min >= 55)
        print_CINQ_bis_();

    if((min >= 10 && min < 15) || (min >= 50 && min < 55))
        print_DIX_bis_();

    if(min >= 15 && min < 20) {
        print_ET_();
        print_QUART_();
    }
    
    if((min >= 20 && min < 25) || (min >= 40 && min < 45))
        print_VINGT_();
    
    if((min >= 25 && min < 30) || (min >= 35 && min < 40)) {
        print_VINGT_();
        print__();
        print_CINQ_bis_();
    }
    
    if(min >= 30 && min < 35) {
        print_ET_bis_();
        print_DEMIE_();
    }
    
    if(min >= 35)
        print_MOINS_();
    
    if(min >= 45 && min < 50) {
        print_LE_();
        print_QUART_();
    }

    applyUpdate();
}

function applyUpdate() {
    for(var x = 0; x < 11; x++) 
        for(var y = 0; y < 10; y++) 
            if(L[x][y] == 1)
                enable(x, y)
            else
                disable(x, y);
}

function print_IL_() {
    push(0, 0);
    push(1, 0);
}

function print_EST_() {
    push(3, 0);
    push(4, 0);
    push(5, 0);
}

function print_DEUX_() {
    push(7, 0);
    push(8, 0);
    push(9, 0);
    push(10, 0);
}

function print_QUATRE_() {
    push(0, 1);
    push(1, 1);
    push(2, 1);
    push(3, 1);
    push(4, 1);
    push(5, 1);
}

function print_TROIS_() {
    push(6, 1);
    push(7, 1);
    push(8, 1);
    push(9, 1);
    push(10, 1);
}

function print_NEUF_() {
    push(0, 2);
    push(1, 2);
    push(2, 2);
    push(3, 2);
}

function print_UNE_() {
    push(4, 2);
    push(5, 2);
    push(6, 2);
}

function print_SEPT_() {
    push(7, 2);
    push(8, 2);
    push(9, 2);
    push(10, 2);
}

function print_HUIT_() {
    push(0, 3);
    push(1, 3);
    push(2, 3);
    push(3, 3);
}

function print_SIX_() {
    push(4, 3);
    push(5, 3);
    push(6, 3);
}

function print_CINQ_() {
    push(7, 3);
    push(8, 3);
    push(9, 3);
    push(10, 3);
}

function print_MIDI_() {
    push(0, 4);
    push(1, 4);
    push(2, 4);
    push(3, 4);
}

function print_DIX_() {
    push(2, 4);
    push(3, 4);
    push(4, 4);
}

function print_MINUIT_() {
    push(5, 4);
    push(6, 4);
    push(7, 4);
    push(8, 4);
    push(9, 4);
    push(10, 4);
}

function print_ONZE_() {
    push(0, 5);
    push(1, 5);
    push(2, 5);
    push(3, 5);
}

function print_HEURE_() {
    push(5, 5);
    push(6, 5);
    push(7, 5);
    push(8, 5);
    push(9, 5);
}

function print_HEURES_() {
    push(5, 5);
    push(6, 5);
    push(7, 5);
    push(8, 5);
    push(9, 5);
    push(10, 5);
}

function print_MOINS_() {
    push(0, 6);
    push(1, 6);
    push(2, 6);
    push(3, 6);
    push(4, 6);
}

function print_LE_() {
    push(6, 6);
    push(7, 6);
}

function print_DIX_bis_() {
    push(8, 6);
    push(9, 6);
    push(10, 6);
}

function print_ET_() {
    push(0, 7);
    push(1, 7);
}

function print_QUART_() {
    push(3, 7);
    push(4, 7);
    push(5, 7);
    push(6, 7);
    push(7, 7);
}

function print_VINGT_() {
    push(0, 8);
    push(1, 8);
    push(2, 8);
    push(3, 8);
    push(4, 8);
}

function print__() {
    push(5, 8);
}

function print_CINQ_bis_() {
    push(6, 8);
    push(7, 8);
    push(8, 8);
    push(9, 8);
}

function print_ET_bis_() {
    push(0, 9);
    push(1, 9);
}

function print_DEMIE_() {
    push(3, 9);
    push(4, 9);
    push(5, 9);
    push(6, 9);
    push(7, 9);
}

function getCell(x, y) {
    return table.children[y].children[x];
}

function push(x, y) {
    L[x][y] = 1;
}

function enable(x, y) {
    getCell(x, y).setAttribute("class", "enable");
}

function disable(x, y) {
    getCell(x, y).setAttribute("class", "disable");
}
