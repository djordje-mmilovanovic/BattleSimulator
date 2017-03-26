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
		this.target;
	}
}

export class Squad {
	constructor() {
		this.soldiers = [new Soldier(),
						 new Soldier(),
						 new Soldier(),];
		this.vehicles = [new Vehicle()];
		this.target;
		this.avgDmg;
	}
	
	avgDmg() {
		var sum = 0;
		this.soldiers.forEach(function(element, index) {
			if(element.health > 0) {
				sum += element.damage;
			}
			//console.log(element);
		});
		return sum;
	}
	
	//attack() {
	//	var intervalID = setInterval(this.check, 100);
	//}
	//
	//check() {
	//	if() {
	//		
	//	} else {
	//		
	//	}
	//}
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
		this.damage = 0.05 + this.experience/100;
	}
	
	attack() {
		console.log(this.damage, 'damage');
	}
}

export class Vehicle extends Unit{
	constructor() {
		super();
		this.operators = [new Soldier()];
		this.maxOperators = 4;
		
	}
}

