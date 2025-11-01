const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  roleType: { type: String },
  teamLeadId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
