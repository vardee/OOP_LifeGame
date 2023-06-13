import { SimulationMap } from "./SimulationOfLife.js";
import { BruhDataBase } from "../image/BruhDataBase.js";
import { Beginning } from "./beginOfSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    startSimulation(){
        const map = new SimulationMap(100);
        const dataBase = new BruhDataBase();
        const drawer = new ImageProvider();
        const beginOfSimulation = new Beginning
        let tick = 0
        if (!this.simulationStarted)
        {map.createMap();
        
       beginOfSimulation.createPlantStarterPack(dataBase);
       this.simulationStarted = false
        setInterval(() => {
            drawer.getObject(dataBase, map)
        }, 10000);

        setInterval(() => {
            tick++
            dataBase.plantArray.forEach(element => {
                element.grow(dataBase, element, tick)
            });
        }, 1000);
        this.simulationStarted = false
    }
    
    }

    endSimulation(){
    }
}

const simulate = new Simulation(false);

const startSimulation = document.getElementById('startSimulation');

if (startSimulation ) {
    startSimulation.addEventListener('click', () => {
        simulate.startSimulation();
    });
}