var arrSeleccionado = new Array();
var moverTrue = false;
var posAnt = "", turno = 'p1';
var celdaValor = 0;
var clickImagen = "";
var moverCaptura = false;
var piezaRey = new Array(2);
piezaRey['p1'] = false;
piezaRey['p2'] = false;

function mostrarPos(posActual) {
    if (posActual != posAnt) {
        if ((moverTrue == false)) {
            if (turno == tablero[posActual[0]][posActual[1]].substr(1, 2)) {
                clickSelect(posActual);
            }
        } else {
            if (movimientoValido(posAnt, posActual, celdaValor)) {
                if ((tablero[posActual[0]][posActual[1]]).substr(1, 2) != (tablero[posAnt[0]][posAnt[1]]).substr(1, 2)) {
                    moverFicha(posActual, (document.getElementById(posAnt).innerHTML));
                    escribirJugada(celdaValor, clickImagen, posAnt, posActual, moverCaptura);
                    quitarFichaCell(posAnt);
                    tablero[posActual[0]][posActual[1]] = celdaValor;
                    moverTrue = false;
                    turno = (tablero[posActual[0]][posActual[1]].substr(1, 2) == 'p1') ? 'p2' : 'p1';
                    posAnt = "";
                } else {
                    noMover(posAnt);
                    cellBlack_cellWhite(posAnt);
                    if (turno == tablero[posActual[0]][posActual[1]].substr(1, 2)) {
                        clickSelect(posActual);
                    } else {
                        posAnt = "";
                    }
                }
            } else {
                noMover(posAnt);
                cellBlack_cellWhite(posAnt);
                if (turno == tablero[posActual[0]][posActual[1]].substr(1, 2)) {
                    clickSelect(posActual);
                } else {
                    posAnt = "";
                }
            }
        }
    } else {
        noMover(posActual);
        cellBlack_cellWhite(posActual);
        posAnt = "";
    }
}

function clickSelect(posicionFicha) {

    posAnt = posicionFicha;
    clickImagen = document.getElementById(posicionFicha).innerText;
    celdaValor = tablero[posicionFicha[0]][posicionFicha[1]];
    document.getElementById(posicionFicha).attributes.class.value = "tdSeleccionado";
    mostrarCamino(posicionFicha, celdaValor, true);
    moverTrue = true;
}

function quitarFichaCell(pos) {
    document.getElementById(pos).innerHTML = "";
    mostrarCamino(pos, tablero[pos[0]][pos[1]], false);
    tablero[pos[0]][pos[1]] = "0";
    cellBlack_cellWhite(pos);
}

function moverFicha(posFinal, textIMG) {
    moverCaptura = (getCellSeleccionado(posFinal) == 'tdEnemigo') ? true : false;
    document.getElementById(posFinal).innerHTML = textIMG;
    // aqui hay que llamar a una funcion para buscar la posicion del rey enemigo
}

function mostrarCamino(posFicha, playerFicha, si_no) {
    switch (playerFicha.substr(3)) {
        case '1':
            moverPeon(posFicha, si_no, playerFicha.substr(1, 2))
            break;
        case '5':
            moverTorre(posFicha, si_no);
            break;
        case '4':
            moverCaballo(posFicha, si_no, playerFicha.substr(1, 2));
            break;
        case '3':
            moverAlfil(posFicha, si_no);
            break;
        case '9':
            moverReyna(posFicha, si_no);
            break;
        case '30':
            moverRey(posFicha, si_no);
            // if (reyTorre)
            //     enroque();
            break;
        default:
            break;
    }
}
function noMover(posicionficha) {
    var valorFicha = tablero[posicionficha[0]][posicionficha[1]];
    mostrarCamino(posicionficha, valorFicha, false);
    moverTrue = false;
}
