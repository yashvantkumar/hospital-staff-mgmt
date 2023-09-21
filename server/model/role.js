const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    formattedName: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    permissionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Role = mongoose.model('roles', RoleSchema);
module.exports.Role = Role;
