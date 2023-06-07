
namespace Utils {

  export class Pair<T, U> {
    private first: T;
    private second: U;
  
    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
    }
  
    getFirst(): T {
      return this.first;
    }
  
    getSecond(): U {
      return this.second;
    }
  
    setFirst(first: T): void {
      this.first = first;
    }
  
    setSecond(second: U): void {
      this.second = second;
    }
  }
  
}