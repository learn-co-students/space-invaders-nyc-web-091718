class Spaceship {

  constructor(name,crew,phasers,shields){
    this.crew = crew
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if(this.crew.length == 0){
      this.docked = true
    }
    else{
      for(const member of crew){
        member.currentShip = this
      }
      this.docked = false
    }
  }

}
