module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(5,2),
      allowNull: false
    },
    description:{
      type: Sequelize.STRING,
      allowNull:false,

    }
  });

  return Product}

