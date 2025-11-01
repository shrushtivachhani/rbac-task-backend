const express = require('express');
const router = express.Router();
const { createRole, listRoles, updateRole, deleteRole } = require('../controllers/roleController');
const { verifyToken, checkRole } = require('../middlewares/auth');
const audit = require('../middlewares/auditMiddleware');

router.use(verifyToken);
router.post('/', checkRole(['Admin']), audit('CREATE_ROLE'), createRole);
router.get('/', checkRole(['Admin']), listRoles);
router.put('/:id', checkRole(['Admin']), audit('UPDATE_ROLE'), updateRole);
router.delete('/:id', checkRole(['Admin']), audit('DELETE_ROLE'), deleteRole);



export default router;
