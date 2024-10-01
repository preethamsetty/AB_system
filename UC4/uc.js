AddressBook.prototype.findContact = function (firstName, lastName) {
    return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
};

AddressBook.prototype.editContact = function (firstName, lastName, newDetails) {
    const contact = this.findContact(firstName, lastName);
    if (contact) {
        Object.assign(contact, newDetails);
    } else {
        console.log('Contact not found');
    }
};
