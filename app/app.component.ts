import { Component } from "@angular/core";
import { BattleField, Army, Squad, Soldier, Vehicle, Model, TodoItem } from "./model";
@Component({
    selector: "battle-app",
    templateUrl: "app/app.component.html"
})
export class AppComponent {
    model = new Model();
    //army = new Army();
	battleField = new BattleField();

	getArmy() {
		//console.log(this.battleField.armies[this.battleField.armies.length - 1].squads);
		return this.battleField.armies[this.battleField.armies.length - 1];
	}
	
	getArmies() {
		//console.log(this.battleField);
		return this.battleField;
	}
	
	createArmy() {
		//console.log(this.army);
		this.battleField.armies.push(new Army());
	}

	addSquad() {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads.length < 10) {
			this.battleField.armies[this.battleField.armies.length - 1].squads.push(new Squad());
		}
	}

	removeSquad() {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads.length > 2) {
			this.battleField.armies[this.battleField.armies.length - 1].squads.pop();
		}
	}
	
	addSoldier(num) {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.length < 10) {
			this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.push(new Soldier());
		}		
	}

	removeSoldier(num) {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.length > 2) {
			this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.pop();
		}
	}

	addVehicle(num) {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.length < 10) {
			this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.push(new Vehicle());
		}
	}
	
	removeVehicle(num) {
		this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.pop();
	}
	
	addOperator(sNum, vNum) {
		console.log(sNum, vNum, 'ovde', this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length);
		if(this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length < this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].maxOperators) {
			this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.push(new Soldier());
		}
	}
	
	removeOperator(sNum, vNum) {
		if(this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length > 1) {
			this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.pop();
		}		
	}
	
/////////////////////////////////////////////////////////////////////////////////////////

	startBattle() {
		if(this.battleField.armies.length > 1) {
			var that = this;
			//var avgDmgPerSquad
			var x;
			
			
			
			this.battleField.armies.forEach(function(element, aIndex) {
				do {
					x = Math.floor((Math.random() * that.battleField.armies.length));
				} while(x == aIndex);
				//console.log(index, "army attacks ->", x);
				
				element.target = x;      											//army to attack
				
				element.squads.forEach(function(element, sIndex) {
					console.log(that.battleField.armies);
					element.avgDmg = element.avgDmg();
					element.target = Math.floor((Math.random() * that.battleField.armies[x].squads.length));	//squad to attack
					//element.attack();
					
					element.attackInt = setInterval(function() {that.attack(x, element.target, element.avgDmg)}, 100);

					//var id = setInterval(function(){
						//alert("Hello");
						
						//if( ) {
							//console.log();
						//} else {
						//	//clearInterval(id);
						//}

					//}, 3000);
					
					//console.log(sIndex, element.avgDmg());
					//that.avgSquadDmg(element, sIndex, aIndex);
				});
				
				//console.log(element);
				
			});
			
			
		}
	}
	
	attack(army, squad, avgDmg) {
		
		if(this.battleField.armies[army].squads[squad].active == true) {
			//console.log(this.battleField.armies[army].squads[squad]);
			this.battleField.armies[army].squads[squad].soldiers.forEach(function(element, index) {
				element.health -= avgDmg;
				if(element.experience < 50) {
					element.experience += 1;
				}
				
				if(element.health <= 0) {
					this.battleField.armies[army].squads[squad].active = false;
				}
				
				//console.log("---------------------------------------------------");
				//console.log(element.health, element.experience, index)
				
			});
		} else {
			clearInterval(this.battleField.armies[army].squads[squad].attackInt);
		}
		//console.log("attack", army, squad, avgDmg);
		
		
	}
	
	
	
	resetArmyTable() {
		this.battleField.armies = [new Army()];
	}

	deleteLast() {
		if(this.battleField.armies.length > 1)
		{
			this.battleField.armies.pop(); 
		}	
	}
	
	//avgSquadDmg(element, sIndex, aIndex) {
	//	//console.log('eleme',element);
	//	var sum = 0;
	//	element.soldiers.forEach(function(element, index) {
	//		if(element.health > 0) {
	//			sum += element.damage;
	//		}
	//		
	//		//console.log(element);
	//	});
	//	//console.log(sum, 'is average dmg for squad -->', sIndex, 'in army', aIndex);
	//	return sum;
	//	
	//}
/////////////////////////////////////////////////////////////////////////////////////////	
	
//	getName() {
//        return this.model.user;
//    }
//
//	getTodoItems() {
//        return this.model.items.filter(item => !item.done); // lambda function return this.model.items.filter(function (item) { return !item.done });
//    }
//	
//	addItem(newItem) {
//        if (newItem != "") {
//            this.model.items.push(new TodoItem(newItem, false));
//        }
//    }
}