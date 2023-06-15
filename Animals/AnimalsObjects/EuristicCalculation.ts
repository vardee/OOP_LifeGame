export class EuristicCalculation {
    private static instance: EuristicCalculation;
    
    private constructor() {}
  
    public static getInstance(): EuristicCalculation {
      if (!EuristicCalculation.instance) {
        EuristicCalculation.instance = new EuristicCalculation();
      }
      return EuristicCalculation.instance;
    }
  
    public manhattanHeuristic(startObject: any, endObject: any) {
      return (
        Math.abs(startObject.getCoordinates().x - endObject.getCoordinates().x) +
        Math.abs(startObject.getCoordinates().y - endObject.getCoordinates().y)
      );
    }
  }