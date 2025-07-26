
const mongoose = require ("mongoose");
const vehicleSchema = mongoose.Schema(
    {
        isBooked: {
            type: Boolean,
            required: [true, "If the vehicle is booked or not"],
        },
        capacity: {
            type: Number,
            required: [true, "Please add the capacity"],
        
        },
        vehicleType: {
            type: String,
            required: [true, "Please add type of vehicle"]
        },
         routes: {
            type:Number,
            required: [true, "Please add routes which the vehicle will follow."]
        },
          isAc: {
            type: Boolean,
            required: [true, "Please add the type of ac or non ac of vehicle."]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
