const fs = require('node:fs');

const TIMESTAMP = Date.now();
const DATE =new Date(TIMESTAMP);
const DAY = DATE.getDate();
const MONTH = DATE.getMonth()+1;
const YEAR = DATE.getFullYear();
const HOURS = DATE.getHours()
const MINUTUES = DATE.getMinutes()
const SECONDS = DATE.getSeconds()

const FILENAME = `${DAY}-${MONTH}-${YEAR}`;
const CONTENT = `${HOURS}-${MINUTUES}-${SECONDS}`
const PATH = './TASK/';
const COMPLETEPATH = `${PATH}${FILENAME}.txt`;

fs.writeFile(COMPLETEPATH,CONTENT,(err)=>{
if(err)throw err
console.log(CONTENT)
})

fs.readdir("./TASK",(err,data)=>{
if(err)throw console.log(err);
console.log(data)
data.map((d)=>console.log(d))
})




