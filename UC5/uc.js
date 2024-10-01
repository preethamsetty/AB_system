AddressBook.prototype.deleteContact = function (firstName, lastName) {
    this.contacts = this.contacts.filter(contact => !(contact.firstName === firstName && contact.lastName === lastName));
};
