import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://imgs.search.brave.com/pO94k9yZcsDjlwLJtAyBbvvI2M4ugV_Zx7fWwVg_he8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc2LzY5LzY3/LzM2MF9GXzU3NjY5/Njc1MV9zb2NXTXRl/aEVXcDRTeXZEbEp0/c3RJQWtCYWtrR1RW/ay5qcGc'
    },
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;