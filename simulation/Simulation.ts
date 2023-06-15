import { SimulationMap } from "./Map.js";
import { PlantDataBase } from "../image/BruhDataBase.js";
import { startElements } from "./starterPackForSimulation.js";
import { ImageProvider } from "../image/ImageProvider.js";
import { Timer } from "./timer.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    public startSimulation(){
        const mapSize = 100
        const map =  SimulationMap.getInstance(mapSize);
        const plantDataBase = PlantDataBase.getInstance();
        const drawer =  ImageProvider.getInstance();
        const beginOfSimulation = new startElements

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted){
            map.createMap(); 
            beginOfSimulation.createStarterPack(plantDataBase, map);
        }
       this.simulationStarted = true
        timer.addTickListener((time) => {
            for (let i = 0; i < plantDataBase.getDataBaseSize(); i++) {
                if (plantDataBase.getDataBaseSize() < 120){
                    plantDataBase.getObject(i).grow(plantDataBase, plantDataBase.getObject(i), time, map);
                }
                plantDataBase.getObject(i).die(plantDataBase.getObject(i), "die");
                drawer.getObject(plantDataBase, map, i)
                plantDataBase.removeDeads(plantDataBase.getObject(i), i)
            }
            for (let i = 0; i < 1; i++){ //Заготовка для Animal

            }
          }); 
    }
    public endSimulation(){
        const map = SimulationMap.getInstance(100);
        const dataBase = PlantDataBase.getInstance();
        map.clearMap(map)
        dataBase.clearAll();
        Timer.getInstance().zeroTime()
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