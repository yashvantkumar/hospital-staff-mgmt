const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    formattedName: { type: String, required: true, enum: ["NURSE", "DOCTOR", "SECURITY", "ATTENDER", "ADMIN"] },
    description: { type: String, required: false },
    permissionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Role = mongoose.model('roles', RoleSchema);
module.exports.Role = Role;
