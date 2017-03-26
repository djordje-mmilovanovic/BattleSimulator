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
    }
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
    }
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
