const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

const Teacher = require("./teacher"); 
const Student = require("./student");

class GuestUser extends Model {}

//Sequelize will create this table if it doesn't exist on startup
GuestUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    

  studentId: {
    type: DataTypes.INTEGER, allowNull: true, required: false,
    references: {
        model: Student, //reference to another model
        key: "id", //column name of the referenced model
        indexes: [{ unique: true }],
    }
},
    guestName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    accessKey: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },

  },
  {
    sequelize: sequelizeInstance,
    modelName: "guestUsers", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = GuestUser;