
class AboutModel {
    firstName: KnockoutObservable<string> ;
    lastName: KnockoutObservable<string> ;
    age: KnockoutObservable<number>;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.age = ko.observable(age);
    }
   
}

ko.applyBindings(new AboutModel("","",0));