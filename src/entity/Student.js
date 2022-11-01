function Student(id, name) {
    this.id = id
    this.name = name
}
Student.prototype.getName = function () {
    return this.name
}

module.exports = Student