const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const taskValidationRules = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status value'),
  body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority value'),
];

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', taskValidationRules, createTask);
router.put('/:id', taskValidationRules, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;