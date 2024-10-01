AddressBook.prototype.searchByCityOrState = function (location) {
    return this.contacts.filter(contact => contact.city === location || contact.state === location);
};
