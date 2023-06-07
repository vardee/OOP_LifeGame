namespace PlantNamespace{
    export abstract class Bushes extends Plant{
        constructor(protected damage: number, protected haveFruit: boolean, protected recoveryTime: number, protected growingSpeed: number){
            super(recoveryTime, growingSpeed)
            this.damage = damage;
            this.haveFruit = haveFruit;
        }
    
        public dropFruit(){} //Нужно подвязать сюда Fruit

        public getDamage(): number{
            return this.damage
        }

        public getHaveFruit(): boolean{
            return this.haveFruit
        }
    }
}