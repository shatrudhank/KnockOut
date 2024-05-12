var Binding = /** @class */ (function () {
    function Binding() {
        this.showMsg = ko.observable(false);
        this.url = ko.observable("www.google.com");
        this.mark = ko.observable(23);
    }
    Binding.prototype.FlipShowMsg = function () {
        this.showMsg(!this.showMsg());
    };
    return Binding;
}());
ko.applyBindings(new Binding());
