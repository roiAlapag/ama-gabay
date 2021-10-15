const pool = require("./db");

const sql = 'INSERT INTO ama.appointment(date, tp_sickness_id, tp_appointment_id, client_id, doctor_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
const data = ['October 11,2022',1,2,4,1]

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();