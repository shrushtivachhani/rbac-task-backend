const express = require('express');
const router = express.Router();
const { listAudit } = require('../controllers/auditController');
const { verifyToken, checkRole } = require('../middlewares/auth');

router.use(verifyToken);
router.get('/', checkRole(['Admin']), listAudit);

module.exports = router;

export default router;
