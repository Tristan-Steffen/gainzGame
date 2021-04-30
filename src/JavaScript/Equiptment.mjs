export default class Equiptment {
    gainzPs = 1;


    constructor() {}

    addStatischeBonis(upgrade) {
        this.gainzPs +=upgrade
    }

    addProzentualeBonis(upgrade) {
       this.gainzPs *= upgrade
    }


}



