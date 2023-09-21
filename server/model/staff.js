const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    staffId: { type: String, required: true, unique: true },
    roleId: { type: String, required: true },
    department: { type: String, required: true },
    name: { type: String, required: true },
    emailId: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"] },
    status: { type: String, enum: ["ACTIVE", "LEFT"] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Staff = mongoose.model('staff', StaffSchema);
module.exports.Staff = Staff;
