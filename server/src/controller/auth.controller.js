import {User} from "../models/user.model.js";

export const authCallBack = async (req, res) => {
    try{
        const {id, firstName, lastName, imageUrl} = req.body;
        const user = await User.findOne({clerkId: id});
        console.log(user)
        if (!user) {
            await User.create({
                clerkId: id,
                firstName: `${firstName} ${lastName}`,
                imageUrl: imageUrl,
            })
        }
        res.status(200).json({success: true, user: user});

    }catch(err){
        console.log(err);
        res.status(500).json({success: false, error: err});
    }
}