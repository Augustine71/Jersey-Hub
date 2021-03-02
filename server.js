const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const toOrders = express.Router();
const PORT =process.env.PORT || 4000;

let Order = require('./models/orderdetails.model');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const uri =process.env.MONGODB_URI
mongoose.connect(uri , { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

toOrders.route('/').get((req, res) => {
    Order.find((err, orders) => {
        if (err) {
            console.log(err);
        } else {
            res.json(orders);
        }
    });
});

toOrders.route('/:id').get((req, res) => {
    let id = req.params.id;
    Order.findById(id, (err, order) => {
        res.json(order);
    });
});

toOrders.route('/add').post((req, res) => {
    let order = new Order(req.body);
    order.save()
        .then(order => {
            res.status(200).json({'message': 'order added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new order failed');
        });
});
  


app.use('/order', toOrders);

if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});