//setting Configuration
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes')
const userRoutes = require('./routes/userRoutes')

//Express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next();
})

//Express Middleware
app.use(express.json());

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
var cors = require('cors')
app.use(cors());

//routes 
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

//connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(()=>{
    //server listening 
    app.listen(process.env.PORT, () => {
        console.log('Server Running and MongoDB Connected', process.env.PORT)
    })
})
.catch((err)=>console.log(err))