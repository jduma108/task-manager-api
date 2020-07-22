const mongoose = require('mongoose')
const mongodbURL = process.env.MONGODB_URL

mongoose.connect(mongodbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})