/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/
var contadorJugada = 1;
var contador = 1;
function cellBlack_cellWhite(pos) {
    document.getElementById(pos).attributes.class.value = (tableroColor[pos[0]][pos[1]] == 1) ? "tdColor2" : "tdColor1";
}

function pintarCellSeleccionado(posicion) {
    document.getElementById(posicion).attributes.class.value = "tdCamino";
}
function pintarCellSinCamino(Ficha) {
    document.getElementById(Ficha).attributes.class.value = "tdSinCamino";
}
function pintarCellEnemigo(Ficha) {
    document.getElementById(Ficha).attributes.class.value = "tdEnemigo";
}
function pintarCellEnroque(Ficha) {
    document.getElementById(posicion).attributes.class.value = "tdEnroque";
}
function proxCellFicha(ficha) {
    return (tablero[parseInt(ficha[0])][parseInt(ficha[1])] == "0") ? true : false;
}
function getCellSeleccionado(posicion) {
    return document.getElementById(posicion).attributes.class.value
}

function movimientoValido(posINI, posFIN, ficha) {
    let entra = false;
    if (ficha.substr(3) == '1') {          //PEON
        if (ficha.substr(1, 2) == 'p2') {
            if (posINI[0] == '1') {
                if (parseInt(posFIN[0]) - parseInt(posINI[0]) <= 2) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            } else {
                if (parseInt(posFIN[0]) - parseInt(posINI[0]) == 1) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            }
        } else {
            if (posINI[0] == '6') {
                if (parseInt(posINI[0]) - parseInt(posFIN[0]) <= 2) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            } else {
                if (parseInt(posINI[0]) - parseInt(posFIN[0]) == 1) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            }
        }
    } else if (ficha.substr(3) == '5') {       //TORRE
        if (posINI[0] != posFIN[0]) {
            if (parseInt(posINI[0]) >= 0 && parseInt(posINI[0]) < tablero.length) {
                // if (proxCellFicha(posFIN)) {
                entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                // }
            }
        } else {
            if (parseInt(posINI[1]) >= 0 && parseInt(posINI[1]) < tablero.length) {
                // if (proxCellFicha(posFIN)) {
                entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                // }
            }
        }
    } else if (ficha.substr(3) == '4') {           //CABALLO
        if (parseInt(posINI[0]) - 2 >= 0) { //hacia ARRIBA
            if ((parseInt(posINI[0]) - parseInt(posFIN[0])) == 2) {
                if ((parseInt(posFIN[1]) - parseInt(posINI[1]) == 1) || (parseInt(posINI[1]) - parseInt(posFIN[1]) == 1)) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            }
        }
        if (parseInt(posINI[1]) + 2 < tablero.length) { //hacia la DERECHA
            if ((parseInt(posFIN[1]) - parseInt(posINI[1])) == 2) {
                if (((parseInt(posINI[0]) - parseInt(posFIN[0])) == 1) || ((parseInt(posFIN[0]) - parseInt(posINI[0])) == 1)) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;

                }
            }
        }
        if ((parseInt(posINI[0]) + 2) < tablero.length) { //hacia ABAJO
            if ((parseInt(posFIN[0]) - parseInt(posINI[0])) == 2) {
                if (((parseInt(posINI[1]) - parseInt(posFIN[1])) == 1) || ((parseInt(posFIN[1]) - parseInt(posINI[1])) == 1)) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            }
        }
        if (parseInt(posINI[1]) - 2 >= 0) {  // hacia la IZQUIERDA
            if ((parseInt(posINI[1]) - parseInt(posFIN[1])) == 2) {
                if (((parseInt(posINI[0]) - parseInt(posFIN[0])) == 1) || ((parseInt(posFIN[0]) - parseInt(posINI[0])) == 1)) {
                    entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
                }
            }
        }
    } else if (ficha.substr(3) == '3') {           //ALFIL
        if (Math.abs(parseInt(posINI[0]) - parseInt(posFIN[0])) == Math.abs(parseInt(posINI[1]) - parseInt(posFIN[1]))) {
            entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;

        } else {
            if (Math.abs(parseInt(posFIN[0]) - parseInt(posINI[0])) == Math.abs(parseInt(posFIN[1]) - parseInt(posINI[1]))) {
                entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
            }
        }
    } else if (ficha.substr(3) == '9') {           //REYNA
        entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
    } else if (ficha.substr(3) == '30') {          //REY
        entra = (getCellSeleccionado(posFIN) == "tdCamino" || getCellSeleccionado(posFIN) == "tdEnemigo") ? true : false;
    }
    return entra;
}

