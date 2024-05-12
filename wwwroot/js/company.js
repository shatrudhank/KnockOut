var Company = /** @class */ (function () {
    function Company(data) {
        this.addItem = function () {
            if (this.itemToAdd().length > 0) {
                this.items.push(this.itemToAdd());
                this.itemToAdd("");
            }
        };
        this.items = ko.observableArray(data);
        this.itemToAdd = ko.observable("");
    }
    Company.prototype.AlertMe = function () {
        alert("Hello");
    };
    return Company;
}());
ko.applyBindings(new Company(["Luxoft"]));
