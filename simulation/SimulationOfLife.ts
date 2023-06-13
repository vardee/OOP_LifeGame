export class SimulationMap {
    
    public table: HTMLTableElement;
    private mapCreated: boolean;
    private size: number
    constructor(size: number) {
        this.mapCreated = false;
        this.size = size
        this.table = document.getElementById('myTable') as HTMLTableElement;
    }

    public createMap() {
        if (this.table && !this.mapCreated) {
            this.table = document.getElementById('myTable') as HTMLTableElement;
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

