import 'dotenv/config'
import app from './config/express.config.js'

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
