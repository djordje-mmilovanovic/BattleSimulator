import { Component } from "@angular/core";
import { BattleField, Army, Squad, Soldier, Vehicle, Model, TodoItem } from "./model";
@Component({
    selector: "battle-app",
    templateUrl: "app/app.component.html"
})
export class AppComponent {
    model = new Model();
    army = new Army();
	battleField = [];

	getArmy() {
		return this.army;
	}
	
	getArmies() {
		return this.battleField;
	}
	
	createArmy() {
		console.log(this.battleField);
		this.battleField.push(this.army);
	}

	addSquad() {
		if(this.army.squads.length < 10) {
			this.army.squads.push(new Squad());
		}
	}

	removeSquad() {
		if(this.army.squads.length > 2) {
			this.army.squads.pop();
		}
	}
	
	addSoldier(num) {
		if(this.army.squads[num].soldiers.length < 10) {
			this.army.squads[num].soldiers.push(new Soldier());
		}		
	}

	removeSoldier(num) {
		if(this.army.squads[num].soldiers.length > 2) {
			this.army.squads[num].soldiers.pop();
		}
	}

	addVehicle(num) {
		if(this.army.squads[num].vehicles.length < 10) {
			this.army.squads[num].vehicles.push(new Vehicle());
		}
	}
	
	removeVehicle(num) {
		this.army.squads[num].vehicles.pop();
	}
	
	addOperator(sNum, vNum) {
		if(this.army.squads[sNum].vehicles[vNum].operators.length < this.army.squads[sNum].vehicles[vNum].maxOperators) {
			this.army.squads[sNum].vehicles[vNum].operators.push(new Soldier());
		}
	}
	
	removeOperator(sNum, vNum) {
		if(this.army.squads[sNum].vehicles[vNum].operators.length > 1) {
			this.army.squads[sNum].vehicles[vNum].operators.pop();
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