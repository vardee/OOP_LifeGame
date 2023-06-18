export class EuristicCalculation {
    static instance;
    constructor() { }
    static getInstance() {
        if (!EuristicCalculation.instance) {
            EuristicCalculation.instance = new EuristicCalculation();
        }
        return EuristicCalculation.instance;
    }
    manhattanHeuristic(startObject, endObject) {
        return (Math.abs(startObject.getCoordinates().x - endObject.getCoordinates().x) +
            Math.abs(startObject.getCoordinates().y - endObject.getCoordinates().y));
    }
}
