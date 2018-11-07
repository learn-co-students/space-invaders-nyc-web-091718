class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a rig";
  }
  engageWarpDrive(){
      if (this.currentShip ==="Looking for a rig"){
        return "had no effect"
      }
  }
  setsInvisibility(){
    if (this.currentShip ==="Looking for a rig"){
      return "had no effect"
    }
    if(this.position === "Defender"){
      this.currentShip.cloaked = true;
    }
  }
  chargePhasers(){
    if (this.currentShip ==="Looking for a rig"){
      return "had no effect"
    }
  }
}
