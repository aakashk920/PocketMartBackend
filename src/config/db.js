const mongoose = require("mongoose");

const mongodbURL = "mongodb+srv://aakash:Hy4HCvFUZbL4O7oZ@cluster0.uheptld.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
    mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });
};

module.exports = { connectDb };
