const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  actionType: String,
  performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  targetId: { type: mongoose.Schema.Types.ObjectId },
  role: String,
  details: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);
