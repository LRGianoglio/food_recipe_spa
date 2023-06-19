const { Router } = require('express');
const recipesRoute = require("./recipesRoutes.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use("/recipes", recipesRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
