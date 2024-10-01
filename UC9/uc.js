AddressBook.prototype.viewByCityOrState = function (location) {
    const contactsByLocation = this.searchByCityOrState(location);
    contactsByLocation.forEach(contact => console.log(contact));
};
