const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema( {
    taskName: {
        type: String,
        required: [true, "taskName Can not be empty!!"],
        trim: true,
        maxlength: [24, 'taskName must be lower than 24 characters']
    }, 
    completion_status: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('BasicModel', taskSchema);