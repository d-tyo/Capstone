const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Teacher = require("./teacher") 

class Student extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    teacherId: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Teacher, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }
  },
    userName: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
      required: false,
      // unique: true,
    },
    capability: {
      type: DataTypes.STRING,
      allowNull: false,
      required: false,
      // unique: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
      // unique: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
      
    },
    
  },
  {
    sequelize: sequelizeInstance,
    modelName: "students", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Student;