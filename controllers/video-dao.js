import videoModel from "../models/video-model.js";

export const createVideo = (videoID) => {
    const newVideo = new videoModel({videoID:videoID})
    return videoModel.create(newVideo);
};

export const findByVideoID = (videoID) => {
    console.log("dao: in find by video id")
    return videoModel.findOne({ videoID: videoID });
}

export const updateVideo = (videoID, newData) => {
    return videoModel.updateOne({ videoID: videoID }, newData);
}
    
