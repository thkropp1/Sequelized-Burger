module.exports = function(sequelize, DataTypes) {
  return burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a burger from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devoured value to false if
      // it isn't supplied one
      defaultValue: false
    }
  }, {timestamps: false});
};
