export class Coordinates {
    constructor (public x: number, public y: number) {}
    public isEqual(other: Coordinates): boolean {
        return this.x === other.x && this.y === other.y;
    }
}
