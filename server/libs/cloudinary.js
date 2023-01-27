import { v2 as cldnry } from "cloudinary";
import { CLD_API_KEY, CLD_NAME, CLD_PASSWORD } from "../config.js";

cldnry.config({
    "cloud_name": CLD_NAME,
    "api_key": CLD_API_KEY,
    "api_secret": CLD_PASSWORD
})

export const uploadImage = async filePath => {
    return await cldnry.uploader.upload(filePath, {
        folder: 'postsdb'
    })
}

export const deleteImage = async id => {
    return await cldnry.uploader.destroy(id)
}