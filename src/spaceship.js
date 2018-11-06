class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = (crew[0]) ? false : true
    if (crew[0]) {
      for (let member of crew) {
        member.currentShip = this
      }
    }
  }

}
