import express from 'express';
import mongoose from "mongoose";
import session from "express-session";

import ProfilesController from './controllers/profiles-controller.js';
import AuthController from './controllers/users-controller.js';

mongoose.connect('mongodb://127.0.0.1:27017/5610project');
const app = express();
app.use(
    session({
        secret: "any string",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.json());
app.get('/', (req, res) => { res.send('Basic page') });
ProfilesController(app);
AuthController(app);
app.listen(4000)