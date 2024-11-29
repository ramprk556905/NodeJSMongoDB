const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.routes.js')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/products',productRoutes)



app.get('/',(req,res)=>{
    res.send("Hello from Node API");
});



mongoose.connect('mongodb+srv://ramprk97:admin@backenddb.c9uhv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {console.log('Connected to the database')
    app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});
})
  .catch(err => console.error(err));

