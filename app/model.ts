export class Model {

    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Buy Flowers", false),
                      new TodoItem("Get Shoes", false),
                      new TodoItem("Collect Tickets", false),
                      new TodoItem("Call Joe", false)]
    }
}
export class TodoItem {

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
/*------------------------------------------------------------------------------*/









export class BattleField {
	constructor() {
		this.armies = [new Army()];
	}
}

export class Army {
	constructor() {
		this.squads = [new Squad(),
					   new Squad(),
					   new Squad()];
	}
}

export class Squad {
	constructor() {
		this.soldiers = [new Soldier(),
						 new Soldier(),
						 new Soldier(),];
		this.vehicles = [new Vehicle()];
	}
}

class Unit {
	constructor() {
		this.health = 100;
		this.recharge = 100;
	}
}

export class Soldier extends Unit {
	constructor() {
		super();
		this.experience = 0;
	}
}

export class Vehicle extends Unit{
	constructor() {
		super();
		this.operators = [new Soldier()];
		this.maxOperators = 4;
		
	}
}

