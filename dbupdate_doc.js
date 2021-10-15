const pool = require("./db");

const sql = 'UPDATE ama.doctor SET first_name = $1 WHERE doctor_id = 1 RETURNING *';
const data = ['Annie']

pool.query(sql,data,(err,res)=>{
    if(err){
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});
pool.end();