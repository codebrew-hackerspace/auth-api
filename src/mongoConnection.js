const mongooseConnection = require("mongoose");
const uri = "mongodb://product:infra28@ds125385.mlab.com:25385/auth-infra"; 
const mongodb = mongooseConnection.createConnection(uri, { useNewUrlParser: true });

module.exports = {
    mongooseConnection, 
    mongodb
};