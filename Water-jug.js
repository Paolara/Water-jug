const xJugInput = document.querySelector('#x-jug');
const yJugInput = document.querySelector('#y-jug');
const zMeasureInput = document.querySelector('#z-measure');
const solucion = document.querySelector(".solution");
let button = document.querySelector('#bt');
button.addEventListener('click', function() {
    fill(xJugInput.value, yJugInput.value, zMeasureInput.value);
});

function insertInHTML (txt) {
    let h4 = document.createElement('h4');
    h4.innerHTML = txt;
    solucion.appendChild(h4);
}

function fill (X, Y, Z) {
    let xJug = 0;
    let yJug = 0;
    let found = false
    let count = 0;

    if (Number(X) == Number(Z)) {
        insertInHTML('Jug X is filled with measure Z');
    } else if (Number(Y) == Number(Z)) {
        insertInHTML('Jug Y is filled with measure Z');
    } else if (Number(X) < Number(Z) && Number(Y) < Number(Z)) {
        insertInHTML('No Solution');
    } else if (Number(X) == Number(Y) && Number(Z) > Number(X)) {
        insertInHTML('No Solution');
    } else {
        while (!found) {
            count++;

            if(count == 10) {
                found = false;
                break;
            }
            if (xJug == Number(Z)) {
                found = true;
                yJug = 0;
                break;
            }
            if (yJug == Number(Z)) {
                found = true;
                xJug = 0;
                break;
            }

            if (xJug == 0) {
                xJug = X;
                insertInHTML(('X = '+ xJug));
                continue;
            }
            
            if (yJug < Number(Y) && xJug == Number(X)) {
                insertInHTML('Tranfer X to Y');
                let diff = Y - yJug;
                if (diff > yJug) {
                    if (Number(Y) < xJug) {
                        yJug = Y;
                        xJug -= Y;
                    } else {
                        yJug += Number(xJug);
                        xJug = 0;
                    }
                } else {
                    yJug += Number(diff);
                    xJug -= Number(diff);
                }
                insertInHTML(('X = '+ xJug + ' Y = ' + yJug));
                continue;
            }

            if (yJug == 0) {
                yJug = Y;
                insertInHTML(('Y = '+ yJug));
                continue;
            }

            if (xJug < Number(X) && yJug == Number(Y)) {
                insertInHTML('Tranfer Y to X');
                let diff = X - xJug;
                if (diff > xJug) {
                    if (Number(X) < yJug) {
                        xJug = X;
                        yJug -= X; 
                    } else {
                        xJug += Number(yJug);
                        yJug = 0;
                    }
                } else {
                    xJug += Number(diff);
                    yJug -= Number(diff);
                }
                insertInHTML(('X = '+ xJug + ' Y = ' + yJug));
                continue;
            }
        }   
        if (found) {
            if (xJug != 0){
                insertInHTML('Jug X is filled with measure Z');
            } else {
                insertInHTML('Jug Y is filled with measure Z');
            }
        } else {
            insertInHTML('No solution');
        }
    }
}