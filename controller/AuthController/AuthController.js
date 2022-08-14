const User = require('../../Models/Users/User');
const {ObjectID} = require("mongodb");

exports.Registrations = async (req, res) => {
    try {
        res.json({data: "user Registration Connected..."});
    }
    catch (error) {
        res.json({error: error});
    }
}
