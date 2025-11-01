const express = require('express');
const router = express.Router();
const { listNotifications, markRead } = require('../controllers/notificationController');
const { verifyToken } = require('../middlewares/auth');
const audit = require('../middlewares/auditMiddleware');

router.use(verifyToken);

router.get('/', audit('LIST_NOTIFICATIONS'), listNotifications);
router.put('/mark-read', audit('MARK_NOTIFICATION_READ'), markRead);

module.exports = router;

export default router;
