class CrewMember {

  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
    this.chargePhasers = function(){return'had no effect'}
    this.setsInvisibility = function(){return'had no effect'}
    this.engageWarpDrive = function(){return'had no effect'}

    switch(position){

      case 'Gunner':
        this.chargePhasers = function (){
          if(this.currentShip == 'Looking for a Rig'){
            return 'had no effect'
          }
          else {
            this.currentShip.phasersCharge = 'charged'
          }
        }
        break;

      case 'Defender':
        this.setsInvisibility = function (){
          if(this.currentShip == 'Looking for a Rig'){
            return 'had no effect'
          }
          else {
            this.currentShip.cloaked = true
          }
        }
        break;

      case 'Pilot':
        this.engageWarpDrive = function (){
          if(this.currentShip == 'Looking for a Rig'){
            return 'had no effect'
          }
        }
        break;

    }
  }

}
