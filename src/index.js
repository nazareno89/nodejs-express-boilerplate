import 'dotenv/config'
import appConfig from './config/app.config.js'
import app from './config/express.config.js'

app.listen(appConfig.port, () => {
    console.log(`App listening on port ${appConfig.port}`)
})
