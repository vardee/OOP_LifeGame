import { SimulationMap } from "./SimulationOfLife.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { Beginning } from "./beginOfSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    startSimulation(){
        const map =  SimulationMap.getInstance(100);
        const plantDataBase = PlantDataBase.getInstance();
        const drawer =  ImageProvider.getInstance();
        const beginOfSimulation = new Beginning

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted){
            map.createMap(); 
            beginOfSimulation.createPlantStarterPack(plantDataBase);
        }
       this.simulationStarted = true
        timer.addTickListener((time) => {
            for (let i = 0; i < plantDataBase.getDataBaseSize(); i++) {
                if (plantDataBase.getDataBaseSize() < 200){
                    plantDataBase.getObject(i).grow(plantDataBase, plantDataBase.getObject(i), time);
                }
                plantDataBase.getObject(i).die(plantDataBase.getObject(i), "die");
                drawer.getObject(plantDataBase, map, i)
                plantDataBase.removeDeads(plantDataBase.getObject(i), i)
            }
            for (let i = 0; i < 1; i++){ //Заготовка для Animal

            }
          }); 
    }
    endSimulation(){
        const map = SimulationMap.getInstance(100);
        const dataBase = PlantDataBase.getInstance();
        map.clearMap(map)
        dataBase.clearAll();
        this.simulationStarted = false
    }
}

const simulate = new Simulation(false);

const startSimulation = document.getElementById('startSimulation');

if (startSimulation ) {
    startSimulation.addEventListener('click', () => {
        simulate.startSimulation();
    });
}

const endSimulation = document.getElementById('endSimulation');

if (endSimulation ) {
    endSimulation.addEventListener('click', () => {
        simulate.endSimulation();
    });
}