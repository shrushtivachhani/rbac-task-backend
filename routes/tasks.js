const express = require('express');
const router = express.Router();
const { createTask, listTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const { verifyToken, checkRole } = require('../middlewares/auth');
const validateScope = require('../middlewares/validateScope');
const audit = require('../middlewares/auditMiddleware');

router.use(verifyToken);

router.post('/', checkRole(['Admin','HR','BDM','ASM']), validateScope({ target: 'task' }), audit('CREATE_TASK'), createTask);
router.get('/', checkRole(['Admin','HR','BDM','ASM','Employee','Super Employee']), listTasks);
router.get('/:id', checkRole(['Admin','HR','BDM','ASM','Employee','Super Employee']), validateScope({ target: 'task' }), getTask);
router.put('/:id', checkRole(['Admin','Super Employee','Employee']), validateScope({ target: 'task' }), audit('UPDATE_TASK'), updateTask);
router.delete('/:id', checkRole(['Admin']), audit('DELETE_TASK'), deleteTask);

module.exports = router;
