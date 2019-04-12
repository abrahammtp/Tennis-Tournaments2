module.exports = function(Sequelize, DataTypes) {
  var Tourneys = Sequelize.define("Tourneys", {
    name: {
      type: DataTypes.STRING
    },
    attended: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Tourneys;
};