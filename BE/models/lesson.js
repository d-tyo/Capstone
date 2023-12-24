const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Teacher = require("./teacher");
const sequelizeInstance = dbConnect.Sequelize;

class Lessons extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Lessons.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    teacherId: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Teacher, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }
  },
     
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    grade: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      
    },

  },
  {
    sequelize: sequelizeInstance,
    modelName: "lessons", //use lowercase plural format
    timestamps: true, // Create/updatedAt
    freezeTableName: true,
  }
);

module.exports = Lessons;