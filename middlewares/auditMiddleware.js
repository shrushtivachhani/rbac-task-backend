const AuditLog = require('../models/AuditLog');

const audit = (actionType) => {
  return async (req, res, next) => {
    // attach a hook that runs after response sent
    res.on('finish', async () => {
      try {
        const performedBy = req.user?.userId || null;
        await AuditLog.create({
          actionType,
          performedBy,
          targetId: req.params.id || req.body?.id || null,
          role: req.user?.role || null,
          details: `${req.method} ${req.originalUrl} - status ${res.statusCode}`
        });
      } catch (err) {
        console.error('Failed to write audit log', err);
      }
    });
    next();
  };
};

module.exports = audit;
