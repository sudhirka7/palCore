const mongodb = require("mongoose");

async function main() {
    mongodb.connect("mongodb://127.0.0.1:27017/paypal");
}


module.exports = main;