import { Drawable } from "../image/Drawable.js";

export class SimulationMap {
    private static instance: SimulationMap;
  
    public table: HTMLTableElement;
    private mapCreated: boolean;
    private size: number;
  
    private constructor(size: number) {
      this.mapCreated = false;
      this.size = size;
      this.table = document.getElementById('myTable') as HTMLTableElement;
    }
  
    public static getInstance(size: number): SimulationMap {
      if (!SimulationMap.instance) {
        SimulationMap.instance = new SimulationMap(size);
      }
      return SimulationMap.instance;
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
  
    public clearMap(map: SimulationMap) {
    const drawer = Drawable.getInstance()
      for (let i = 0; i < map.getSize(); i++){
        for (let j = 0; j < map.getSize(); j++){
            drawer.drawObject(map, i, j, "clear")
        }
      }
    }
  
    public getMapCreated(): boolean {
      return this.mapCreated;
    }
  
    public getSize(): number {
      return this.size;
    }
  }


