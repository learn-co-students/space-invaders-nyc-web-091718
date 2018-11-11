class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  engageWarpDrive(){
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    } else if (this.position === 'Pilot' && this.currentShip != 'Looking for a Rig') {
      this.currentShip.warpDrive = 'engaged';
    }
  } //end engageWarpDrive fn

  setsInvisibility(){
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    } else if (this.position === 'Defender' && this.currentShip != 'Looking for a Rig') {
      this.currentShip.cloaked = true;
    }
  } // end setsInvisibility fn

  chargePhasers(){
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect';
    } else if (this.position === 'Gunner' && this.currentShip != 'Looking for a Rig') {
      this.currentShip.phasersCharge = 'charged';
    }
  } // end chargePhasers fn
} // end CrewMember class
