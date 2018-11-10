class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking For a Rig';
  }

  chargePhasers() {
    return this.position === 'gunner' && this.currentShip !== 'Looking For a Rig'
    ? (this.currentShip.phasersCharge = 'charged') : 'had no effect';
  }

  engageWarpDrive() {
    return this.position === 'pilot' && this.currentShip !== 'Looking For a Rig'
    ? (this.currentShip.warpDrive = 'engage') : 'had no effect';
  }

  setsInvisibility() {
    return this.position === 'Defender' && this.currentShip !== 'Looking for a Rig'
      ? (this.currentShip.cloaked = true) : 'had no effect';
  }


} // end of class
