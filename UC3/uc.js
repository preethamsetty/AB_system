const addressBook = new AddressBook();

try {
    const contact = new Contact('John', 'Doe', '1234 Elm St', 'New York', 'NY', '10001', '1234567890', 'john.doe@example.com');
    isValidContact(contact);
    addressBook.addContact(contact);
} catch (error) {
    console.error(error.message);
}
