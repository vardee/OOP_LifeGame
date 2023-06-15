export class Coordinates {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isEqual(other) {
        return this.x === other.x && this.y === other.y;
    }
}
