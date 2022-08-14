const express = require('express');
const AuthRoutes = express.Router();
const AuthController = require('../../controller/AuthController/AuthController');

AuthRoutes.post('/signup',AuthController.Registrations);

module.exports = AuthRoutes;
