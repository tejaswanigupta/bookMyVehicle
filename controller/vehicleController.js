
var Vehicle = require("../model/vehicleModel")


const getVehicle = (request, response) => {
    response.json({
        vehicle: "vehicles"
    });
  
};


const createVehicle = async (request, response) => {
    const { vehicleType, routes, isAc, isBooked, capacity, } = request.body;

    try {

        const newVehicle = await Vehicle.create({
            vehicleType: vehicleType,
            routes: routes,
            isAc: isAc,
            isBooked: isBooked,
            capacity: capacity,

        });

        response.json({
        status: "success",
        newVehicle: newVehicle,
      });
        
    } catch (error) {

         response.json({
        status: "Failure",
        message: error.message,
         });
        
    }

  
}

const getByVehicleType = async (request, response) => 
{

    const vehicleType = request.query.vehicleType;
    try {
        const vehicles = await Vehicle.find({ vehicleType: vehicleType })

        response.json({
            status: "success",
            result: vehicles,
        });
        
    } catch (error) {
  
        response.json({
            status: "Failure",
            message: error.message,
        });
    }


}

const getByAcNonAc = async (request, response) => 
{

    const acNonAc = request.query.isAc;
    try {
        const vehicles = await Vehicle.find({ isAc: acNonAc })

        response.json({
            status: "success",
            result: vehicles,
        });
        
    } catch (error) {
  
        response.json({
            status: "Failure",
            message: error.message,
        });
    }


}


const checkVehicleIsBooked = async (request, response) => 
{

    const isBooked = request.query.isBooked;
    try {
        const vehicles = await Vehicle.find({ isBooked: isBooked })

        response.json({
            status: "success",
            result: vehicles,
        });
        
    } catch (error) {
  
        response.json({
            status: "Failure",
            message: error.message,
        });
    }


}
const getByroutes = async (request, response) => 
{

    const routes = request.query.routes;
    try {
        const vehicles = await Vehicle.find({ routes: routes })

        response.json({
            status: "success",
            result: vehicles,
        });
        
    } catch (error) {
  
        response.json({
            status: "Failure",
            message: error.message,
        });
    }


}












module.exports = {
    createVehicle,getVehicle,getByVehicleType,getByAcNonAc,getByroutes,checkVehicleIsBooked
}

