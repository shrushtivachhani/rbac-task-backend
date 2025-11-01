const express = require('express');
const router = express.Router();
const { createTeam, listTeams, updateTeam, deleteTeam } = require('../controllers/teamController');
const { verifyToken, checkRole } = require('../middlewares/auth');
const validateScope = require('../middlewares/validateScope');
const audit = require('../middlewares/auditMiddleware');

router.use(verifyToken);

router.post('/', checkRole(['Admin']), audit('CREATE_TEAM'), createTeam);
router.get('/', checkRole(['Admin','HR','BDM','ASM','Employee','Super Employee']), listTeams);
router.put('/:id', checkRole(['Admin','ASM']), validateScope({ target: 'team' }), audit('UPDATE_TEAM'), updateTeam);
router.delete('/:id', checkRole(['Admin']), audit('DELETE_TEAM'), deleteTeam);

module.exports = router;
