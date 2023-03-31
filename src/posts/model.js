import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import UsersModel from "../users/model.js";

// (id, text, image)

const PostsModel = sequelize.define("posts", {
  postId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
});

UsersModel.hasMany(PostsModel, {
  foreignKey: { name: "userId", allowNull: false },
});
PostsModel.belongsTo(UsersModel, {
  foreignKey: { name: "userId", allowNull: false },
});

export default PostsModel;
