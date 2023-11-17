const User = require('./user');
const Post = require('./blogpost');
const Comment = require('./comment');

// Defining and connecting files of models

User.hasMany(Post) {
    foreignKey:
    onDelete: 
}





module.exports = { User, Post, Comment };
