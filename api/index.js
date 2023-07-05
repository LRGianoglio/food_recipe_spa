const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {cargarDietsEnDDBB} = require('./cargarDietsEnDDBB')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    cargarDietsEnDDBB();
    console.log('%s listening at 3001');
  });
});
 