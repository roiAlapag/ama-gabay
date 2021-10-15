const pool = require("./db");

const sql = 'UPDATE ama.appointment SET date = $1 WHERE appointment_id = 1 RETURNING *';
const data = ['July 24,2023']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();