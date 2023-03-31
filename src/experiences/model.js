import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import UsersModel from "../users/model.js";

// (id, role, company, startDate, endDate, description, area, image)

const ExperiencesModel = sequelize.define("experiences", {
  experienceId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  role: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  startDate: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  endDate: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

UsersModel.hasMany(ExperiencesModel, {
  foreignKey: { name: "userId", allowNull: false },
});
ExperiencesModel.belongsTo(UsersModel, {
  foreignKey: { name: "userId", allowNull: false },
});

export default ExperiencesModel;
