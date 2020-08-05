class Vine {
  constructor() {
    this.classif = "Vine taxa"
  }
}

class Akebia extends Vine {
  constructor() {
    super()
    this.species = "Akebia"
    this.commonName = "Chocolate Vine"
  }
}

class Campsis extends Vine {
  constructor() {
    super()
    this.species = "Campsis"
    this.commonName = "Trumpet Vine"
  }
}
