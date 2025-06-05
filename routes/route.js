const express  = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    editItem,
    getSingleTask,
    deleteTask
} = require('../controller/controller');

router.route('/')
      .get(getAllTasks)
      .post(createTask);

router.route('/:id')
      .patch(editItem)
      .get(getSingleTask)
      .delete(deleteTask);

module.exports = router;
