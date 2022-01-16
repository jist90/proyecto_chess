/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/

function moverAlfil(posActual, si_no){
    let posMove = posActual;
    let izqder = true;
    if(si_no){
        while((parseInt(posMove[0]) - 1) >= 0){ //ARRIBA
            posMove = (parseInt(posMove[0])-1).toString() + posMove[1];
            if(izqder){
                if( (parseInt(posMove[1]) + 1) < tablero.length){ //ARRIBA DERECHA
                    if(proxCellFicha(posMove[0]+(parseInt(posMove[1]) + 1).toString())){
                        pintarCellSeleccionado(posMove[0]+(parseInt(posMove[1]) + 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) + 1).toString();
                        if((parseInt(posMove[0])) == 0){
                            posMove = posActual;
                            izqder = false;
                        }
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) + 1).toString()].substr(1,2) != tablero[posActual[0]][posActual[1]].substr(1,2)){
                            pintarCellEnemigo(posMove[0]+(parseInt(posMove[1]) + 1).toString())
                        }
                        posMove = posActual;
                        izqder = false;
                    }
                }
                else{
                    posMove = posActual;
                    izqder = false;
                }
            }else{
                if( (parseInt(posMove[1]) - 1) >= 0){ //ARRIBE IZQUIERDA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) - 1).toString())){
                        pintarCellSeleccionado(posMove[0] + (parseInt(posMove[1]) - 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) - 1).toString();
                        if((parseInt(posMove[1])) == 0){
                            posMove = '00';
                            izqder = true;
                        }
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) - 1).toString()].substr(1,2) != tablero[posActual[0]][posActual[1]].substr(1,2)){
                            pintarCellEnemigo(posMove[0]+(parseInt(posMove[1]) - 1).toString())
                        }
                        posMove = '00';
                        izqder = true;
                    }
                }else{
                    posMove = '00';
                    izqder = true;
                }
            }
        }
        posMove = posActual;
        izqder = true;
        while((parseInt(posMove[0]) + 1) < tablero.length){ //ABAJO
            posMove = (parseInt(posMove[0]) + 1).toString() + posMove[1];
            if(izqder){
                if( (parseInt(posMove[1]) + 1) < tablero.length){ //ABAJO DERECHA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) + 1).toString())){
                        pintarCellSeleccionado(posMove[0] + (parseInt(posMove[1]) + 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) + 1).toString();
                        if((parseInt(posMove[0])) == tablero.length -1){
                            posMove = posActual;
                            izqder = false;
                        }
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) + 1).toString()].substr(1,2) != tablero[posActual[0]][posActual[1]].substr(1,2)){
                            pintarCellEnemigo(posMove[0]+(parseInt(posMove[1]) + 1).toString())
                        }
                        posMove = posActual;
                        izqder= false;
                    }
                }else{
                    posMove = posActual;
                        izqder= false;
                }
            }else{
                if( (parseInt(posMove[1]) - 1) >= 0){ //ARBAJO IZQUIERDA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) - 1).toString())){
                        pintarCellSeleccionado(posMove[0] + (parseInt(posMove[1]) - 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) - 1).toString();
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) - 1).toString()].substr(1,2) != tablero[posActual[0]][posActual[1]].substr(1,2)){
                            pintarCellEnemigo(posMove[0]+(parseInt(posMove[1]) - 1).toString())
                        }
                        posMove = '70';
                        izqder = true;
                    }
                }else{
                    posMove = '70';
                    izqder = true;
                }
            }
        }

    }else{
        while((parseInt(posMove[0]) - 1) >= 0){ //ARRIBA
            posMove = (parseInt(posMove[0])-1).toString() + posMove[1];
            if(izqder){
                if( (parseInt(posMove[1]) + 1) < tablero.length){ //ARRIBA DERECHA
                    if(proxCellFicha(posMove[0]+(parseInt(posMove[1]) + 1).toString())){
                        cellBlack_cellWhite(posMove[0]+(parseInt(posMove[1]) + 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) + 1).toString();
                        if((parseInt(posMove[0])) == 0){
                            posMove = posActual;
                            izqder = false;
                        }
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) + 1).toString()] != tablero[posActual[0][posActual[1]]]){
                            cellBlack_cellWhite(posMove[0]+(parseInt(posMove[1]) + 1).toString())
                        }
                        posMove = posActual;
                        izqder = false;
                    }
                }else{
                    posMove = posActual;
                    izqder = false;
                }
            }else{
                if( (parseInt(posMove[1]) - 1) >= 0){ //ARRIBE IZQUIERDA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) - 1).toString())){
                        cellBlack_cellWhite(posMove[0] + (parseInt(posMove[1]) - 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) - 1).toString();
                        
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) - 1).toString()] != tablero[posActual[0][posActual[1]]]){
                            cellBlack_cellWhite(posMove[0]+(parseInt(posMove[1]) - 1).toString())
                        }
                        posMove = '00';
                        izqder = true;
                    }
                }else{
                    posMove = '00';
                    izqder = true;
                }
            }
        }
        posMove = posActual;
        izqder = true;
        while((parseInt(posMove[0]) + 1) < tablero.length){ //ABAJO
            posMove = (parseInt(posMove[0]) + 1).toString() + posMove[1];
            if(izqder){
                if( (parseInt(posMove[1]) + 1) < tablero.length){ //ABAJO DERECHA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) + 1).toString())){
                        cellBlack_cellWhite(posMove[0] + (parseInt(posMove[1]) + 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) + 1).toString();
                        if((parseInt(posMove[0])) == tablero.length - 1){
                            posMove = posActual;
                            izqder = false;
                        }
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) + 1).toString()] != tablero[posActual[0][posActual[1]]]){
                            cellBlack_cellWhite(posMove[0]+(parseInt(posMove[1]) + 1).toString())
                        }
                        posMove = posActual;
                        izqder= false;
                    }
                }else{
                    posMove = posActual;
                    izqder= false;
                }
            }else{
                if( (parseInt(posMove[1]) - 1) >= 0){ //ARBAJO IZQUIERDA
                    if(proxCellFicha(posMove[0] + (parseInt(posMove[1]) - 1).toString())){
                        cellBlack_cellWhite(posMove[0] + (parseInt(posMove[1]) - 1).toString());
                        posMove=posMove[0]+(parseInt(posMove[1]) - 1).toString();
                    }else{
                        if(tablero[posMove[0]][(parseInt(posMove[1]) - 1).toString()] != tablero[posActual[0][posActual[1]]]){
                            cellBlack_cellWhite(posMove[0]+(parseInt(posMove[1]) - 1).toString())
                        }
                        posMove = '70';
                        izqder = true;
                    }
                }else{
                    posMove = '70';
                    izqder = true;
                }
            }
        }
    }
}