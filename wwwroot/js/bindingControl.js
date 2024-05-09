/// <reference path="../knockout/knockout-latest.js" />

var viewModel = {
    data: [
        { "Id": 1, "Name": "Shatrudhan" },
        { "Id": 2, "Name": "Anuj" }
    ]
};

var viewModel1 = {
    data: [
        { "Id": 1, "Name": "Amit" },
        { "Id": 2, "Name": "Raj" }
    ]
};

var monthModel = {
    months: [
        "January",
        "February",
        "March",
        "April"
    ]
};

var termModel = {
    termChecked: ko.observable(false)
};

ko.applyBindings(viewModel);
ko.applyBindings(viewModel1);
ko.applyBindings(monthModel);
ko.applyBindings(termModel);
