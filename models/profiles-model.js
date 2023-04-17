import mongoose from 'mongoose';
import profilesSchema from '../schemas/profiles-schema.js';
const profilesModel = mongoose
              .model('ProfilesModel', profilesSchema);
export default profilesModel;

