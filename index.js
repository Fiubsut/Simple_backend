const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoutes = require("./routes/product.route.js")

const app = express()
app.use(express.json());
//get from url
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
    res.send("Hello from Node API Serve update");
});




mongoose.connect("mongodb+srv://buithanhtu2506:112233zZ%40@capp.crpln.mongodb.net/Products").then(() => {
    console.log("Connect to database!");
    app.listen(3000, () => {
        console.log('sever is running on port 3000');
    });
}).catch(() => {
    console.log("Connect failed!")
})