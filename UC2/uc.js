class ValidationError extends Error {
  constructor(message) {
      super(message);
      this.name = 'ValidationError';
  }
}

function isValidContact(contact) {
  const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
  const addressPattern = /^.{4,}$/;
  const zipPattern = /^\d{5}$/;
  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  if (!namePattern.test(contact.firstName) || !namePattern.test(contact.lastName)) {
      throw new ValidationError('First and Last name should start with a capital letter and be at least 3 characters.');
  }
  if (!addressPattern.test(contact.address) || !addressPattern.test(contact.city) || !addressPattern.test(contact.state)) {
      throw new ValidationError('Address, City, and State should have at least 4 characters.');
  }
  if (!zipPattern.test(contact.zip)) {
      throw new ValidationError('Invalid Zip Code');
  }
  if (!phonePattern.test(contact.phone)) {
      throw new ValidationError('Invalid Phone Number');
  }
  if (!emailPattern.test(contact.email)) {
      throw new ValidationError('Invalid Email');
  }
}
