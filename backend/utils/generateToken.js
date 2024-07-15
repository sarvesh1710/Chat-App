import jwt from 'jsonwebtoken'

const generateTokenAndSetCoookie =(userId,res)=> {
    const token = jwt.sign({userId},process.env.JWT_SECRET,
        {
            expiresIn:'15d'
        }
    )
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true, //prevent xss attack cross-site scripting attack
        sameSite:"strict", // CSRF attack cross-site request forgery attack
        secure: process.env.NODE_ENV !== 'development'
    })
}

export default generateTokenAndSetCoookie;