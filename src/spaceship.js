class Spaceship {
  constructor(name, crew, numPhasers, numShields){
    this.name = name
    this.crew = crew
    this.phasers = numPhasers
    this.shields = numShields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = (() => {
      if (crew.length) {
        return false
      } else {
        return true
      }
    })()
    this.populateCrew()
  }

  populateCrew(){
    this.crew.forEach((crewMember) => {
      return crewMember.currentShip = this
    })
  }

} // End of Spaceship Class
