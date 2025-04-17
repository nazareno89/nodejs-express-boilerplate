import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import routes from '../app/routes/index.js'
import logger from './logger.config.js'

const app = express()

// Set security HTTP headers
app.use(helmet())

// Enable CORS for all requests
app.use(cors())

// Parse incoming requests with JSON payloads
// and URL-encoded payloads
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Log HTTP requests
app.use(logger)

// Hide stack traces in production
if (app.get('env') === 'production') {
  app.use((err, req, res, next) => {
    res.status(500).send('Server Error');
  });
}

app.router.use(routes)

export default app