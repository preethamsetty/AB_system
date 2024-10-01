AddressBook.prototype.sortByCity = function () {
    this.contacts.sort((a, b) => a.city.localeCompare(b.city));
    console.log(this.contacts);
};

AddressBook.prototype.sortByState = function () {
    this.contacts.sort((a, b) => a.state.localeCompare(b.state));
    console.log(this.contacts);
};

AddressBook.prototype.sortByZip = function () {
    this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
    console.log(this.contacts);
};
