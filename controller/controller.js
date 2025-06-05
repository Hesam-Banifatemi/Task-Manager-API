const BasicModel = require('../model/model');
const asyncWrapper = require("../middlewares/asyncWrapper");
const {createCustomeError} = require('../errors/costum-error');

const getAllTasks = asyncWrapper(async(req, res) => {
    const tasks = await BasicModel.find({});
    res.status(200).json({tasks, amountOfTask: tasks.length})
});

const getSingleTask = asyncWrapper(async(req, res, next) => {
    const {id:taskID} = req.params;
    const singleTask = await BasicModel.findOne({_id: taskID});
    if(!singleTask) {
        return next(createCustomeError('no such item to get', 404));
    }
    res.status(200).json({singleTask});
})
const createTask = asyncWrapper(async(req, res) => {
    const task = await BasicModel.create(req.body);
    res.status(201).json({task});
});


const editItem = asyncWrapper(async(req, res, next) => {
    const {id:itemID} = req.params;
    const editedTask = await BasicModel.findOneAndUpdate({_id: itemID}, req.body, {
        new: true, runValidators: true
    });
    if(!editedTask) {
        return next(createCustomeError(`no such task to update`, 404));
    }
    res.status(200).json({editedTask});
});

const deleteTask = asyncWrapper(async(req, res, next) => {
    const {id:itemID} = req.params;
    const task = await BasicModel.findOneAndDelete({_id: itemID});
    if(!task) {
        return next(createCustomeError('no such id to delete', 404));
    }
    res.status(200).json({msg: `${itemID} deleted `});
}) 

module.exports = {
    getAllTasks,
    createTask,
    editItem,
    getSingleTask,
    deleteTask
};
