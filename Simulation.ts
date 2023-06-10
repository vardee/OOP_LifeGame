import { simulationMap } from "./SimulationOfLife.js";

class Simulation{
    startSimulation(){
        const map = new simulationMap(100);
        map.createMap();
    }
    
    endSimulation(){
        
    }
}

const simulate = new Simulation();

const createMap = document.getElementById('startSimulation');

if (createMap) {
    createMap.addEventListener('click', () => {
        simulate.startSimulation();
    });
}