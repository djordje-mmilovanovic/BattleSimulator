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
        this.army = new model_1.Army();
        this.battleField = [];
    }
    AppComponent.prototype.getArmy = function () {
        return this.army;
    };
    AppComponent.prototype.getArmies = function () {
        return this.battleField;
    };
    AppComponent.prototype.createArmy = function () {
        console.log(this.battleField);
        this.battleField.push(this.army);
    };
    AppComponent.prototype.addSquad = function () {
        if (this.army.squads.length < 10) {
            this.army.squads.push(new model_1.Squad());
        }
    };
    AppComponent.prototype.removeSquad = function () {
        if (this.army.squads.length > 2) {
            this.army.squads.pop();
        }
    };
    AppComponent.prototype.addSoldier = function (num) {
        if (this.army.squads[num].soldiers.length < 10) {
            this.army.squads[num].soldiers.push(new model_1.Soldier());
        }
    };
    AppComponent.prototype.removeSoldier = function (num) {
        if (this.army.squads[num].soldiers.length > 2) {
            this.army.squads[num].soldiers.pop();
        }
    };
    AppComponent.prototype.addVehicle = function (num) {
        if (this.army.squads[num].vehicles.length < 10) {
            this.army.squads[num].vehicles.push(new model_1.Vehicle());
        }
    };
    AppComponent.prototype.removeVehicle = function (num) {
        this.army.squads[num].vehicles.pop();
    };
    AppComponent.prototype.addOperator = function (sNum, vNum) {
        if (this.army.squads[sNum].vehicles[vNum].operators.length < this.army.squads[sNum].vehicles[vNum].maxOperators) {
            this.army.squads[sNum].vehicles[vNum].operators.push(new model_1.Soldier());
        }
    };
    AppComponent.prototype.removeOperator = function (sNum, vNum) {
        if (this.army.squads[sNum].vehicles[vNum].operators.length > 1) {
            this.army.squads[sNum].vehicles[vNum].operators.pop();
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    AppComponent.prototype.getName = function () {
        return this.model.user;
    };
    AppComponent.prototype.getTodoItems = function () {
        return this.model.items.filter(function (item) { return !item.done; }); // lambda function return this.model.items.filter(function (item) { return !item.done });
    };
    AppComponent.prototype.addItem = function (newItem) {
        if (newItem != "") {
            this.model.items.push(new model_1.TodoItem(newItem, false));
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
