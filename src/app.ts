import cors from 'cors';
import express, { Application } from 'express';
// import config from './config';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import config from './config';
import path from 'path';
import fs from 'fs';
import markdownIt from 'markdown-it';

const app: Application = express();
const md = markdownIt();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.use(globalErrorHandler);

const readmePath = path.join(__dirname, '..', 'README.md');
// render README.md file on base url link
const readmeContent = fs.readFileSync(readmePath, 'utf8');
const readmeHtml = md.render(readmeContent);

app.get('/', (req, res) => {
  res.send(readmeHtml);
});

export default app;
