const express = require('express');
const router = express.Router();
const { createUser, listUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { verifyToken, checkRole } = require('../middlewares/auth');
const validateScope = require('../middlewares/validateScope');
const audit = require('../middlewares/auditMiddleware');

router.use(verifyToken);

router.post('/', checkRole(['Admin']), audit('CREATE_USER'), createUser);
router.get('/', checkRole(['Admin','HR','BDM','ASM','Employee','Super Employee']), listUsers);
router.get('/:id', checkRole([]), validateScope({ target: 'user' }), getUser);
router.put('/:id', checkRole(['Admin','HR','BDM','ASM','Super Employee']), validateScope({ target: 'user' }), audit('UPDATE_USER'), updateUser);
router.delete('/:id', checkRole(['Admin']), audit('DELETE_USER'), deleteUser);

module.exports = router;
