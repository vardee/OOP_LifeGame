import { SimulationMap } from "./SimulationOfLife.js";
import { BruhDataBase } from "../image/BruhDataBase.js";
import { Beginning } from "./beginOfSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    startSimulation(){
        const map =  SimulationMap.getInstance(100);
        const dataBase = BruhDataBase.getInstance();
        const drawer =  ImageProvider.getInstance();
        const beginOfSimulation = new Beginning

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted){
            map.createMap(); 
            beginOfSimulation.createPlantStarterPack(dataBase);
        }
       this.simulationStarted = true

        timer.addTickListener((time) => {
            for (let i = 0; i < dataBase.getPlantDataBaseSize(); i++) {
            drawer.getObject(dataBase, map)
                dataBase.getPlant(i).grow(dataBase, dataBase.getPlant(i), time);
                dataBase.getPlant(i).die(dataBase.getPlant(i), "die");
                dataBase.removeDeads(dataBase.getPlant(i), i)
            }
          }); 
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