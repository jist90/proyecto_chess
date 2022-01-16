/*

VARIABLES GLOBALES

var arrSeleccionado= new Array();
var moverTrue=false;
var posAnt="";
var celdaValor = 0;

*/
function moverTorre(posACTUAL,si_no){
    let jugarPOSICION = posACTUAL;
    if(si_no){
        while( parseInt(jugarPOSICION[0])-1 >= 0 ){ //arriba
            if (proxCellFicha((parseInt(jugarPOSICION[0])-1).toString()+jugarPOSICION[1])){
                pintarCellSeleccionado((parseInt(jugarPOSICION[0])-1).toString() + jugarPOSICION[1]);
                jugarPOSICION = (parseInt(jugarPOSICION[0])-1).toString()+jugarPOSICION[1];
            }else{
                if(tablero[(parseInt(jugarPOSICION[0])-1).toString()][jugarPOSICION[1]].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    pintarCellEnemigo((parseInt(jugarPOSICION[0])-1).toString()+jugarPOSICION[1]);
                }
                jugarPOSICION = '-1'+jugarPOSICION[1];    
            }  
        }
    }else{
        while( parseInt(jugarPOSICION[0])-1 >= 0 ){ //izquierda
            if (proxCellFicha((parseInt(jugarPOSICION[0])-1).toString()+jugarPOSICION[1])){
                cellBlack_cellWhite((parseInt(jugarPOSICION[0])-1).toString() + jugarPOSICION[1]);
                jugarPOSICION = (parseInt(jugarPOSICION[0])-1).toString()+jugarPOSICION[1];
            }else{
                if(tablero[(parseInt(jugarPOSICION[0])-1).toString()][jugarPOSICION[1]].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    cellBlack_cellWhite((parseInt(jugarPOSICION[0])-1).toString() + jugarPOSICION[1]);
                }
                jugarPOSICION = '0'+jugarPOSICION[1];    
            }
        }  
    } 
    jugarPOSICION=posACTUAL;
    if(si_no){
        while(parseInt(jugarPOSICION[0])+1 < tablero.length){ // abajo
            if(proxCellFicha((parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1])) {
                pintarCellSeleccionado((parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1]);
                jugarPOSICION = (parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1];
            }else{
                if(tablero[(parseInt(jugarPOSICION[0])+1).toString()][jugarPOSICION[1]].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    pintarCellEnemigo((parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1]);
                }
                jugarPOSICION = '8'+jugarPOSICION[1];    
            }
        }
    }else{
        while(parseInt(jugarPOSICION[0])+1 < tablero.length){ // derecha
            if(proxCellFicha((parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1])){
                cellBlack_cellWhite((parseInt(jugarPOSICION[0])+1).toString() + jugarPOSICION[1]);
                jugarPOSICION = (parseInt(jugarPOSICION[0])+1).toString()+jugarPOSICION[1];
            }else{
                if(tablero[(parseInt(jugarPOSICION[0])+1).toString()][jugarPOSICION[1]].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    cellBlack_cellWhite((parseInt(jugarPOSICION[0])+1).toString() + jugarPOSICION[1]);
                }
                jugarPOSICION = '8'+jugarPOSICION[1];    
            }
        }  
    } 
    jugarPOSICION=posACTUAL;
    if(si_no){
        while(parseInt(jugarPOSICION[1]) > 0){ //izquierda
            if(proxCellFicha(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])-1).toString())) {
                pintarCellSeleccionado(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])-1).toString());
                jugarPOSICION = jugarPOSICION[0] + (parseInt(jugarPOSICION[1])-1).toString();
            }else{
                if(tablero[jugarPOSICION[0]][(parseInt(jugarPOSICION[1]) -1).toString()].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    pintarCellEnemigo(jugarPOSICION[0]+(parseInt(jugarPOSICION[1]) -1).toString());
                }
                jugarPOSICION = jugarPOSICION[0]+'0';    
            }
        }
    }else{
        while(parseInt(jugarPOSICION[1]) > 0){
            if(proxCellFicha(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])-1).toString())) {
                cellBlack_cellWhite(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])-1).toString());
                jugarPOSICION = jugarPOSICION[0] + (parseInt(jugarPOSICION[1])-1).toString();
            }else{
                if(tablero[jugarPOSICION[0]][(parseInt(jugarPOSICION[1])-1).toString()].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    cellBlack_cellWhite(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])-1).toString());
                }
                jugarPOSICION = jugarPOSICION[0]+'0'
            }
        }
    }
    jugarPOSICION=posACTUAL;
    if(si_no){
        while(parseInt(jugarPOSICION[1])+1 < tablero.length){
            if (proxCellFicha( jugarPOSICION[0]+(parseInt(jugarPOSICION[1])+1).toString())) {
                pintarCellSeleccionado(jugarPOSICION[0] + (parseInt(jugarPOSICION[1])+1).toString());
            }else{
                if(tablero[jugarPOSICION[0]][(parseInt(jugarPOSICION[1])+1).toString()].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    pintarCellEnemigo(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])+1).toString());
                }
                jugarPOSICION = jugarPOSICION[0]+'8';
            }
            jugarPOSICION = jugarPOSICION[0] + (parseInt(jugarPOSICION[1])+1).toString();
        }
    }else{
        while(parseInt(jugarPOSICION[1])+1 < tablero.length){
            if(proxCellFicha( jugarPOSICION[0]+(parseInt(jugarPOSICION[1])+1).toString())) {
                cellBlack_cellWhite(jugarPOSICION[0] + (parseInt(jugarPOSICION[1])+1).toString());
                jugarPOSICION = jugarPOSICION[0] + (parseInt(jugarPOSICION[1])+1).toString();
            }else{
                if(tablero[jugarPOSICION[0]][(parseInt(jugarPOSICION[1])+1).toString()].substr(1,2) != tablero[posACTUAL[0]][posACTUAL[1]].substr(1,2)){
                    cellBlack_cellWhite(jugarPOSICION[0]+(parseInt(jugarPOSICION[1])+1).toString());
                }
                jugarPOSICION = jugarPOSICION[0]+'8';    
            }
        }  
    }
}