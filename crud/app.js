import express from 'express'
// import mongoose from 'mongoose'
import connectDb from './db/connectdb.js'
import {join} from 'path'
import web from './routes/web.js'
// import StudentController from './controllers/studentController.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"


//Database connection
connectDb(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

//Static files
app.use(express.static(join(process.cwd(),"public")))


//Set template engine
app.set("view engine","ejs")


//Load routes
app.use("/student",web)





app.listen(port,()=>{
    console.log("Listening at the port");
})