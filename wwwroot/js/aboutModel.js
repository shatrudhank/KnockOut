var AboutModel = /** @class */ (function () {
    function AboutModel(firstName, lastName, age) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.age = ko.observable(age);
    }
    return AboutModel;
}());
ko.applyBindings(new AboutModel("", "", 0));
