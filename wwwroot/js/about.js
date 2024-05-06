/// <reference path="../knockout/knockout-latest.js" />


var observableArray = ko.observableArray();


observableArray.push("tata");

var array = ko.observableArray([
    { Name: "Shatrudhan", Position: "Developer" },
    { Name: "Anand", Position: "Tester" }
]);

var aboutModel = {
    FirstName: ko.observable("Shatrudhan"),
    LastName: ko.observable("Kumar")
};


ko.applyBindings(aboutModel);
