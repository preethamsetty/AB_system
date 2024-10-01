AddressBook.prototype.hasDuplicate = function (firstName, lastName) {
    return this.contacts.some(contact => contact.firstName === firstName && contact.lastName === lastName);
};

AddressBook.prototype.addUniqueContact = function (contact) {
    if (!this.hasDuplicate(contact.firstName, contact.lastName)) {
        this.addContact(contact);
    } else {
        console.log('Duplicate entry found');
    }
};
