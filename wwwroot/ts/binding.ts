class Binding {
    showMsg: KnockoutObservable<boolean> = ko.observable(false);
    url: KnockoutObservable<string> = ko.observable("www.google.com");
    mark: KnockoutObservable<number> = ko.observable(23);

    FlipShowMsg(): void {
        this.showMsg(!this.showMsg());
    }

}

ko.applyBindings(new Binding());