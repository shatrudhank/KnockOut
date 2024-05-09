/// <reference path="../knockout/knockout-latest.js" />

var bindingModel = function () {
    this.showMsg = ko.observable(true);
    this.url = ko.observable("www.google.com");
    this.mark = ko.observable(20);
    this.flipShowHide = function () {
        this.showMsg(!this.showMsg());
    }
}


ko.applyBindings(bindingModel);
