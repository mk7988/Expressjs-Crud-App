import mongoose from "mongoose";

//Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String , required:true , trim:true},
    age:{type: Number , required:true , min:18 , max:60},
    fees:{type: mongoose.Decimal128 , reuired:true , validate:(value)=>value >=5000.50}
})

//Compiling schema or Defining model
const StudentModel = mongoose.model('student',studentSchema)

export default StudentModel