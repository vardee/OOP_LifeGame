import { SimulationMap } from "./SimulationOfLife.js";
import { ImageProvider } from "./image/ImageProvider.js";
import { BruhDataBase } from "./image/BruhDataBase.js";


class Simulation{
    startSimulation(){
        const map = new SimulationMap(100);
        const dataBase = new BruhDataBase();
        const drawer = new ImageProvider();
        map.createMap();

        setInterval(() => {
            drawer.getObject(dataBase, map)
    }, 1000);
    }
    endSimulation(){
    }
}

const simulate = new Simulation();

const createMap = document.getElementById('startSimulation');

if (createMap ) {
    createMap.addEventListener('click', () => {
        simulate.startSimulation();
    });
}