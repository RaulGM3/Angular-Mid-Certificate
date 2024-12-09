class Base {
  k = 4;
}
 
class MsgError extends Error {
  constructor(m: string) {
    super(m); // this calls the parents constructor with this parameter
  }
  sayHello() {
    return "hello " + this.message;
  }
}

export interface Vehicle {
  id: number | string;
  color: string;
}