/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/

function moverCaballo(posActual,si_no,playerFicha){
    if(si_no){
        if(parseInt(posActual[0]) + 2 < tablero.length && (parseInt(posActual[1])+1) < tablero.length){ // ABAJO, izquierda, derecha 
            if(proxCellFicha( (parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) + 1).toString())){ //para ABAJO derecha
                pintarCellSeleccionado((parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) + 1).toString());
            }else if(tablero[(parseInt(posActual[0])+2).toString()][(parseInt(posActual[1])+1).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])+2).toString()+(parseInt(posActual[1])+1).toString());
            }
        }
        if(parseInt(posActual[0]) + 2 < tablero.length && (parseInt(posActual[1])-1) >=0){
            if(proxCellFicha( (parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) - 1).toString())){ //para ABAJO iquierda
                pintarCellSeleccionado((parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) - 1).toString());
            }else if(tablero[(parseInt(posActual[0])+2).toString()][(parseInt(posActual[1])-1).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])+2).toString()+(parseInt(posActual[1])-1).toString());
            }
        }
        if( parseInt(posActual[1]) + 2 < tablero.length && (parseInt(posActual[0]) - 1) >=0){ //DERECHA, arriba, abajo
            if( proxCellFicha( (parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) + 2).toString())){ //para DERECHA arriba
                pintarCellSeleccionado((parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) + 2).toString());
            }else if(tablero[(parseInt(posActual[0])-1).toString()][(parseInt(posActual[1])+2).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])-1).toString()+(parseInt(posActual[1])+2).toString());
            }
        }
        if( parseInt(posActual[1]) + 2 < tablero.length && (parseInt(posActual[0])+1) < tablero.length){
            if( proxCellFicha( (parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) + 2).toString())){ // para DERECHA abajo
                pintarCellSeleccionado((parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) + 2).toString());
            }else if(tablero[(parseInt(posActual[0])+1).toString()][(parseInt(posActual[1])+2).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])+1).toString()+(parseInt(posActual[1])+2).toString());
            }
        }
        if(parseInt(posActual[0]) - 2 >= 0 && (parseInt(posActual[1]) + 1) <tablero.length){
            if(proxCellFicha( (parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) + 1).toString())){ //para ARRIBA derecha
                pintarCellSeleccionado((parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) + 1).toString());
            }else if(tablero[(parseInt(posActual[0])-2).toString()][(parseInt(posActual[1])+1).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])-2).toString()+(parseInt(posActual[1])+1).toString());
            }
        }
        if(parseInt(posActual[0]) - 2 >= 0 && (parseInt(posActual[1]) - 1) >= 0 ){
            if(proxCellFicha( (parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) - 1).toString())){ //para ARRIBA iquierda
                pintarCellSeleccionado((parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) - 1).toString());
            }else if(tablero[(parseInt(posActual[0])-2).toString()][(parseInt(posActual[1])-1).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])-2).toString()+(parseInt(posActual[1])-1).toString());
            }
        }
        if( parseInt(posActual[1]) - 2 >= 0 && (parseInt(posActual[0]) - 1) >= 0){
            if( proxCellFicha( (parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) - 2).toString())){ //para IZQUIERDA arriba
                pintarCellSeleccionado((parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) - 2).toString());
            }else if(tablero[(parseInt(posActual[0])-1).toString()][(parseInt(posActual[1])-2).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])-1).toString()+(parseInt(posActual[1])-2).toString());
            }
        }
        if( parseInt(posActual[1]) - 2 >= 0 && (parseInt(posActual[0]) + 1) < tablero.length){
            if( proxCellFicha( (parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) - 2).toString())){ // para IZQUIERDA abajo
                pintarCellSeleccionado((parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) - 2).toString());
            }else if(tablero[(parseInt(posActual[0])+1).toString()][(parseInt(posActual[1])-2).toString()].substr(1,2) != playerFicha){
                pintarCellEnemigo((parseInt(posActual[0])+1).toString()+(parseInt(posActual[1])-2).toString());
            }
        }
    }else{
        if(si_no == false){
            if(parseInt(posActual[0]) + 2 < tablero.length && (parseInt(posActual[1]) + 1) < tablero.length){
                if(proxCellFicha( (parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) + 1).toString())){ //para ABAJO derecha
                    cellBlack_cellWhite((parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) + 1).toString());
                }else if(tablero[(parseInt(posActual[0])+2).toString()][(parseInt(posActual[1])+1).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])+2).toString()+(parseInt(posActual[1])+1).toString());
                }
            }
            if(parseInt(posActual[0]) + 2 < tablero.length && (parseInt(posActual[1]) - 1) >= 0){
                if(proxCellFicha( (parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) - 1).toString())){ //para ABAJO iquierda
                    cellBlack_cellWhite((parseInt(posActual[0]) + 2).toString() + (parseInt(posActual[1]) - 1).toString());
                }else if(tablero[(parseInt(posActual[0])+2).toString()][(parseInt(posActual[1])-1).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])+2).toString()+(parseInt(posActual[1])-1).toString());
                }
            }
            if(parseInt(posActual[1]) + 2 < tablero.length && (parseInt(posActual[0]) - 1) >= 0){
                if( proxCellFicha( (parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) + 2).toString())){ //para DERECHA arriba
                    cellBlack_cellWhite((parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) + 2).toString());
                }else if(tablero[(parseInt(posActual[0])-1).toString()][(parseInt(posActual[1])+2).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])-1).toString()+(parseInt(posActual[1])+2).toString());
                }
            }
            if(parseInt(posActual[1]) + 2 < tablero.length && (parseInt(posActual[0]) + 1) < tablero.length){
                if( proxCellFicha( (parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) + 2).toString())){ // para DERECHA abajo
                cellBlack_cellWhite((parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) + 2).toString());
                }else if(tablero[(parseInt(posActual[0])+1).toString()][(parseInt(posActual[1])+2).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])+1).toString()+(parseInt(posActual[1])+2).toString());
                }
            }
            if(parseInt(posActual[0]) -2 >= 0 && (parseInt(posActual[1])+1) < tablero.length){
                if(proxCellFicha( (parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) + 1).toString())){ //para ARRIBA derecha
                    cellBlack_cellWhite((parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) + 1).toString());
                }else if(tablero[(parseInt(posActual[0])-2).toString()][(parseInt(posActual[1])+1).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])-2).toString()+(parseInt(posActual[1])+1).toString());
                }
            }
            if(parseInt(posActual[0]) - 2 >= 0 && (parseInt(posActual[1]) - 1) >= 0){
                if(proxCellFicha( (parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) - 1).toString())){ //para ARRIBA iquierda
                    cellBlack_cellWhite((parseInt(posActual[0]) - 2).toString() + (parseInt(posActual[1]) - 1).toString());
                }else if(tablero[(parseInt(posActual[0])-2).toString()][(parseInt(posActual[1])-1).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])-2).toString()+(parseInt(posActual[1])-1).toString());
                }
            }
            if(parseInt(posActual[1]) - 2 >= 0 && (parseInt(posActual[0]) - 1) >= 0){
                if( proxCellFicha( (parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) - 2).toString())){ //para IZQUIERDA arriba
                    cellBlack_cellWhite((parseInt(posActual[0]) - 1).toString() + (parseInt(posActual[1]) - 2).toString());
                }else if(tablero[(parseInt(posActual[0])-1).toString()][(parseInt(posActual[1])-2).toString()].substr(1,2) != playerFicha){
                cellBlack_cellWhite((parseInt(posActual[0])-1).toString()+(parseInt(posActual[1])-2).toString());
                }
            }
            if(parseInt(posActual[1]) - 2 >= 0 && (parseInt(posActual[0]) + 1) < tablero.length){
                if( proxCellFicha( (parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) - 2).toString())){ // para IZQUIERDA abajo
                    cellBlack_cellWhite((parseInt(posActual[0]) + 1).toString() + (parseInt(posActual[1]) - 2).toString());
                }else if(tablero[(parseInt(posActual[0])+1).toString()][(parseInt(posActual[1])-2).toString()].substr(1,2) != playerFicha){
                    cellBlack_cellWhite((parseInt(posActual[0])+1).toString()+(parseInt(posActual[1])-2).toString());
                }
            }
        }
    }        
}