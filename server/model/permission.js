const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    permId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    formattedName: { type: String, required: true, unique: true },
    permissions: [{
        type: String,
        enum: ["CREATE", "READ", "UPDATE", "DELETE"]
    }],
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Permission = mongoose.model('permissions', PermissionSchema);
module.exports.Permission = Permission;
