import mongoose from 'mongoose';

const url = 'mongodb://mongo:27017/loterias'

const db = () => mongoose.connect(url);

export default db;