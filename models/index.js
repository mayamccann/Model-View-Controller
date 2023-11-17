const User = require('./user');
const Post = require('./blogpost');
const Comment = require('./comment');

// Defining and connecting files of models

User.hasMany(Post {
    foreignKey: 'user_id',
    onDelete: 'CASECADE'
});

//foreignKey: a filed in one table aka primary key in another table
//onDelete: on delete action for foreign key constraint





module.exports = { User, Post, Comment };
