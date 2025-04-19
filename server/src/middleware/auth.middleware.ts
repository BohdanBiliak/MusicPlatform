import {clerkClient} from '@clerk/express'
export const protectRoute = async(req:any,res:any,next:any)=>{
    if(!req.auth.userId) return res.status(401).send('Authentication required')
    next()
}

export const requireAdmin = async(req:any,res:any,next:any)=>{
    try{
      const currentUser = await clerkClient.users.getUser(req.user.userId)
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress
        if(!isAdmin) return res.status(403).send('you must be an admin')
        next()
    }catch(err){
        next(err)
    }
}