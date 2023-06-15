import { Drawable } from "../../image/Drawable.js";
export class SimulationMap {
    static instance;
    table;
    mapCreated;
    size;
    constructor(size) {
        this.mapCreated = false;
        this.size = size;
        this.table = document.getElementById('myTable');
    }
    static getInstance(size) {
        if (!SimulationMap.instance) {
            SimulationMap.instance = new SimulationMap(size);
        }
        return SimulationMap.instance;
    }
    createMap() {
        if (this.table && !this.mapCreated) {
            this.table = document.getElementById('myTable');
            for (let i = 0; i < this.size; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < this.size; j++) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                }
                this.table.appendChild(row);
            }
            this.mapCreated = true;
        }
    }
    clearMap(map) {
        const drawer = Drawable.getInstance();
        for (let i = 0; i < map.getSize(); i++) {
            for (let j = 0; j < map.getSize(); j++) {
                drawer.drawObject(map, i, j, "clear");
            }
        }
    }
    getMapCreated() {
        return this.mapCreated;
    }
    getSize() {
        return this.size;
    }
}
