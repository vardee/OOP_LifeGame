class simulationMap {
    
    private mapCreated: boolean;
    private size: number

    constructor(size: number) {
        this.mapCreated = false;
        this.size = size
    }

    public createMap() {
        const table = document.getElementById('myTable');
        if (table && !this.mapCreated) {
            for (let i = 0; i < this.size; i++) {
                const row = document.createElement('tr');
    
                for (let j = 0; j < this.size; j++) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            this.mapCreated = true;
        }
    }

    public clearMap() {
        // Реализация очистки карты
    }

    public getMapCreated(): boolean{
        return this.mapCreated
    }
    
    public getSize(): number{
        return this.size
    }

}

const map = new simulationMap(50);

const createMap = document.getElementById('createTable');

if (createMap) {
    createMap.addEventListener('click', () => {
        map.createMap();
    });
}

const startSimulation = document.getElementById('startSimulation');

if (startSimulation) {
    startSimulation.addEventListener('click', () => {
        console.log("Simulation Started")
    });
}