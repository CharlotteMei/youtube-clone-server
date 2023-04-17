import profilesModel from "../models/profiles-model.js";

export const createProfile = (profile) => profilesModel.create(profile);

export const findProfiles = () => profilesModel.find();
// export const findOneProfile = (condition) => profilesModel.findOne({condition});
export const findOneProfileByID = (pid) => profilesModel.findById(pid);


export const updateProfile = (pid, profile) => profilesModel.updateOne({_id: pid}, {$set: profile})

// export const deleteProfile = (pid) => profilesModel.deleteOne({_id: pid});