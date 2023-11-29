import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const d = new Date();
const day_num = d.getDay();
console.log(day_num)
app.get('/',(req,res)=>{
    res.render(__dirname + '/view.ejs' , {day : day_num});
})
app.listen('3000' , (req,res)=>{
    console.log("listening on port 3000");
})