import morgan from 'morgan'
import { createStream } from 'rotating-file-stream'

const rfsStream = createStream('logger.log', {
    size: '5M', // rotate every 10 MegaBytes written
    interval: '1d', // rotate daily
    compress: 'gzip' // compress rotated files
})

const logger = morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev', {
    stream: rfsStream,
})

export default logger