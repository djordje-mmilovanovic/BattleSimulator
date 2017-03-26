"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var model_1 = require("./model");
var AppComponent = (function () {
    function AppComponent() {
        this.model = new model_1.Model();
        //army = new Army();
        this.battleField = new model_1.BattleField();
    }
    AppComponent.prototype.getArmy = function () {
        //console.log(this.battleField.armies[this.battleField.armies.length - 1].squads);
        return this.battleField.armies[this.battleField.armies.length - 1];
    };
    AppComponent.prototype.getArmies = function () {
        //console.log(this.battleField);
        return this.battleField;
    };
    AppComponent.prototype.createArmy = function () {
        //console.log(this.army);
        this.battleField.armies.push(new model_1.Army());
    };
    AppComponent.prototype.addSquad = function () {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads.length < 10) {
            this.battleField.armies[this.battleField.armies.length - 1].squads.push(new model_1.Squad());
        }
    };
    AppComponent.prototype.removeSquad = function () {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads.length > 2) {
            this.battleField.armies[this.battleField.armies.length - 1].squads.pop();
        }
    };
    AppComponent.prototype.addSoldier = function (num) {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.length < 10) {
            this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.push(new model_1.Soldier());
        }
    };
    AppComponent.prototype.removeSoldier = function (num) {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.length > 2) {
            this.battleField.armies[this.battleField.armies.length - 1].squads[num].soldiers.pop();
        }
    };
    AppComponent.prototype.addVehicle = function (num) {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.length < 10) {
            this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.push(new model_1.Vehicle());
        }
    };
    AppComponent.prototype.removeVehicle = function (num) {
        this.battleField.armies[this.battleField.armies.length - 1].squads[num].vehicles.pop();
    };
    AppComponent.prototype.addOperator = function (sNum, vNum) {
        console.log(sNum, vNum, 'ovde', this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length);
        if (this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length < this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].maxOperators) {
            this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.push(new model_1.Soldier());
        }
    };
    AppComponent.prototype.removeOperator = function (sNum, vNum) {
        if (this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.length > 1) {
            this.battleField.armies[this.battleField.armies.length - 1].squads[sNum].vehicles[vNum].operators.pop();
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.startBattle = function () {
        if (this.battleField.armies.length > 1) {
            var that = this;
            //var avgDmgPerSquad
            var x;
            this.battleField.armies.forEach(function (element, aIndex) {
                do {
                    x = Math.floor((Math.random() * that.battleField.armies.length));
                } while (x == aIndex);
                //console.log(index, "army attacks ->", x);
                element.target = x; //army to attack
                element.squads.forEach(function (element, sIndex) {
                    console.log(that.battleField.armies);
                    element.avgDmg = element.avgDmg();
                    element.target = Math.floor((Math.random() * that.battleField.armies[x].squads.length)); //squad to attack
                    //element.attack();
                    element.attackInt = setInterval(function () { that.attack(x, element.target, element.avgDmg); }, 100);
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
    };
    AppComponent.prototype.attack = function (army, squad, avgDmg) {
        if (this.battleField.armies[army].squads[squad].active == true) {
            //console.log(this.battleField.armies[army].squads[squad]);
            this.battleField.armies[army].squads[squad].soldiers.forEach(function (element, index) {
                element.health -= avgDmg;
                if (element.experience < 50) {
                    element.experience += 1;
                }
                if (element.health <= 0) {
                    this.battleField.armies[army].squads[squad].active = false;
                }
                //console.log("---------------------------------------------------");
                //console.log(element.health, element.experience, index)
            });
        }
        else {
            clearInterval(this.battleField.armies[army].squads[squad].attackInt);
        }
        //console.log("attack", army, squad, avgDmg);
    };
    AppComponent.prototype.resetArmyTable = function () {
        this.battleField.armies = [new model_1.Army()];
    };
    AppComponent.prototype.deleteLast = function () {
        if (this.battleField.armies.length > 1) {
            this.battleField.armies.pop();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "battle-app",
            templateUrl: "app/app.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
