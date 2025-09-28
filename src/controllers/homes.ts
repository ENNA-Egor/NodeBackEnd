import {Request, Response} from 'express';

// export const getHomePage = (req:Request, res:Response) => {
//   console.log (req.query);
//   res.send('<h1>Hello from Home page. Page number one  <h2> One  <button type="button">Open page About</button>');
// }

export const postHomePage = (req:Request, res:Response) => {
  console.log(req.body);
  res.json({ message: 'home page' });
}

export const getAboutPage = (req:Request, res:Response) => {
   res.send('<h1>Hello from About page. Page number two <h2> Two <button type="button">Open page Home</button>');
}

export const getAllPage = (req:Request, res:Response) => {
   res.status(404).send('<h1>Nothing found.');
}