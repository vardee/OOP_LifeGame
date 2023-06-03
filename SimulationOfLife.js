"use strict";
class Mapping {
    createMap() {
        document.addEventListener('DOMContentLoaded', () => {
            const table = document.getElementById('myTable');
            if (table) {
                for (let i = 0; i < 50; i++) {
                    const row = document.createElement('tr');
                    for (let j = 0; j < 50; j++) {
                        const cell = document.createElement('td');
                        row.appendChild(cell);
                    }
                    table.appendChild(row);
                }
            }
        });
    }
    clearMap() {
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('myTable');
    if (table) {
        for (let i = 0; i < 50; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 50; j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }
});
