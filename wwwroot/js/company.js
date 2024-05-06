/// <reference path="../knockout/knockout-latest.js" />

var ListModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        if (this.itemToAdd() != "") {
            this.items.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);

    this.alertMe = function () {
        alert("You have alert");
    }.bind(this);
};

ko.applyBindings(ListModel);
