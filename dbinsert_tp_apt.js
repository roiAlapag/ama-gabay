const pool = require("./db");

const sql = 'INSERT INTO ama.type_appointment(appointment_name) VALUES ($1) RETURNING *';
const data = ['home']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();