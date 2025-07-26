const express = require('express')
let router = express.Router()

const {
    createVehicle,getVehicle,getByVehicleType,getByAcNonAc,getByroutes
} = require("../controller/vehicleController");


router.route("/").post(createVehicle);

router.route("/").get(getVehicle);

router.route("/vehiclebytype").get(getByVehicleType);

router.route("/acNonAc").get(getByAcNonAc);

router.route("/routes").get(getByroutes);


module.exports = router;

