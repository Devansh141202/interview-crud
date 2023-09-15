const mongoose = require("mongoose");
exports.connectionDB = () => {
    mongoose.connect("mongodb+srv://20CE061:Devansh123@cluster0.hnonzla.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
        console.log(`MongoDB is connected with server: ${data.connection.host}`)
    })
}