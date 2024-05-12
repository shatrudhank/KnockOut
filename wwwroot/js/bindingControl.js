var Student = /** @class */ (function () {
    function Student(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return Student;
}());
var BindingControlVm = /** @class */ (function () {
    function BindingControlVm() {
        this.StudentArray = [];
        this.termChecked = ko.observable(true);
        this.WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.StudentArray.push(new Student(1, "Shatrudhan"));
        this.StudentArray.push(new Student(2, "Anuj"));
    }
    return BindingControlVm;
}());
ko.applyBindings(new BindingControlVm());
