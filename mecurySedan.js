//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maxPass, numWheels, maxSpeed, fuel, service) {
        super(make, model, year, color, mileage)
        this.maxPass = maxPass
        this.numWheels = numWheels
        this.maxSpeed = maxSpeed
        this.fuel = fuel
        this.service = service
    }

    loadPassenger() {
        if (this.passenger < this.maxPass) {
            let availableRoom = 'true'
        } return this.availableRoom
    }

    scheduleService() {
        if (this.mileage >= 30000) {
            this.service = 'true'
        }
    }
}

let mecurySedan = new Car('Mecury', 'A28', 2022, 'N/A', '', 6, 4, 200, 100, 'false')

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(mecurySedan.make)