const sequelize = require("sequelize");

Post.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    //why title? title for after id
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},

{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
}



);

module.exports = Post;