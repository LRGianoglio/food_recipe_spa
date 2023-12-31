const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_score: {
      type:DataTypes.FLOAT,
      allowNull: false
    },
    step_by_step: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });
};
