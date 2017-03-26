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
		this.active = true;
		this.attackInt;
		
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
		this.chance;
	}
	
	attackChance() {
		this.chance = 0.5 * (1 + this.health/100) * (Math.floor((Math.random() * 100) + (50 + this.experience))) / 100;
		return this.chance;
	}
}

export class Vehicle extends Unit{
	constructor() {
		super();
		this.operators = [new Soldier()];
		this.maxOperators = 4;
		
	}
}
