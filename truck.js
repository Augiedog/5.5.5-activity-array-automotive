
import {Car} from "/mecurySedan.js";

class Truck extends Car {
    constructor(make, model, year, color, mileage, maxPass, numWheels, maxSpeed, fuel, service) {
        super(make, model, year, color, mileage, maxPass, numWheels, maxSpeed, fuel, service)
        this.rideHeight = 0
        this.towCapacity = 0
    }    
}

let ram = new Truck('Ram', '2500', 2025, 'Blue', 75000, 5, 4, 120, 'Diesel')

ram.start()
ram.loadPassenger(7)
ram.accelerate()
ram.scheduleService()

console.log(ram)
export{Truck};
