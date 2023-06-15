import { SimulationMap } from "../ts/ts/SimulationOfLife.js";
import { DataBaseAnimals } from "../ts/ts/DataBaseAnimals.js";
import { Beginning } from "./beginOfSimulation.js";
import { ImageProvider } from "../image/imageProvider.js";
import { Timer } from "./timer.js";
 
class Simulation{
    constructor(private simulationStarted: boolean){
        simulationStarted = this.simulationStarted
    }

    startSimulation(){
        const map =  SimulationMap.getInstance(100);
        const dataBase = DataBaseAnimals.getInstance();
        const drawer = ImageProvider.getInstance();
        const beginOfSimulation = new Beginning

        const timer = Timer.getInstance();
        timer.timeRunning();

        if (!this.simulationStarted)
        {map.createMap();
        
       beginOfSimulation.createPlantStarterPack(dataBase);
       this.simulationStarted = false

       timer.addTickListener((time) => {
        for (let i = 0; i < dataBase.getAnimalDataBaseSize(); i++) {
            drawer.getObject(dataBase, map, i)
        }
        });

        timer.addTickListener((time) => {
            for (let i = 0; i < dataBase.getAnimalDataBaseSize(); i++) {
              dataBase.getAnimal(i).move();
              if(dataBase.getAnimal(i).getHungerValue() >= 0)
              dataBase.getAnimal(i).setHungerValue(-10)
              if (dataBase.getAnimalDataBaseSize() < 110){
                dataBase.getAnimal(i).reproduction(dataBase, timer.getTime(), map);
            }
              drawer.getObject(dataBase, map, i)
              
            }
          });
          
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
