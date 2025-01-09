import { Request, Response, NextFunction } from "express";

const noCache = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  next();
};

export default noCache;
