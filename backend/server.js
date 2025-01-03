const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { dbConnect } = require('./utiles/db')

app.use(cors({
    origin : ['http://localhost:3000','http://localhost:3001'],
    credentials: true
}))

require('dotenv').config()

app.use(bodyParser.json())
app.use(cookieParser())

// Các route APIs
app.use('/api/home', require('./routes/home/homeRoutes'))
app.use('/api', require('./routes/authRoutes'))
app.use('/api', require('./routes/order/orderRoutes'))
app.use('/api', require('./routes/home/cardRoutes'))
app.use('/api', require('./routes/dashboard/categoryRoutes'))
app.use('/api', require('./routes/dashboard/productRoutes'))
app.use('/api', require('./routes/dashboard/sellerRoutes'))
app.use('/api', require('./routes/home/customerAuthRoutes'))
app.use('/api', require('./routes/paymentRoutes'))
app.use('/api', require('./routes/dashboard/dashboardRoutes'))

// API root
app.get('/', (req, res) => res.send('Hello Server'))

const port = process.env.PORT
dbConnect()

// Chạy server Express mà không sử dụng socket.io
app.listen(port, () => console.log(`Server is running on port ${port}`))
