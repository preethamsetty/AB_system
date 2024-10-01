AddressBook.prototype.sortByName = function () {
    this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log(this.contacts);
};
