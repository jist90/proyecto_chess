/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/
var enroqueRey = false;
function moverRey(posFICHA, si_no) {
    if (parseInt(posFICHA[0]) - 1 >= 0) { //arriba
        if (proxCellFicha((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) - 1).toString()) && si_no) { //izquierda
            pintarCellSeleccionado((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
        } else {
            if (tablero[(parseInt(posFICHA[0]) - 1).toString()][(parseInt(posFICHA[1]) - 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
            }
        }
        if (proxCellFicha((parseInt(posFICHA[0]) - 1).toString() + posFICHA[1]) && si_no) { //centro
            pintarCellSeleccionado((parseInt(posFICHA[0]) - 1).toString() + posFICHA[1]);
        } else {
            if (tablero[(parseInt(posFICHA[0]) - 1).toString()][posFICHA[1]].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) - 1).toString() + posFICHA[1]);
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) - 1).toString() + posFICHA[1]);
            }
        }
        if (proxCellFicha((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) + 1).toString()) && si_no) { //derecha
            pintarCellSeleccionado((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
            if ((posFICHA == '74' || posFICHA == '04') && proxCellFicha(parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) + 2).toString()) {
                enroqueRey = (proxCellFicha())
            }
        } else {
            if (tablero[(parseInt(posFICHA[0]) - 1).toString()][(parseInt(posFICHA[1]) + 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) - 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
            }
        }
    }
    if (parseInt(posFICHA[1]) - 1 > 0) { //izquierda
        if (proxCellFicha((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) - 1).toString()) && si_no) { //centro
            pintarCellSeleccionado((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) - 1).toString());
        } else {
            if (tablero[(parseInt(posFICHA[0])).toString()][(parseInt(posFICHA[1]) - 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) - 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) - 1).toString());
            }
        }
    }
    if (parseInt(posFICHA[1]) + 1 < tablero.length) { //derecha
        if (proxCellFicha((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) + 1).toString()) && si_no) { //centro
            pintarCellSeleccionado((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) + 1).toString());
        } else {
            if (tablero[(parseInt(posFICHA[0])).toString()][(parseInt(posFICHA[1]) + 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) + 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0])).toString() + (parseInt(posFICHA[1]) + 1).toString());
            }
        }
    }
    if (parseInt(posFICHA[0]) + 1 < tablero.length) { //abajo
        if (proxCellFicha((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) - 1).toString()) && si_no) { //izquierda
            pintarCellSeleccionado((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
        } else {
            if (tablero[(parseInt(posFICHA[0]) + 1).toString()][(parseInt(posFICHA[1]) - 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) - 1).toString());
            }
        }
        if (proxCellFicha((parseInt(posFICHA[0]) + 1).toString() + posFICHA[1]) && si_no) { //centro
            pintarCellSeleccionado((parseInt(posFICHA[0]) + 1).toString() + posFICHA[1]);
        } else {
            if (tablero[(parseInt(posFICHA[0]) + 1).toString()][posFICHA[1]].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) + 1).toString() + posFICHA[1]);
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) + 1).toString() + posFICHA[1]);
            }
        }
        if (proxCellFicha((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) + 1).toString()) && si_no) { //derecha
            pintarCellSeleccionado((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
        } else {
            if (tablero[(parseInt(posFICHA[0]) + 1).toString()][(parseInt(posFICHA[1]) + 1).toString()].substr(1, 2) != tablero[posFICHA[0]][posFICHA[1]].substr(1, 2) && si_no) {
                pintarCellEnemigo((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
            } else {
                cellBlack_cellWhite((parseInt(posFICHA[0]) + 1).toString() + (parseInt(posFICHA[1]) + 1).toString());
            }
        }
    }
}

// function enroque() {

// }

