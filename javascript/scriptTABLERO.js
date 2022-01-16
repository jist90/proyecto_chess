document.write('<header><h1>TABLERO DE AJEDREZ DESDE JAVASCRIPT</h1></header>')
let tablero = new Array(8);
let tableroColor = new Array(8);
let valor = 1;
let alternar = true;
let num = [8, 7, 6, 5, 4, 3, 2, 1];

//#region DIBUJAR TABLERO DE COLORES
for (let fil = 0; fil < tableroColor.length; fil++) {
    tableroColor[fil] = new Array(8);
    for (let col = 0; col < tableroColor.length; col++) {
        tableroColor[fil][col] = valor;
        valor = (valor == 1) ? 0 : 1;
    }
    valor = (fil % 2 == 0) ? 0 : 1;
}
//#endregion FIN DIBUJAR TABLERO DE COLORES

valor = 0;

//#region DIBUJAR TABLERO
document.write('<div class="container_tablero"><table class="thead"><thead><tr><td></td><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td></td></tr></thead></table>');
document.write('<div><table class="tabla_cuerpo">');
for (let fil = 0; fil < tablero.length; fil++) {

    tablero[fil] = new Array(8);
    document.write("<tr>");
    document.write("<td>" + num[fil] + "</td>");
    //#region PREGUNTA POR CASO DE FILA PARA INSERTAR FICHAS, PEONES O VACIO
    if (fil == 0 || fil == 7) {
        insertFicha(fil, 't,c,a,r,k,a,c,t');
    } else if (fil == 1 || fil == 6) {
        var entra = buscarColor(fil, 0);
        insertPeon(fil, entra);
    } else {
        blanco_negro(fil);
    }
    //#endregion FIN PREGUNTA POR FILA PARA FICHAS, PEONES O VACIO
    document.write("<td>" + num[fil] + "</td>");
    document.write("</tr>");
    // alternar =buscarColor(fil,1);
}
document.write("</table></div>");
document.write('<table class="tfooter"><tr><td></td><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td></td></tr></table></div>');
//#endregion FIN DIBUJAR TABLERO

//#region FUNCION INSERTAR PEONES
function insertPeon(fila, blackwhite) {
    if (blackwhite) {
        let texto;
        for (let col = 0; col < tablero.length; col++) {
            tablero[fila][col] = 'Pp21';
            texto = buscarColor(fila, col) ? '<td id="' + fila.toString() + col.toString() + '" class="tdColor1" onclick="mostrarPos(this.id)"><div> &#9823;</div></td>' : '<td id="' + fila.toString() + col.toString() + '" class="tdColor2" onclick="mostrarPos(this.id)"><div>&#9823;</div></td>';
            document.write(texto);
        }
    } else {
        for (let col = 0; col < tablero.length; col++) {
            tablero[fila][col] = 'Pp11';
            let texto = buscarColor(fila, col) ? '<td id="' + fila.toString() + col.toString() + '" class="tdColor1" onclick="mostrarPos(this.id)"><div>&#9817;</div></td>' : '<td id="' + fila.toString() + col.toString() + '" class="tdColor2" onclick="mostrarPos(this.id)"><div>&#9817;</div></td>';
            document.write(texto);
            alternar = buscarColor(fila, col);
        }
    }
}
//#endregion FIN DIBUJAR PEONES

//#region  FUNCION INSERTAR FICHAS
function insertFicha(fila, ficha) {
    ficha = ficha.split(',');

    for (let columna = 0; columna < tablero.length; columna++) {
        if (fila == 0) { // FICHA COLOR NEGRA
            if (ficha[columna] == 't' && (columna == 0 || columna == 7)) {
                tablero[fila][columna] = 'Tp25';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9820;</div>', fila, columna);
            } else if (ficha[columna] == 'c' && (columna == 1 || columna == 6)) {
                tablero[fila][columna] = 'Cp24';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9822;</div>', fila, columna);
            } else if (ficha[columna] == 'a' && (columna == 2 || columna == 5)) {
                tablero[fila][columna] = 'Ap23';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9821;</div>', fila, columna);
            } else if (ficha[columna] == 'r' && columna == 3) {
                tablero[fila][columna] = 'Dp29';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9819;</div>', fila, columna);
            } else if (ficha[columna] == 'k' && columna == 4) {
                tablero[fila][columna] = 'Rp230';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9818;</div>', fila, columna);
            }

        } else if (fila == 7) { // FICHA COLOR BLANCA
            if (ficha[columna] == 't' && (columna == 0 || columna == 7)) {
                tablero[fila][columna] = 'Tp15';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9814;</div>', fila, columna);
            } else if (ficha[columna] == 'c' && (columna == 1 || columna == 6)) {
                tablero[fila][columna] = 'Cp14';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9816;</div>', fila, columna);
            } else if (ficha[columna] == 'a' && (columna == 2 || columna == 5)) {
                tablero[fila][columna] = 'Ap13';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9815;</div>', fila, columna);
            } else if (ficha[columna] == 'r' && columna == 3) {
                tablero[fila][columna] = 'Dp19';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9813;</div>', fila, columna);
            } else if (ficha[columna] == 'k' && columna == 4) {
                tablero[fila][columna] = 'Rp130';
                casillaColorYFicha(buscarColor(fila, columna), '<div>&#9812;</div>', fila, columna);
            }
        }
    }
}
//#endregion FIN FUNCION INSERTAR FICHAS

//#region FUNCION COLOREAR CELDA BLANCA O NEGRA Y PONER FICHA
function casillaColorYFicha(blaneg, ficha, fila, columna) {
    if (blaneg == true) {
        document.write('<td id="' + fila.toString() + columna.toString() + '" class="tdColor1" onclick="mostrarPos(this.id)">' + ficha + '</td>');
        alternar = false;
    } else {
        document.write('<td id="' + fila.toString() + columna.toString() + '" class="tdColor2" onclick="mostrarPos(this.id)">' + ficha + '</td>');
        alternar = true;
    }
}
//#endregion FIN FUNCION COLOREAR CELDA BLANCA O NEGRA Y PONER FICHA

//#region FUNCION COLOREAR CELDA BLANCA O NEGRA Y PONER SIN FICHA
function blanco_negro(fila) {
    for (let index = 0; index < tablero.length; index++) {
        tablero[fila][index] = '0';
        if (buscarColor(fila, index) == true) {
            document.write('<td id="' + fila.toString() + index.toString() + '" class="tdColor1" onclick="mostrarPos(this.id)"></td>');
        } else {
            document.write('<td id="' + fila.toString() + index.toString() + '" class="tdColor2" onclick="mostrarPos(this.id)"></td>');
        }

    }
}
//#endregion FIN FUNCION COLOREAR CELDA BLANCA O NEGRA Y PONER SIN FICHA

//#region FUNCION POSICION DE LA CELDA DE QUE COLOR ES
function buscarColor(fil, col) {
    var color = (tableroColor[fil][col] == 0) ? true : false;
    return color;
}
//#endregion FIN FUNCION POSICION DE LA CELDA DE QUE COLOR ES
