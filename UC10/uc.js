AddressBook.prototype.countByCityOrState = function (location) {
    return this.searchByCityOrState(location).length;
};
