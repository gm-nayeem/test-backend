const createError = require('http-errors');
const User = require('../models/User');
const { successResponse } = require('./responseController');

const createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);

        return successResponse(res, {
            statusCode: 201,
            message: 'User created successfully',
            payload: newUser
        });
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        await User.findByIdAndDelete(id);
        return successResponse(res, {
            statusCode: 200,
            message: 'User deleted successfully',
        });
    } catch (err) {
        next(err);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        successResponse(res, {
            statusCode: 200,
            message: 'Retured all users',
            payload: users
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createUser,
    deleteUser,
    getAllUser
}
