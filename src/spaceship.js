class Spaceship {
  constructor(name, crew, phasersNum, shieldsNum){
    this.name = name;
    this.crew = crew;
    this.phasers = phasersNum;
    this.shields = shieldsNum;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if (crew.length > 0) {
      this.docked = false;
      for (let c of crew) {
        c.currentShip = this;
      }
    } else {
      this.docked = true;
    }
    this.phasersCharge = 'uncharged';
  }

} // end Spaceship class
