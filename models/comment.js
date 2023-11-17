const sequelize = require();

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    }, 

    // similar to title of blogpost.js
{
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, 

{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
   } 
);

module.exports = Comment;