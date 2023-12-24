const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Student = require("./student"); 
const Lesson  = require("./lesson");

class LessonStatus extends Model {}

//Sequelize will create this table if it doesn't exist on startup
LessonStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    lessonId: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Lesson, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }
  },

    studentId: {
      type: DataTypes.INTEGER, allowNull: true, required: false,
      references: {
          model: Student, //reference to another model
          key: "id", //column name of the referenced model
          indexes: [{ unique: true }],
      }
  },

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    completed: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      
    },
    
    
  },
  {
    sequelize: sequelizeInstance,
    modelName: "lessonStatus", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = LessonStatus;