import mongoose from 'mongoose';
import megasenaSchema from '../database/schemas/MegasenaSchema';

const MegasenaModel = mongoose.model('Game', megasenaSchema);

export default MegasenaModel;