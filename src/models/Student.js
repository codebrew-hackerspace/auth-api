const {mongooseConnection, mongodb} = require("../mongoConnection");

const schema = mongooseConnection.Schema({ name: "string"});
const Student = mongodb.model("Student", schema);

module.exports = Student;

