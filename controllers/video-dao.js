import videoModel from "../models/video-model.js";

export const createVideo = (videoID) => {
    const newVideo = new videoModel({videoID:videoID})
    return videoModel.create(newVideo);
};

export const findByVideoID = (videoID) => {
    console.log("dao: in find by video id - ", videoID)
    return videoModel.findOne({ videoID: videoID });
}

export const updateVideo = (video, newData) => {
    console.log("dao: udpate video")
    console.log("video", video)
    return videoModel.findOneAndUpdate(video._id, newData);
}
    
