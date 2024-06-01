import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';

interface DecodedToken {
  user: {
    id: string;
  };
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
    return;
  }
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as DecodedToken;
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
