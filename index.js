const express = require('express')
const app = express()
var port = process.env.PORT || 8081;
app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.listen(port, () => {
    console.log("Express server is running on port " + port)
})
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/static/index.html`)
})