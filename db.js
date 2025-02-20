const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://admin1:admin1@cluster0.iljgy.mongodb.net/rooms';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
