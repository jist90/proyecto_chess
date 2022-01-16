/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/
function moverPeon(peon, si_no, player) {
    if (player == 'p2') {
        if (si_no) { //cuando variable es true pinta camino, falso quita el camino
            if (peon[0] == '1') {
                if (proxCellFicha('2' + peon[1])) {
                    pintarCellSeleccionado('2' + peon[1]);
                    if (proxCellFicha('3' + peon[1])) {
                        pintarCellSeleccionado('3' + peon[1]);
                    }
                } else {
                    pintarCellSinCamino(peon);
                }
            } else {
                if (proxCellFicha((parseInt(peon[0]) + 1).toString() + peon[1])) {
                    pintarCellSeleccionado((parseInt(peon[0]) + 1).toString() + peon[1]);
                } else {
                    pintarCellSinCamino(peon);
                }
            }
        } else {
            if (peon[0] == '1') {
                cellBlack_cellWhite('2' + peon[1]);
                cellBlack_cellWhite('3' + peon[1]);
            } else {
                cellBlack_cellWhite((parseInt(peon[0]) + 1).toString() + peon[1])
            }
        }
    } else {
        if (si_no) {
            if (peon[0] == '6') {
                if (proxCellFicha('5' + peon[1])) {
                    pintarCellSeleccionado('5' + peon[1]);
                    if (proxCellFicha('4' + peon[1])) {
                        pintarCellSeleccionado('4' + peon[1]);
                    }
                } else {
                    pintarCellSinCamino(peon);
                }
            } else {
                if (proxCellFicha((parseInt(peon[0]) - 1).toString() + peon[1])) {
                    pintarCellSeleccionado((parseInt(peon[0]) - 1).toString() + peon[1]);
                } else {
                    pintarCellSinCamino(peon);
                }
            }
        } else {
            if (peon[0] == 6) {
                cellBlack_cellWhite('5' + peon[1]);
                cellBlack_cellWhite('4' + peon[1]);
            } else {
                cellBlack_cellWhite((parseInt(peon[0]) - 1).toString() + peon[1]);
            }
        }
    }
    let filP1P2 = (player == 'p1') ? (parseInt(peon[0]) - 1).toString() : (parseInt(peon[0]) + 1).toString();
    player = (player[1] == '1') ? 'p2' : 'p1';
    switch (peon[1]) {
        case '0': //cuando peon esta en la columna 0 solo atacar 1 diagonal
            if (tablero[filP1P2][(parseInt(peon[1]) + 1).toString()].substr(1, 2) == player && si_no) {
                pintarCellEnemigo(filP1P2 + (parseInt(peon[1]) + 1).toString());
            } else {
                cellBlack_cellWhite(filP1P2 + (parseInt(peon[1]) + 1).toString())
            }
            break;
        case '7': //cuando peon esta en la columna 7 solo atacar 1 diagonal
            if (tablero[filP1P2][(parseInt(peon[1]) - 1).toString()].substr(1, 2) == player && si_no) {
                pintarCellEnemigo(filP1P2 + (parseInt(peon[1]) - 1).toString());
            } else {
                cellBlack_cellWhite(filP1P2 + (parseInt(peon[1]) - 1).toString())
            }
            break;
        default: //atacar en ambas diagonales
            if (tablero[filP1P2][(parseInt(peon[1]) + 1).toString()].substr(1, 2) == player && si_no) {
                pintarCellEnemigo(filP1P2 + (parseInt(peon[1]) + 1).toString());
            } else {
                cellBlack_cellWhite(filP1P2 + (parseInt(peon[1]) + 1).toString())
            }
            if (tablero[filP1P2][(parseInt(peon[1]) - 1).toString()].substr(1, 2) == player && si_no) {
                pintarCellEnemigo(filP1P2 + (parseInt(peon[1]) - 1).toString());
            } else {
                cellBlack_cellWhite(filP1P2 + (parseInt(peon[1]) - 1).toString())
            }
            break;
    }

}