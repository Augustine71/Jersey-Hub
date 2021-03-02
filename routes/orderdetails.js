const router = require('express').Router();
let Orderdetails = require('../models/orderdetails.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(orderdetails => res.json(orderdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const jersey = req.body.jersey;
  const accessory = req.body.accessory;
  const time =Number(req.body.time);
  const number = Number(req.body.number);
  const id = req.body._id;
  const price= Number(req.body.price);
  const name= req.body.name;
  const address=  req.body.address;

  const newOrderdetails = new Orderdetails({
    jersey,
    accessory,
    time,
    number,
    id,
    price,
    name,
    address,
  });

  newOrderdetails.save()
  .then(() => res.json('Order details added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Orderdetails.findById(req.params.id)
    .then(orderdetails => res.json(orderdetails))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;