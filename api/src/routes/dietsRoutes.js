const {Router} = require("express");

const {
    getDiets
} = require("../handlers/dietHandlers")

const dietsRoutes = Router();

dietsRoutes.use("/", getDiets)

module.exports = dietsRoutes;