import 'reflect-metadata';
import 'express-async-errors';

import cors from 'cors';
import dotenv from "dotenv"
import routers from './http/routes';

import express, { Request, Response, NextFunction } from 'express';
import SwaggerUi from 'swagger-ui-express';

import './container';
import swaggerDocs from './swagger.json';
import AppError from './errors/AppError';

dotenv.config()

const app = express();

app.use(cors());
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs))
app.use(express.json());
app.use(routers);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err)

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error.',
  });

});


app.listen(3333, () => {
  console.log("🚀 Started server in port 3333");
});