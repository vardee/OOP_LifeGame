import { SimulationMap } from "./SimulationOfLife.js";
import { ImageProvider } from "./image/ImageProvider.js";
import { BruhDataBase } from "./image/BruhDataBase.js";
import { beginning } from "./beginOfDSimulation.js";


class Simulation{
    startSimulation(){
        const map = new SimulationMap(100);
        const dataBase = new BruhDataBase();
        const drawer = new ImageProvider();
        const beginOfSimulation = new beginning

        map.createMap();

       beginOfSimulation.createPlantStarterPack(dataBase);

        setInterval(() => {
            drawer.getObject(dataBase, map)
        }, 1000);

        setInterval(() => {
            dataBase.plantArray.forEach(element => {
                element.grow(dataBase, element)
            });
        }, 1000);
    
    }


    endSimulation(){
    }
}

const simulate = new Simulation();

const startSimulation = document.getElementById('startSimulation');

if (startSimulation ) {
    startSimulation.addEventListener('click', () => {
        simulate.startSimulation();
    });
}