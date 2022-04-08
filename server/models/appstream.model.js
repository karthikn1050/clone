module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("appstream", {
      
      AppName: {
        type: DataTypes.JSON,
      },
     
      username: {
        type: DataTypes.STRING
      }
    });
  
    return Image;
  };
  