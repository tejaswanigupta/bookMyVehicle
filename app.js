
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3001

app.use(express.json());

const vehicleRoutes = require("./routes/vehicleRoute");
app.use("/vehicle", vehicleRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongodb: mongoose.connect("mongodb://localhost:27017/vehicleDB");
