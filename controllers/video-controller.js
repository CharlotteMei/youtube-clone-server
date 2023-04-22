import videoModel from "../models/video-model.js";
import * as dao from "./video-dao.js"

let currentVideo = null;

const VideosController = (app) => {
    const getCommentsByVideoID = async (req, res, next) => {
        try {
            console.log("in get comments by video id")
            const videoID = req.params.videoID;
            const video = await dao.findByVideoID(videoID)
            console.log(videoID);
            console.log(video);
            return res.json(video);
        } catch (ex) {
            next(ex);
        }
    }

    const updateCommentToVideo = async (req, res, next) => {
        try {
            const videoID = req.params.videoID;
            console.log("update comment to video")
            console.log("video id: ", videoID)
            console.log("req: ", req)

            const newData = {$set: req.body}
            console.log("new data: ", newData)

            let  videoIfExist = await dao.findByVideoID(videoID);
            if (!videoIfExist) {
                console.log("video not exist. creating video...")
                // this video id does not exist in the db collection yet
                videoIfExist = await dao.createVideo(videoID)
                
            }

            // update the comments field
            console.log("video to update: ", videoIfExist)
            const videoData = await dao.updateVideo(videoID, newData)
            console.log(videoData);
            return res.json(videoData);
        }
        catch (ex) {
            next(ex);
        }

    }

    app.get("/api/videos/:videoID/getcomments", getCommentsByVideoID);
    app.post("/api/videos/:videoID/updatecomments", updateCommentToVideo);

};

export default VideosController;