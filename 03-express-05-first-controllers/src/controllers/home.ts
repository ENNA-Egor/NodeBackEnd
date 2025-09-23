import { Request, Response } from 'express';

export const getHomePage = (req: Request, res: Response) => {
  console.log(req.query);

  res.json({ message: 'home page' });
};

export const createAtHome = (req: Request, res: Response) => {
  console.log(req.body);

  res.json({ message: 'home page' });
};
