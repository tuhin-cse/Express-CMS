const express = require('express')
const path = require("path")

const app = express()

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','html')
app.engine('html', require('ejs').renderFile)


app.get('/admin*', (req, res) => {
    return res.render('admin/index')
})

app.get('/', (req, res) => {
    return res.render('index')
})

app.listen(4500, () => {
    console.log('App running on port http://localhost:4500')
})


