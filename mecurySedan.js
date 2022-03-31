//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle.js")
import {Vehicle} from "/vehicle.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maxPass, numWheels, maxSpeed, fuel, service) {
        super(make, model, year, color, mileage)
        this.maxPass = maxPass
        this.numWheels = numWheels
        this.maxSpeed = maxSpeed
        this.fuel = fuel
        this.service = service
        this.availableRoom = 0
    }

    loadPassenger(num) {
        if (num < this.maxPass) {
            this.passenger = num
            this.availableRoom = this.maxPass - num;
            return this.availableRoom
        } else {
            console.log(`Car is full you need seats for ${num}`)
        }
    }

    scheduleService() {
        if (this.mileage >= 30000) {
            this.service = true
            return this.scheduleService
        }
    }
}

let mecurySedan = new Car('Mercury', 'A28', 2022, 'White', 85000, 6, 4, 200, 100, 'false')

mecurySedan.start()
mecurySedan.loadPassenger(5)
mecurySedan.accelerate()
mecurySedan.scheduleService()
mecurySedan.typeOfVehicle()

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(mecurySedan)

export {Car};
