export default class LifeEvent {

    Life = 0
    LifeMax = 100
    currentRunnDurationforCompletion = 0
    currentRunntime = 0
    currentPointInTheArray = 0

    constructor() {
    }

    liveEventArray = [
        {"name": "basic Event", "timeToWait": 5, "gainedLife": 40},
        {"name": "basic Event2", "timeToWait": 5, "gainedLife": 3},
        {"name": "basic Event3", "timeToWait": 7, "gainedLife": 5},
        {"name": "basic Event4", "timeToWait": 15, "gainedLife": 8},
        {"name": "basic Event5", "timeToWait": 20, "gainedLife": 10},
        {"name": "basic Event6", "timeToWait": 25, "gainedLife": 13},
        {"name": "basic Event7", "timeToWait": 30, "gainedLife": 17},
        {"name": "basic Event8", "timeToWait": 35, "gainedLife": 20},
    ]

    activateEvent() {
        let nextLife = this.liveEventArray[this.currentPointInTheArray].gainedLife
        this.Life += nextLife
        if (this.Life >= this.LifeMax)  {
            this.Life = this.LifeMax
        }
    }


    selectEvent(int) {
        this.currentPointInTheArray = int
        this.currentRunnDurationforCompletion = this.liveEventArray[int].timeToWait
        this.currentRunntime = 0
    }


    runnginEvent() {
        this.currentRunntime += 0.101
        if (this.currentRunntime >= this.liveEventArray[this.currentPointInTheArray].timeToWait) {
            this.activateEvent()
            this.currentRunntime = 0
        }
    }
}