import mongoose from 'mongoose';
import megasenaSchema from '../database/schemas/MegasenaSchema';

const MegasenaModel = mongoose.model('Megasena', megasenaSchema);

export default MegasenaModel;