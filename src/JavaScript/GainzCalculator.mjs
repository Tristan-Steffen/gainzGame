import Equiptment from "./Equiptment.mjs"
import Upgrades from "./Upgrades.js"
import GymBro from"./GymBro.mjs"

const bench = new Equiptment();
const squat = new Equiptment();
const deadLift = new Equiptment();
const pullUp = new Equiptment();
const upgrades = new Upgrades();
const GymBros = new GymBro();

export default class GainzCalculator {

    totalGainz = 0
    gainzPs = 0
    globalBonis = [1]
    currentExercise = ""

    constructor() {

    }

    selectExercise(exercise) {
        if (exercise == "bench") {
            this.gainzPs = bench.gainzPs
            this.currentExercise = "bench"
        }
        if (exercise == "squat") {
            this.gainzPs = squat.gainzPs
            this.currentExercise = "squat"
        }
        if (exercise == "deadLift") {
            this.gainzPs = deadLift.gainzPs
            this.currentExercise = "deadLift"
        }
        if (exercise == "pullUp") {
            this.gainzPs = pullUp.gainzPs
            this.currentExercise = "pullUp"
        }
    }

    rechneGlobalBonisZusammen() {
        let tempBonis = 1
        for (let i = 0; i < this.globalBonis.length; i++) {
            tempBonis *= this.globalBonis[i]
            return tempBonis
        }
    }

    addStaticExerciseBonus(exercise) {
        if (exercise == "bench" && this.totalGainz >= upgrades.upgradesBench[0].price) {
            this.totalGainz -= upgrades.upgradesBench[0].price
            bench.addStatischeBonis(upgrades.upgradesBench[0].effect)
            upgrades.removeFirstUpgradeInBenchArray()
            this.selectExercise(this.currentExercise)
        }
        if (exercise == "pullUp"&& this.totalGainz >= upgrades.upgradesPullUp[0].price) {
            this.totalGainz -= upgrades.upgradesPullUp[0].price
            pullUp.addStatischeBonis(upgrades.upgradesPullUp[0].effect)
            upgrades.removeFirstUpgradeInPullUpArray()
            this.selectExercise(this.currentExercise)
        }
        if (exercise == "squat"&& this.totalGainz >= upgrades.upgradesSquat[0].price) {
            this.totalGainz -= upgrades.upgradesSquat[0].price
            squat.addStatischeBonis(upgrades.upgradesSquat[0].effect)
            upgrades.removeFirstUpgradeInSquatArray()
            this.selectExercise(this.currentExercise)
        }
        if (exercise == "deadLift"&& this.totalGainz >= upgrades.upgradesDeadLift[0].price) {
            this.totalGainz -= upgrades.upgradesDeadLift[0].price
            deadLift.addStatischeBonis(upgrades.upgradesDeadLift[0].effect)
            upgrades.removeFirstUpgradeInDeadLiftArray()
            this.selectExercise(this.currentExercise)
        }
    }

    calculateGainz() {
        this.totalGainz += this.gainzPs / 10
    }


}

export function getBench() {
    return bench
}

export function getDeadlift() {
    return deadLift
}

export function getSquat() {
    return squat
}

export function getPullUp() {
    return pullUp
}

export function getUpgrades() {
    return upgrades
}

export function getGymBros(){
    return GymBros;
}


