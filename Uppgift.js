class Car {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.isRunning = false;
      this.currentSpeed = 0;
    }
  
    start() {
      this.isRunning = true;
      console.log(`The ${this.make} ${this.model} is now running.`);
    }
  
    stop() {
      this.isRunning = false;
      console.log(`The ${this.make} ${this.model} has been stopped.`);
    }
  
    accelerate(speed) {
      this.currentSpeed += speed;
      console.log(`The ${this.make} ${this.model} is now going ${this.currentSpeed} miles per hour.`);
    }
  
    decelerate(speed) {
      this.currentSpeed -= speed;
      console.log(`The ${this.make} ${this.model} is now going ${this.currentSpeed} miles per hour.`);
    }
  
    repaint(newColor) {
      this.color = newColor;
      console.log(`The ${this.make} ${this.model} has been repainted to ${this.color}.`);
    }
  }

let myCar = new Car("Toyota", "Corolla", 2019, "silver");

console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Corolla
console.log(myCar.year); // Output: 2019
console.log(myCar.color); // Output: silver

myCar.start(); // Output: The Toyota Corolla is now running.
myCar.accelerate(30); // Output: The Toyota Corolla is now going 30 miles per hour.
myCar.decelerate(10); // Output: The Toyota Corolla is now going 20 miles per hour.
myCar.repaint("red"); // Output: The Toyota Corolla has been repainted to red.
myCar.stop(); // Output: The Toyota Corolla has been stopped.