let data = {
    X_embedded: [],
    colors: [],
    no_clusters: 0,
    no_noise: 0,
    symbols: [],
    hover_names: [] // TODO: ошибка при передаче массива
}; // Объект данных

let data3d = {
    x: [],
    y: [],
    z: []
}

jsonAddArray(); // вызов асинхронного запроса, чтобы вытащить данные нахождения


console.log(data);
// console.log(data3d);

/**
 * Заполнение массива с данными из json файла
 */
function addArray3dMass() {
    for (let i = 0; i < data.X_embedded.length; i++) {
        data3d.x.push(data.X_embedded[i][0]);
        data3d.y.push(data.X_embedded[i][1]);
        data3d.z.push(0);
    }
}

/**
 * Построение 3d графика
 * @param {Array} X
 * @param {Array} Y
 * @param {Array} Z
 */
function d3ModelsElement(X, Y, Z, colorD, sym) {
    let cluster = {
        x: X,
        y: Y,
        z: Z,
        mode: 'markers', // TODO: появилась паутина взаимосвязей, а так нет линий (по умолчанию 'markers')
        marker: {
            size: 5,
            line: {
                color: colorD, // TODO: Не понятно работает или нет
                width: 0.5
            },
            opacity: 0.8,
            color: colorD
        },
        type: 'scatter3d'
    };

    // console.log(cluster.marker.line);

    let data = [cluster];
    let layout = {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
    };
    Plotly.newPlot('myDiv3d', data, layout);
}

function d2ModelsElement(X, Y) {
    let claster = {
        x: X,
        y: Y,
        mode: 'markers'
    }

    let data = [claster];
    let layout = {};
    Plotly.newPlot('myDiv2d', data, layout, {
        showSendToCloud: true
    });
}

async function jsonAddArray() {
    let response = await fetch(`../stas.json`);

    if (response.ok) {
        let json = await response.json();

        // console.log(json);

        for (let i = 0; i < json.X_embedded.length; i++) {
            data.X_embedded.push(json.X_embedded[i]);
            // data.colors.push(json.colors[i]);
            if (i % 2 == 0) {
                data.colors.push('red');
            } else {
                data.colors.push('green');
            }
            data.symbols.push(json.symbols[i]);
        }

        data.no_clusters = json.no_clusters;
        data.no_noise = json.no_noise;

        addArray3dMass();
        d3ModelsElement(data3d.x, data3d.y, data3d.z, data.colors, data.symbols);
        d2ModelsElement(data3d.x, data3d.y);

    } else {
        // В случае ошибки
        console.log("Ошибка HTTP: " + response.status);
    }
}