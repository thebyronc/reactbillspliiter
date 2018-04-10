function Person(name, email) {
  this.name = name;
  this.email = email;
}
Person.prototype.getName = function() {
  return this.name;
};
Person.prototype.getEmail = function() {
  return this.email;
};
export default Person;
