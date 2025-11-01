import AuditLog from '../models/AuditLog.js';

const listAudit = async (req, res) => {
  const page = parseInt(req.query.page || '1');
  const limit = parseInt(req.query.limit || '50');
  const skip = (page - 1) * limit;
  const logs = await AuditLog.find().sort('-timestamp').skip(skip).limit(limit).lean();
  res.json({ page, limit, logs });
};

module.exports = { listAudit };
