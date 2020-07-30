class Squirrel{
  constructor(){
    this.nutCount = 0
  }

  storeNut(){
    this.nutCount += 1
  }

  eatNut(){
    this.nutCount -= 1
  }
}

var rocky = new Squirrel()
var alvin = new Squirrel()

// alvin.storeNut()
// alvin.storeNut()
//
// console.log("Rocky has ", rocky.nutCount )
// console.log("Alvin has ", alvin.nutCount )

var squirrels = []
squirrels.push(new Squirrel())
squirrels.push(new Squirrel())

squirrels[0].storeNut()
squirrels[0].storeNut()
squirrels[0].storeNut()

squirrels[1].storeNut()
squirrels[1].storeNut()

// mapping over array to access the information from the squirrels array
// squirrels.map((value, index) => {
//   console.log(`The squirrel at index ${index} has ${value.nutCount} nuts.`)
// })



class DiceRoller {
  constructor() {
    this.rolls = []
  }

  roll() {
    this.rolls.push(Math.ceil(Math.random() * 6))
  }

  lastRoll() {
    return this.rolls[this.rolls.length - 1]
  }
}

var roller = new DiceRoller()

roller.roll()
roller.roll()
roller.roll()

// console.log(roller.lastRoll());
// console.log(roller.rolls);

class Dog {
  constructor(age, name) {
    this.name = name
    this.age = age
  }

  description() {
    return `${this.name} is a ${this.age} year old dog`
  }
}

var jax = new Dog(5, "Jax")
// console.log(jax.description());
var gemma = new Dog("Gemma", 4)

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

var blackCoffee = new Coffee("black", 0, 0)
var tanCoffee = new Coffee("tan", 1, 2)
var blackSweetCoffee = new Coffee("Black but sweetened", 0, 2)
// console.log(blackSweetCoffee.coffeeProfile());

class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }

  calculateVolume() {
    let totalVolume = Math.PI * (this.radius * this.radius) * this.height
    // let volumeArray = totalVolume.toString().split("")
    // let findDecimal = volumeArray.indexOf(".") + 5
    // let volumeToFourDecimals = volumeArray.slice(0, findDecimal).join("")
    let volumeToFourDecimals = totalVolume.toFixed(4)
    return volumeToFourDecimals
  }
}

var cylinder1 = new Cylinder(4,5)
var cylinder2 = new Cylinder(17,7)
var cylinder3 = new Cylinder(98,65)
// console.log(cylinder1.calculateVolume());
// console.log(cylinder2.calculateVolume());
// console.log(cylinder3.calculateVolume());
