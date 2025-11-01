const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  accessLevel: { type: String, required: true },
  description: { type: String },
  permissions: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Role', RoleSchema);
