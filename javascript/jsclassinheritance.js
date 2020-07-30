class Engine {
  constructor() {
    this.oilLevel = 100
    this.rpm = 0
  }

  start() {
    this.rpm = 500
  }

  stop() {
    this.rpm = 0
  }
}


class TurboEngine extends Engine {
  constructor() {
    super()
    this.horsepower = 450
  }

  accelerate() {
    this.rpm = this.rpm + 750
  }

  decelerate() {
    this.rpm = this.rpm - 50
  }

}

var newTurbo = new TurboEngine()
newTurbo.accelerate()
newTurbo.decelerate()
newTurbo.decelerate()
newTurbo.decelerate()
newTurbo.decelerate()
newTurbo.decelerate()
newTurbo.decelerate()
console.log(newTurbo.rpm);
console.log("rpm:", newTurbo.rpm);
