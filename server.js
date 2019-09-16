/* eslint-disable import/no-extraneous-dependencies */
import { createServer } from 'http';
import app from './routes/app';

const port = process.env.PORT || 3000;

const server = createServer(app);
// eslint-disable-next-line no-console
console.log('listening on port 3000');
server.listen(port);
