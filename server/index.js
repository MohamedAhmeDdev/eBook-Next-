const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
const database = require('./database')
const book = require('./routes/books')


try {
    database.authenticate();
    console.log('you are connected to the database...');
} catch (error) {
    console.error('Connection error:', error);
}



app.use(cors());
app.use('/Images', express.static('./Images'))
app.use('/books', book)





 
app.listen(5000, () => console.log('Server running at port 5000'));