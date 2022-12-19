const xJugInput = document.querySelector('#x-jug');
const yJugInput = document.querySelector('#y-jug');
const zMeasureInput = document.querySelector('#z-measure');
let button = document.querySelector('#bt');
button.addEventListener('click', function() {
    fill(xJugInput.value, yJugInput.value, zMeasureInput.value);
});

function fill (X, Y, Z) { 
    let xJug = 0;
    let yJug = 0;
    let found = false
    let count = 0;

    if (X == Z) {
        document.querySelector('h4.status').innerHTML = 'The X jug is full with the Z measure';
    } else if (Y == Z) {
        document.querySelector('h4.status').innerHTML = 'The Y jug is full with the Z measure';
    } else {
        while (!found) {
            count++;
            if (xJug == Z || yJug == Z) {
                found = true;
                break;
            }

            if (xJug == 0) {
                xJug = X;
                continue;
            }
            
            if (yJug < Y && xJug == X) {
                let diff = Y - yJug;
                if (diff > xJug) {
                    yJug += Number(xJug);
                    xJug = 0;
                } else {
                    yJug += Number(diff);
                    xJug -= Number(diff);
                }
                continue;
            }

            if (yJug == 0) {
                yJug = Y;
                continue;
            }

            if (xJug < X && yJug == Y) {
                let diff = X - xJug;
                if (diff > xJug) {
                    xJug += Number(yJug);
                    yJug = 0;
                } else {
                    xJug += Number(diff);
                    yJug -= Number(diff);
                }
                continue;
            }

            if(count == 100) {
                found = false;
                break;
            }
        }   
        if (found) {
            console.log('solution',xJug, yJug);
        } else {
            console.log('No hay solucion');
        }
    }
}