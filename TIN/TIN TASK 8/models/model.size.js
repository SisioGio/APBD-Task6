module.exports = (sequelize, Sequelize) => {
  const Size = sequelize.define("sizes", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Size}

