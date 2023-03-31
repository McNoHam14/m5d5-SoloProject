import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// (id, role, company, startDate, endDate, description, area, image)

const PostsModel = sequelize.define("experience", {
  postsId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  // image: {
  //     type: DataTypes.STRING(50),
  //     allowNull: false,
  // },
});

export default PostsModel;
