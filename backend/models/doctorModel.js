import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true}
}, {minimize: false})

const doctorModel =mongoose.models.doctor ||  mongoose.model('doctor',doctorSchema)

export default doctorModel