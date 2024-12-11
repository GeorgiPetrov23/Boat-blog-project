import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb://localhost:27017';
mongoose.connect(url, {dbName: 'Boat_blog'})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB failed: " + err));



app.get('/', (req, res) => {
    res.send("Welcome to mongoDB server");
})

app.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);;

        app.post('/items', async (req, res) => {
    const { name, quantity } = req.body;

    const newItem = new Item({ name, quantity });
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
    }
    catch (err) {
        throw new Error(err);
    }
})

app.post('/users', async (req, res) => {
    const {username, email, password} = req.body;

    const newUser = new User({username, email, password});
    try{
        const savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch(err){
        throw new Error(err);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    }
    catch(err) {
        throw new Error(err);
    }
})

app.listen(3000, () => console.log(`Server is running on http://localhost:${port}`))