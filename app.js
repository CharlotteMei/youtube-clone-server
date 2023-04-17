import express from 'express';
import mongoose from "mongoose";

import ProfilesController from './controllers/profiles-controller.js';

mongoose.connect('mongodb://127.0.0.1:27017/5610project');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {res.send('Basic page')});
ProfilesController(app);
app.listen(4000)