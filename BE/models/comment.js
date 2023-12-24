const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Teacher = require("./teacher"); 
const Student = require("./student");

class Comment extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Comment.init(
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

  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Comment;