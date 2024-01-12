const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./db')
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');


dotenv.config();

connectDB();
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/order", orderRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        'message': "Node server"
    })
})

const PORT = process.env.PORT || 8040;

app.listen(8040, () => {
    console.log(`Server running on port ${PORT}`.bgCyan.white);
});