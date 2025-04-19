import {Song} from "../models/song.model.js";
import {Album} from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadCloudinary  = async (file) =>{
    try{
        const result = await cloudinary.uploader.upload(file.tempFilePath,{
resource_type: "auto",
        });
        return result.secure_url;
    }catch(err){
        console.log(err);
        throw new Error("Error uploading");
    }
}


export const createSong = async(req, res, next) => {
    try{
        if(!req.files || !req.files.audioFile || !req.files.imageFile) return res.status(400).send('No file uploaded')
        const {title, artist, albumId, duration} = req.body
        const audioFile = req.files.audioFile
        const imageFile = req.files.imageFile

        const audioUrl = await uploadCloudinary(audioFile)
        const imageUrl = await uploadCloudinary(imageFile)
        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null,
        })

        await song.save()
        if(albumId ) await Album.findByIdAndUpdate(albumId, {
            $push: {
                songs: song._id
            }
        })
        res.status(201).json(song)


    }catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong", err})
        next(err)
    }
}

export const deleteSong = async(req, res, next) => {
    try{
       const {id} = req.params
        const song = await Song.findById(id)
        if(!song) return res.status(404).send('No song found')
        if(song.albumId){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: {song:song._id},
            })
        }
        await Song.findByIdAndDelete(id)
        res.status(200).json({message:"Successfully deleted"})

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong", err})
        next(err)
    }
}
export const createAlbum = async(req, res, next) => {
    try{
        const {title, artist, releaseYear} = req.body
        const {imageFile} = req.files
        const imageUrl = await uploadCloudinary(imageFile)
        const album = new Album({
            title,
            artist,
            releaseYear,
            imageUrl,
        })
        await album.save()
        res.status(201).json({album})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong", err})
        next(err)
    }
}

export const deleteAlbum = async(req, res, next) => {
    try{
        const {id} = req.params
        const album = await Album.findById(id)
        if(!album) return res.status(404).send('No album found')
        await Song.deleteMany({albumId:id})
        await Album.findByIdAndDelete(id)
        res.status(200).json({message:"Successfully deleted"})

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Something went wrong", err})
        next(err)
    }
}
export const checkAdmin = async(req, res, next) => {
    res.status(200).json({admin:true })
}