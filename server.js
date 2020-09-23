const express = require('express')
const connectDB = require('./config/database')

const app = express()

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
// 	res.render('index')
// })

// Connect to database
connectDB()

app.use(express.json())

// Define Routes
app.use('/', require('./routes/index'))
// Returns response (for testing)
//app.use('/', (request, response) => response.send('Hello'))
app.use('/api/url', require('./routes/Url'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
