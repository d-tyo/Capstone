const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;



class Teacher extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
   
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
      required: false,
      unique: false, //it cannot be different
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: false,
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
      unique: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "teachers", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Teacher;