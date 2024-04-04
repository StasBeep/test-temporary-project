let obj = [];

/*async function jsonAddArray() {
    let response = await fetch(`../3d-scatter.csv`);

    if (response.ok) {
        let json = await response.json();

        console.log(json);

    } else {
        // В случае ошибки
        console.log("Ошибка HTTP: " + response.status);
    }
}

jsonAddArray();

console.log(obj);*/

const rowsTest = [
    ["x1", "y1", "z1", "x2", "y2", "z2"],
    [-1, -2, 1, , , ],
    [-9, 5, 1, 1, 1, 2]
];

let csvContent = "";

rowsTest.forEach(function (rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});

console.log(csvContent);


/** Download contents as a file
 * Source: https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
 */
function downloadBlob(content, filename, contentType) {
    // Create a blob
    var blob = new Blob([content], {
        type: contentType
    });
    var url = URL.createObjectURL(blob);

    // Create a link to download it
    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
}

// downloadBlob(csvContent, 'export.csv', 'text/csv;charset=utf-8;')

d3.csv('../export.csv', function (err, rows) {
    function unpack(rows, key) {
        // console.log(key);
        return rows.map(function (row) {
            return row[key];
        });
    }

    var trace1 = {
        x: unpack(rows, 'x1'),
        y: unpack(rows, 'y1'),
        z: unpack(rows, 'z1'),
        mode: 'markers',
        marker: {
            size: 12,
            line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 0.5
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    };

    var data = [trace1];
    var layout = {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        colorway: colorD
    };

    //console.log(rows);
    Plotly.newPlot('myDiv', data, layout);
});