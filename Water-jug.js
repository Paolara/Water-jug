const xJugInput = document.querySelector('#x-jug');
const yJugInput = document.querySelector('#y-jug');
const zMeasureInput = document.querySelector('#z-measure');

function empty () {
    
}

function transfer (jugToEmpty, jug, jugToFill) {
    let diff = jug - jugToFill;
    if (diff > jugToEmpty) {
        jugToFill += Number(jugToEmpty);
        jugToEmpty = 0;
    } else {
        jugToFill += Number(diff);
        jugToEmpty -= Number(diff);
    }
    return jugToEmpty, jugToFill;
}

function fill () { 
    let xJug = 0;
    let yJug = 0;
    let found = false;
    let count = 0;
    while (!found) {
        count++;
        console.log(found);
        if (xJug == zMeasureInput.value || yJug == zMeasureInput.value) {
            found = true;
            break;
        }

        if (xJug == 0) {
            xJug = xJugInput.value;
            console.log('x', xJug);
            continue;
        }
        
        if (yJug < yJugInput.value && xJug == xJugInput.value) {
            let diff = yJugInput.value - yJug;
            console.log('transfer x', diff);
            if (diff > xJug) {
                yJug += Number(xJug);
                xJug = 0;
            } else {
                yJug += Number(diff);
                xJug -= Number(diff);
            }
            console.log('transfer x',xJug,yJug);
            continue;
        }

        if (yJug == 0) {
            yJug = yJugInput.value;
            console.log('y',yJug);
            continue;
        }

        if (xJug < xJugInput.value && yJug == yJugInput.value) {
            let diff = xJugInput.value - xJug;
            console.log('transfer y', diff);
            if (diff > xJug) {
                xJug += Number(yJug);
                yJug = 0;
            } else {
                xJug += Number(diff);
                yJug -= Number(diff);
            }
            console.log('transfer y',xJug,yJug);
            continue;
        }

        if(count == 1000) {
            found = false;
            break;
        }
    }   
    if (found) {
        console.log('solution',xJug, yJug);
    } else {
        console.log('No hay solucion');
    }
    // if (zMeasureInput.value > (xJugInput.value + yJugInput.value)) {
    //     document.querySelector('h4.status').innerHTML = 'No Solution';
    // } else {
    // }
}