"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Model = (function () {
    function Model() {
        this.user = "Adam";
        this.items = [new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false),
            new TodoItem("Call Joe", false)];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
/*------------------------------------------------------------------------------*/
var BattleField = (function () {
    function BattleField() {
        this.armies = [new Army()];
    }
    return BattleField;
}());
exports.BattleField = BattleField;
var Army = (function () {
    function Army() {
        this.squads = [new Squad(),
            new Squad(),
            new Squad()];
        this.target;
    }
    return Army;
}());
exports.Army = Army;
var Squad = (function () {
    function Squad() {
        this.soldiers = [new Soldier(),
            new Soldier(),
            new Soldier(),];
        this.vehicles = [new Vehicle()];
        this.target;
        this.avgDmg;
        this.active = true;
        this.attackInt;
    }
    Squad.prototype.avgDmg = function () {
        var sum = 0;
        this.soldiers.forEach(function (element, index) {
            if (element.health > 0) {
                sum += element.damage;
            }
            //console.log(element);
        });
        return sum;
    };
    return Squad;
}());
exports.Squad = Squad;
var Unit = (function () {
    function Unit() {
        this.health = 100;
        this.recharge = 100;
    }
    return Unit;
}());
var Soldier = (function (_super) {
    __extends(Soldier, _super);
    function Soldier() {
        _super.call(this);
        this.experience = 0;
        this.damage = 0.05 + this.experience / 100;
        this.chance;
    }
    Soldier.prototype.attackChance = function () {
        this.chance = 0.5 * (1 + this.health / 100) * (Math.floor((Math.random() * 100) + (50 + this.experience))) / 100;
        return this.chance;
    };
    return Soldier;
}(Unit));
exports.Soldier = Soldier;
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        _super.call(this);
        this.operators = [new Soldier()];
        this.maxOperators = 4;
    }
    return Vehicle;
}(Unit));
exports.Vehicle = Vehicle;
