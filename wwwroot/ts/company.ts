class Company {
    itemToAdd: KnockoutObservable<string> ;
    items: KnockoutObservableArray<string>;
    constructor(data: any) {
        this.items = ko.observableArray(data);
        this.itemToAdd = ko.observable("");
    }

     addItem = function () {
         if (this.itemToAdd().length>0) {
             this.items.push(this.itemToAdd());
             this.itemToAdd("");
         }
    }
    AlertMe ():void {
        alert("Hello");
    }
}

ko.applyBindings(new Company(["Luxoft"]));