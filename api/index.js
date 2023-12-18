import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB"); 
}).catch((err) => {
    console.log(err);
})



const app = express();

// what is 3000 
// what is port how does it work 
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
})

app.use(express.json())

app.use(cookieParser());

// midware
app.use((e, req, res, next) => { 
    const statusCode = e.statusCode || 500; 
    const message = e.message || " Internal Server Error";
    return res.status(statusCode).json({
        success: false, 
        statusCode, 
        message
    });
})  


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);



