const express = require('express')
let router = express.Router()

const {
    createVehicle,getVehicle,getByVehicleType,getByAcNonAc,getByroutes,checkVehicleIsBooked
} = require("../controller/vehicleController");


router.route("/").post(createVehicle);

router.route("/").get(getVehicle);

router.route("/vehiclebytype").get(getByVehicleType);

router.route("/acNonAc").get(getByAcNonAc);

router.route("/routes").get(getByroutes);

router.route("/checkIsBooked").get(checkVehicleIsBooked);


module.exports = router;

