import mongoose from 'mongoose';

const url = 'mongodb+srv://api:thadeu@cluster0.mgoyf.mongodb.net/?retryWrites=true&w=majority'

const db = () => mongoose.connect(url);

export default db;