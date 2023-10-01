import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { BookRoutes } from './app/modules/books/books.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use('/', BookRoutes);

// Api route entry point
app.get('/', (req: Request, res: Response) => {
  const bookFinderRes = `
    <div style="text-align: center; font-family: Poppins, sans-serif;">
        <p style="font-size: 10rem;"> 📚📖📚 </p>
        <p style="font-size: 35px;"> Welcome to Book-Finder Webpage. </p>
    </div>
`;
  res.send(bookFinderRes);
});

// Not Found API Error
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found!',
    errorMessages: [{ path: req.originalUrl, message: 'API Not Found!' }],
  });
  next();
});

export default app;
