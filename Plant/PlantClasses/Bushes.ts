namespace PlantNamespace{
    export abstract class Bushes extends Plant{
        constructor(protected damage: number, protected haveFruit: boolean, protected recoveryTime: number, protected growingSpeed: number){
            super(recoveryTime, growingSpeed)
            this.damage = damage;
            this.haveFruit = haveFruit;
        }
    }
    function dropFruit(){

    }
}