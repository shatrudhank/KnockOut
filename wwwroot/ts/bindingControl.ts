class Student {
    Id: number;
    Name: string;

    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;

    }
}
class BindingControlVm {
    StudentArray: Array<Student> = [];
    termChecked: KnockoutObservable<boolean> = ko.observable(true);
    WeekDays: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    constructor() {
        this.StudentArray.push(new Student(1, "Shatrudhan"));
        this.StudentArray.push(new Student(2, "Anuj"));
    }
}

ko.applyBindings(new BindingControlVm());