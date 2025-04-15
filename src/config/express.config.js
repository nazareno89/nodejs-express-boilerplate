import bodyParser from 'body-parser'
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Log HTTP requests
app.use(logger)

app.router.use(routes)

export default app