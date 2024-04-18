var table = document.getElementById("table");


init();

function init() {
    for(var y = 0; y < 10; y++) {
        for(var x = 0; x < 11; x++) {
            getCell(x, y).setAttribute("class", "disable");
        }
    }
}

function print_IL() {
    enable(0, 0);
    enable(1, 0);
}

function print_EST() {
    enable(3, 0);
    enable(4, 0);
    enable(5, 0);
}

function print_DEUX() {
    enable(7, 0);
    enable(8, 0);
    enable(9, 0);
    enable(10, 0);
}

function print_QUATRE() {
    enable(0, 1);
    enable(1, 1);
    enable(2, 1);
    enable(3, 1);
    enable(4, 1);
    enable(5, 1);
}

function print_TROIS() {
    enable(6, 1);
    enable(7, 1);
    enable(8, 1);
    enable(9, 1);
    enable(10, 1);
}

function print_NEUF() {
    enable(0, 2);
    enable(1, 2);
    enable(2, 2);
    enable(3, 2);
}

function print_UNE() {
    enable(4, 2);
    enable(5, 2);
    enable(6, 2);
}

function print_SEPT() {
    enable(7, 2);
    enable(8, 2);
    enable(9, 2);
    enable(10, 2);
}

function print_HUIT() {
    enable(0, 3);
    enable(1, 3);
    enable(2, 3);
    enable(3, 3);
}

function print_SIX() {
    enable(4, 3);
    enable(5, 3);
    enable(6, 3);
}

function print_CINQ() {
    enable(7, 3);
    enable(8, 3);
    enable(9, 3);
    enable(10, 3);
}

function print_MIDI() {
    enable(0, 4);
    enable(1, 4);
    enable(2, 4);
    enable(3, 4);
}

function print_DIX() {
    enable(2, 4);
    enable(3, 4);
    enable(4, 4);
}

function print_MINUIT() {
    enable(5, 4);
    enable(6, 4);
    enable(7, 4);
    enable(8, 4);
    enable(9, 4);
    enable(10, 4);
}

function print_ONZE() {
    enable(0, 5);
    enable(1, 5);
    enable(2, 5);
    enable(3, 5);
}

function print_HEURE() {
    enable(5, 5);
    enable(6, 5);
    enable(7, 5);
    enable(8, 5);
    enable(9, 5);
}

function print_HEURES() {
   print_HEURE();
   enable(10, 5);
}

function print_MOINS() {
    enable(0, 6);
    enable(1, 6);
    enable(2, 6);
    enable(3, 6);
    enable(4, 6);
}

function print_LE() {
    enable(6, 6);
    enable(7, 6);
}

function print_DIX_bis() {
    enable(8, 6);
    enable(9, 6);
    enable(10, 6);
}

function print_ET() {
    enable(0, 7);
    enable(1, 7);
}

function print_QUART() {
    enable(3, 7);
    enable(4, 7);
    enable(5, 7);
    enable(6, 7);
    enable(7, 7);
}

function print_VINGT() {
    enable(0, 8);
    enable(1, 8);
    enable(2, 8);
    enable(3, 8);
    enable(4, 8);
}

function print_() {
    enable(5, 8);
}

function print_CINQ_bis() {
    enable(6, 8);
    enable(7, 8);
    enable(8, 8);
    enable(9, 8);
}

function print_ET_bis() {
    enable(0, 9);
    enable(1, 9);
}

function print_DEMIE() {
    enable(3, 9);
    enable(4, 9);
    enable(5, 9);
    enable(6, 9);
    enable(7, 9);
}


function getCell(x, y) {
    return table.children[y].children[x];
}

function enable(x, y) {
    getCell(x, y).setAttribute("class", "enable");
}

function disable(x, y) {
    getCell(x, y).setAttribute("class", "disable");
}