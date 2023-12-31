import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notfound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';


connectDB();



const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/user/chat', chatRoutes);

app.get('/', (req, res) => res.send('server is ready'));


app.use(notfound);
app.use(errorHandler);


app.listen(port, () => console.log(`server started on port ${port}`));


