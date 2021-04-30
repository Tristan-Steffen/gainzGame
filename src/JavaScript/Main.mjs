import GainzCalculator from "./GainzCalculator.mjs"
import LifeEvents from "./LifeEvent.mjs"
import {getBench, getDeadlift, getPullUp, getSquat, getUpgrades, getGymBros} from "./GainzCalculator.mjs"
import GameClock from "./GameClock.js"


//variable Initiations
const calculator = new GainzCalculator();
const liveEvents = new LifeEvents();
const gameClock = new GameClock();


liveEvents.selectEvent(0)

//###########################################################################################################################################################################
//Select Equiptment
document.getElementById("ButtonBenchSelect").addEventListener("click", function () {
    calculator.selectExercise("bench")
});
document.getElementById("ButtonSquatSelect").addEventListener("click", function () {
    calculator.selectExercise("squat")
});
document.getElementById("ButtonDeadLiftSelect").addEventListener("click", function () {
    calculator.selectExercise("deadLift")
});
document.getElementById("ButtonPullUpSelect").addEventListener("click", function () {
    calculator.selectExercise("pullUp")
});


//Upgrade Exercises
document.getElementById("UpgradeBench").addEventListener("click", function () {
    calculator.addStaticExerciseBonus("bench")
});
document.getElementById("UpgradeSquat").addEventListener("click", function () {
    calculator.addStaticExerciseBonus("squat")
});
document.getElementById("UpgradeDeadLift").addEventListener("click", function () {
    calculator.addStaticExerciseBonus("deadLift")
});
document.getElementById("UpgradePullUp").addEventListener("click", function () {
    calculator.addStaticExerciseBonus("pullUp")
});

var y = document.getElementById("event2");



//###########################################################################################################################################################################
// Der Game Loop Startet
setInterval(function () {
    y.getElementsByTagName("div")[0].style.width = map(liveEvents.currentRunntime,0,liveEvents.currentRunnDurationforCompletion,0,250)

    gameClock.addTime()
    calculator.calculateGainz()
    liveEvents.runnginEvent()



//Header Info
    document.getElementById("Gainz").innerHTML = "Gainz " +Math.floor(calculator.totalGainz);
    document.getElementById("Time").innerHTML ="Time "+ gameClock.gameClock
    document.getElementById("Life").innerHTML ="Life " + liveEvents.Life;
    document.getElementById("BossLevel").innerHTML ="BossLeves " + "bossLevel";
//Select Bench
    document.getElementById("BenchPressStrength").innerHTML = 'Weight per rep: 0';
    document.getElementById("BenchPressGainzPS").innerHTML = "Gainz Per Second: " + getBench().gainzPs;
//Select PullUp
    document.getElementById("PullUpStrength").innerHTML = 'Weight per rep: 0';
    document.getElementById("PullUpGainzPS").innerHTML = "Gainz Per Second: " + getPullUp().gainzPs;
//Select DeadLift
    document.getElementById("DeadLiftStrength").innerHTML = 'Weight per rep: 0';
    document.getElementById("DeadLiftGainzPS").innerHTML = "Gainz Per Second: " + getDeadlift().gainzPs;
//Select Squats
    document.getElementById("SquatStrength").innerHTML = 'Weight per rep: 0';
    document.getElementById("SquatGainzPS").innerHTML = "Gainz Per Second: " + getSquat().gainzPs;

//Upgrade Bench Info
    document.getElementById("UpgradeBenchName").innerHTML = getUpgrades().upgradesBench[0].name
    document.getElementById("UpgradeBenchPrice").innerHTML = "price: " + getUpgrades().upgradesBench[0].price + " Gainz"
    document.getElementById("UpgradeBenchBonus").innerHTML = "effect: " + getUpgrades().upgradesBench[0].effect + "Gainz"
//Upgrade Squat Info
    document.getElementById("UpgradeSquatName").innerHTML = getUpgrades().upgradesSquat[0].name
    document.getElementById("UpgradeSquatPrice").innerHTML = "price: " + getUpgrades().upgradesSquat[0].price + " Gainz"
    document.getElementById("UpgradeSquatBonus").innerHTML = "effect: " + getUpgrades().upgradesSquat[0].effect + " Gainz"
//Upgrade DeadLift Info
    document.getElementById("UpgradeDeadLiftName").innerHTML = getUpgrades().upgradesDeadLift[0].name
    document.getElementById("UpgradeDeadLiftPrice").innerHTML = "price: " + getUpgrades().upgradesDeadLift[0].price + " Gainz"
    document.getElementById("UpgradeDeadLiftBonus").innerHTML = "effect: " + getUpgrades().upgradesDeadLift[0].effect + " Gainz"
//Upgrade Pullup Info
    document.getElementById("UpgradePullUpName").innerHTML = getUpgrades().upgradesPullUp[0].name
    document.getElementById("UpgradePullUpPrice").innerHTML = "price: " + getUpgrades().upgradesPullUp[0].price + " Gainz"
    document.getElementById("UpgradePullUpBonus").innerHTML = "effect: " + getUpgrades().upgradesPullUp[0].effect + " Gainz"
//GymBros
    document.getElementById("GymBrosPrice").innerHTML = getGymBros().Bros[6].price;
    document.getElementById("GymBrosGainz").innerHTML = getGymBros().Bros[6].Gainz;
    document.getElementById("GymBrosLife").innerHTML = getGymBros().Bros[6].Life;
    document.getElementById("GymBrosBenchBonus").innerHTML = getGymBros().Bros[6].BenchBonus;
    document.getElementById("GymBrosDeadLiftBonus").innerHTML = getGymBros().Bros[6].DeadLiftBonus;
    document.getElementById("GymBrosSquatBonus").innerHTML = getGymBros().Bros[6].SquatBonus;
    document.getElementById("GymBrosPullUpBonus").innerHTML = getGymBros().Bros[6].PullUpBonus;
    document.getElementById("GymBrosGesamtBonus").innerHTML = getGymBros().Bros[6].GesamtBonus;

document.getElementById("GymBrosPrice").innerHTML = getGymBros().Bros[7].price;
document.getElementById("GymBrosGainz").innerHTML = getGymBros().Bros[7].Gainz;
document.getElementById("GymBrosLife").innerHTML = getGymBros().Bros[7].Life;
document.getElementById("GymBrosBenchBonus").innerHTML = getGymBros().Bros[7].BenchBonus;
document.getElementById("GymBrosDeadLiftBonus").innerHTML = getGymBros().Bros[7].DeadLiftBonus;
document.getElementById("GymBrosSquatBonus").innerHTML = getGymBros().Bros[7].SquatBonus;
document.getElementById("GymBrosPullUpBonus").innerHTML = getGymBros().Bros[7].PullUpBonus;
document.getElementById("GymBrosGesamtBonus").innerHTML = getGymBros().Bros[7].GesamtBonus;
//LiveEvents
    document.getElementById("LiveEventTimer").innerHTML = "next Event " + (liveEvents.liveEventArray[liveEvents.currentPointInTheArray].timeToWait - Math.floor(liveEvents.currentRunntime))
    document.getElementById("LifeEventBonus").innerHTML = "+ " + liveEvents.liveEventArray[liveEvents.currentPointInTheArray].gainedLife +" Life"



}, 100);

function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

