export default class Upgrades {

    upgradesBench = [
        {"name": "basic Bench", "price": "1", "effect": 10},
        {"name": "basic Bench2", "price": "5", "effect": 100},
        {"name": "basic Bench3", "price": "55", "effect": 1000},
        {"name": "basic Bench4", "price": "555", "effect": 1000},
        {"name": "basic Bench5", "price": "5555", "effect": 10000},
        {"name": "basic Bench6", "price": "55555", "effect": 100000},
        {"name": "basic Bench7", "price": "555555", "effect": 100000},
        {"name": "basic Bench8", "price": "5555555", "effect": 1000000},
    ]
    upgradesSquat = [
        {"name": "basic SquatRack", "price": "1", "effect": 10},
        {"name": "basic SquatRack2", "price": "5", "effect": 100},
        {"name": "basic SquatRack3", "price": "55", "effect": 1000},
        {"name": "basic SquatRack4", "price": "555", "effect": 1000},
        {"name": "basic SquatRack5", "price": "5555", "effect": 10000},
        {"name": "basic SquatRack6", "price": "55555", "effect": 100000},
        {"name": "basic SquatRack7", "price": "555555", "effect": 100000},
        {"name": "basic SquatRack8", "price": "5555555", "effect": 1000000},
    ]
    upgradesDeadLift = [
        {"name": "basic DeadLift", "price": "1", "effect": 10},
        {"name": "basic DeadLift2", "price": "5", "effect": 100},
        {"name": "basic DeadLift3", "price": "55", "effect": 1000},
        {"name": "basic DeadLift4", "price": "555", "effect": 1000},
        {"name": "basic DeadLift5", "price": "5555", "effect": 10000},
        {"name": "basic DeadLift6", "price": "55555", "effect": 100000},
        {"name": "basic DeadLift7", "price": "555555", "effect": 100000},
        {"name": "basic DeadLift8", "price": "5555555", "effect": 1000000},
    ]
    upgradesPullUp = [
        {"name": "basic PullUp", "price": "1", "effect": 10},
        {"name": "basic PullUp2", "price": "5", "effect": 100},
        {"name": "basic PullUp3", "price": "55", "effect": 1000},
        {"name": "basic PullUp4", "price": "555", "effect": 1000},
        {"name": "basic PullUp5", "price": "5555", "effect": 10000},
        {"name": "basic PullUp6", "price": "55555", "effect": 100000},
        {"name": "basic PullUp7", "price": "555555", "effect": 100000},
        {"name": "basic PullUp8", "price": "5555555", "effect": 1000000},
    ]

    constructor() {
    }

    removeFirstUpgradeInBenchArray(){
        this.upgradesBench.shift()
    }

    removeFirstUpgradeInSquatArray(){
        this.upgradesSquat.shift()
    }
    removeFirstUpgradeInDeadLiftArray(){
        this.upgradesDeadLift.shift()
    }
    removeFirstUpgradeInPullUpArray(){
        this.upgradesPullUp.shift()
    }
}






