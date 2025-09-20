const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/prospera', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
    dateofbirth: Date,
    income: Number,
    totalexpense: Number,
    savings: Number,
    financialgoal: Number,
    timeperiod: Number,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        const user = new User({ username, email, phone, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));