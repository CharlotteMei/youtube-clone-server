import * as profilesDao from "../daos/profiles-dao.js"

const ProfilesController = (app) => {
    app.post('/api/create-profile', createProfile);
    app.get('/api/profiles', findProfiles);
    app.get('/api/profiles/:pid', findOneProfileByID)
    app.put('/api/profiles/:pid', updateProfile);
}

// create a new profile
const createProfile = async (req, res) => {
    const newProfile = req.body;
    const insertedProfile = await profilesDao
        .createProfile(newProfile);
    res.json(insertedProfile);
}

// find all profile by profile id
const findProfiles = async (req, res) => {
    const profiles = await profilesDao.findProfiles()
    res.json(profiles);
}

// find a profile by profile id
const findOneProfileByID = async (req, res) => {
    const profileId = req.params.pid
    console.log("find profile with id: ", profileId)

    const profile = await profilesDao.findOneProfileByID(profileId)
    res.json(profile);
}

// update a profile
const updateProfile = async (req, res) => {
    const profileIdToUpdate = req.params.pid;
    const updates = req.body;
    const status = await profilesDao
        .updateProfile(profileIdToUpdate,
            updates);
    res.json(status);
}

export default ProfilesController