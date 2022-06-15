import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).json({
            errorCode: "token.invalid"
        })
    }

    // Bearer 5515qualquer5453coisa145161
    const [,token] = authToken.split(' ')

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload

        req.user_id = sub

        return next()
        
    } catch (err) {
        console.log(err)

        return res.status(401).json({
            errorCode: "token.expired"
        })
    }
}