function escribirJugada(idPieza, pieza, casillaAnterior, casillaDestino, captura) {
    if ((contadorJugada % 2) != 0) {
        if (captura) {
            document.getElementById("sm1j").innerText = (idPieza[0] != 'P') ? document.getElementById("sm1j").innerText + ' ' + `${contador}.${pieza}x${obtener_columnaJugada(casillaDestino, true)}` + ' ' : document.getElementById("sm1j").innerText + ' ' + `${contador}.${obtener_columnaJugada(casillaAnterior, false)}x${obtener_columnaJugada(casillaDestino, true)}`;
            mostrar_piezaCapturada(casillaDestino);
        } else {
            document.getElementById("sm1j").innerText = (idPieza[0] != 'P') ? document.getElementById("sm1j").innerText + ' ' + `${contador}.${pieza}${obtener_columnaJugada(casillaDestino, true)} ` : document.getElementById("sm1j").innerText + ' ' + `${contador}.${obtener_columnaJugada(casillaDestino, true)}`
        }
        contador++;
    } else {
        if (captura) {
            document.getElementById("sm1j").innerText = (idPieza[0] != 'P') ? document.getElementById("sm1j").innerText + ' ' + `${contador}.${pieza}x${obtener_columnaJugada(casillaDestino, true)}` + ' ' : document.getElementById("sm1j").innerText + ' ' + `${obtener_columnaJugada(casillaAnterior, false)}x${obtener_columnaJugada(casillaDestino, true)}`;
            mostrar_piezaCapturada(casillaDestino);
        } else {
            document.getElementById("sm1j").innerText = (idPieza[0] != 'P') ? document.getElementById("sm1j").innerText + ' ' + `${pieza}${obtener_columnaJugada(casillaDestino, true)} ` : document.getElementById("sm1j").innerText + ' ' + `${obtener_columnaJugada(casillaDestino, true)}`
        }
    }
    contadorJugada++;
}
function obtener_columnaJugada(columnaJugada, capturaPieza) {
    var arrayCol = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var retornar = "";
    if (capturaPieza) {
        retornar = arrayCol[columnaJugada[1]] + (8 - parseInt(columnaJugada[0])).toString();
    } else {
        retornar = arrayCol[columnaJugada[1]];
    }
    return retornar;
}

function mostrar_piezaCapturada(posFinal) {
    var jugador = (tablero[posFinal[0]][posFinal[1]]).substr(1, 2), respuesta = (jugador != 'p2') ? 'n' : 'b';
    switch (tablero[posFinal[0]][posFinal[1]][0]) {
        case 'P':
            respuesta = respuesta + (parseInt(posFinal[1]) + 7).toString();
            break;
        case 'T':
            respuesta = (document.getElementById((respuesta + '0')).hidden) ? respuesta + '0' : respuesta + '1';
            break;
        case 'C':
            respuesta = (document.getElementById((respuesta + '2')).hidden) ? respuesta + '2' : respuesta + '3';
            break;
        case 'A':
            respuesta = (document.getElementById((respuesta + '4')).hidden) ? respuesta + '4' : respuesta + '5';
            break;
        case 'D':
            respuesta += '6';
            break;
    }
    document.getElementById(respuesta).hidden = false;
}

