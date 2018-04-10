function Person(name, email) {
  this.name = name;
  this.email = email;
}
Person.prototype.getName = function() {
  return this.name;
};
export default Person;
