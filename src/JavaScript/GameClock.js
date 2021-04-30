export default class GameClock{

    gameClockInteger = 0
    gameClock = 0

    constructor() {
    }

     addTime(){
        this.gameClockInteger ++
         if (this.gameClockInteger % 10 == 0){
             this.gameClock ++
         }
     }

}