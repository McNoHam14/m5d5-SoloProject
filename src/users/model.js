import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// (id, name, surname, email, bio, title, area, image)

const UsersModel = sequelize.define("user", {
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  // image: {
  //     type: DataTypes.STRING(50),
  //     allowNull: false,
  // },
});

export default UsersModel;
