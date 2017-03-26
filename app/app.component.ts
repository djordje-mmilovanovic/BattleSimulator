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
/////////////////////////////////////////////////////////////////////////////////////////	
	
	getName() {
        return this.model.user;
    }

	getTodoItems() {
        return this.model.items.filter(item => !item.done); // lambda function return this.model.items.filter(function (item) { return !item.done });
    }
	
	addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new TodoItem(newItem, false));
        }
    }
}