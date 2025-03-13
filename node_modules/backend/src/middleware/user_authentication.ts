import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

interface DecodedToken extends JwtPayload {
    id: string;
  }

const userAuth = (req: Request, res: Response, next: NextFunction): void =>{
    const token = req.headers.authorization?.startsWith('Bearer ') 
    ? req.headers.authorization.split(' ')[1] 
    : null;

    if(!token){
    res.status(401).json({message: 'Authorization token is requires '});
    return;
    }

    try{
    const decoced = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

    (req as any).user = {id: decoced.id};
    next();
    }catch(error){
        res.status(401).json({message: 'Invalid or expired token'});
    }
}

export default userAuth;