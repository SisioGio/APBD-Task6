module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthdate: {
      type: Sequelize.DATEONLY,
      allowNull:false
    },
    email: {
     type: Sequelize.STRING,
     allowNull: false
    }
  });

  return User}

